import json
import hmac
import hashlib
import os

def verify_signature(payload_body, signature, secret):
    """Verify that the webhook request came from GitHub."""
    if not signature:
        return False
    
    sha_name, signature = signature.split('=')
    if sha_name != 'sha256':
        return False

    mac = hmac.new(secret.encode('utf-8'), msg=payload_body, digestmod=hashlib.sha256)
    return hmac.compare_digest(mac.hexdigest(), signature)

def lambda_handler(event, context):
    # Get the GitHub webhook secret from environment variables
    webhook_secret = os.environ.get('GITHUB_WEBHOOK_SECRET')
    
    # Get the request headers and body
    headers = event.get('headers', {})
    body = event.get('body', '')
    
    # Verify the webhook signature
    signature = headers.get('X-Hub-Signature-256')
    if not verify_signature(body.encode('utf-8'), signature, webhook_secret):
        return {
            'statusCode': 401,
            'body': json.dumps('Invalid signature')
        }
    
    # Parse the GitHub event
    try:
        payload = json.loads(body)
        event_type = headers.get('X-GitHub-Event')
        
        # Log the event details
        print(f"Received GitHub event: {event_type}")
        print(f"Event payload: {json.dumps(payload, indent=2)}")
        
        # Handle different event types
        if event_type == 'push':
            # Handle push events
            return {
                'statusCode': 200,
                'body': json.dumps({
                    'message': 'Push event received',
                    'repository': payload.get('repository', {}).get('name'),
                    'branch': payload.get('ref', '').split('/')[-1]
                })
            }
        elif event_type == 'pull_request':
            # Handle pull request events
            return {
                'statusCode': 200,
                'body': json.dumps({
                    'message': 'Pull request event received',
                    'action': payload.get('action'),
                    'pr_number': payload.get('pull_request', {}).get('number')
                })
            }
        else:
            # Handle other event types
            return {
                'statusCode': 200,
                'body': json.dumps({
                    'message': f'Received {event_type} event',
                    'event_type': event_type
                })
            }
            
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'body': json.dumps('Invalid JSON payload')
        }
    except Exception as e:
        print(f"Error processing webhook: {str(e)}")
        return {
            'statusCode': 500,
            'body': json.dumps('Internal server error')
        } 