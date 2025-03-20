import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { log } from './vite';

// Map of assets that we want to serve
const ASSET_MAP = {
  'hero.mp4': {
    type: 'video/mp4',
    fallback: 'https://assets.mixkit.co/videos/preview/mixkit-successful-businessmen-talking-in-an-interview-546-large.mp4'
  },
  'logo.png': {
    type: 'image/png',
    fallback: 'https://via.placeholder.com/100x100/ae8300/FFFFFF?text=OL'
  },
  'home-banner.png': {
    type: 'image/png',
    fallback: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  'grand-orate.jpg': {
    type: 'image/jpeg',
    fallback: 'https://images.unsplash.com/photo-1560523159-6b681a1e1852?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  'favicon.ico': {
    type: 'image/x-icon',
    fallback: 'https://www.google.com/favicon.ico'
  }
};

export const serveAsset = (req: Request, res: Response) => {
  const { filename } = req.params;
  const asset = ASSET_MAP[filename as keyof typeof ASSET_MAP];

  if (!asset) {
    return res.status(404).send('Asset not found');
  }

  // Try to find the asset in the public directory first
  const publicPath = path.resolve(process.cwd(), 'public', filename);
  
  if (fs.existsSync(publicPath)) {
    return res.type(asset.type).sendFile(publicPath);
  }

  // If running in development, try to find the asset in the client directory
  if (process.env.NODE_ENV === 'development') {
    const devPath = path.resolve(process.cwd(), 'client/public', filename);
    
    if (fs.existsSync(devPath)) {
      return res.type(asset.type).sendFile(devPath);
    }
  }

  // If the asset is not found locally, redirect to the fallback URL
  if (asset.fallback) {
    log(`Asset ${filename} not found locally, using fallback URL`);
    return res.redirect(asset.fallback);
  }

  return res.status(404).send('Asset not found');
};
