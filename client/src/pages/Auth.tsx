import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import logoImage from '@/assets/img/logo.png';

// Define form schemas
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const registerSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  accountType: z.enum(['individual', 'speaker', 'corporate']),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions'
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

// Additional field schemas based on account type
const speakerFields = z.object({
  specialization: z.string().min(2, 'Please specify your area of expertise'),
  experience: z.string().min(2, 'Please provide your years of experience'),
  portfolio: z.string().optional(),
});

const corporateFields = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  position: z.string().min(2, 'Your position is required'),
  companySize: z.string().min(1, 'Company size is required'),
  industry: z.string().min(2, 'Industry is required'),
});

// Types
type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;
type SpeakerFormValues = z.infer<typeof speakerFields>;
type CorporateFormValues = z.infer<typeof corporateFields>;

const Auth = () => {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [accountType, setAccountType] = useState<'individual' | 'speaker' | 'corporate'>('individual');
  const [step, setStep] = useState(1);
  const { theme } = useTheme();
  const [, setLocation] = useLocation();

  // Login form
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  // Register form
  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      accountType: 'individual',
      agreeTerms: false,
    }
  });

  // Speaker form
  const speakerForm = useForm<SpeakerFormValues>({
    resolver: zodResolver(speakerFields),
    defaultValues: {
      specialization: '',
      experience: '',
      portfolio: '',
    }
  });

  // Corporate form
  const corporateForm = useForm<CorporateFormValues>({
    resolver: zodResolver(corporateFields),
    defaultValues: {
      companyName: '',
      position: '',
      companySize: '',
      industry: '',
    }
  });

  const onLoginSubmit = async (data: LoginFormValues) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const result = await response.json();
      setLocation('/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      // You might want to show this error to the user
    }
  };

  const onRegisterSubmit = async (data: RegisterFormValues) => {
    try {
      setAccountType(data.accountType);

      if (data.accountType === 'individual') {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            email: data.email,
            password: data.password,
            fullName: data.fullName,
            accountType: 'individual',
          }),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message);
        }

        const result = await response.json();
        setLocation('/dashboard');
      } else {
        setStep(2);
      }
    } catch (error: any) {
      console.error('Registration error:', error);
      // You might want to show this error to the user
    }
  };

  const onSpeakerSubmit = async (data: SpeakerFormValues) => {
    try {
      const registerData = registerForm.getValues();
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: registerData.email,
          password: registerData.password,
          fullName: registerData.fullName,
          accountType: 'speaker',
          speakerProfile: data,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const result = await response.json();
      setLocation('/dashboard');
    } catch (error: any) {
      console.error('Speaker registration error:', error);
      // You might want to show this error to the user
    }
  };

  const onCorporateSubmit = async (data: CorporateFormValues) => {
    try {
      const registerData = registerForm.getValues();
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          email: registerData.email,
          password: registerData.password,
          fullName: registerData.fullName,
          accountType: 'corporate',
          corporateProfile: data,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const result = await response.json();
      setLocation('/dashboard');
    } catch (error: any) {
      console.error('Corporate registration error:', error);
      // You might want to show this error to the user
    }
  };

  const cardBgClass = theme === 'dark' ? 'bg-darkAccent' : 'bg-cream';
  const textClass = theme === 'dark' ? 'text-white' : 'text-dark';
  const inputBgClass = theme === 'dark' ? 'bg-dark' : 'bg-white';

  return (
    <div className={`min-h-screen flex items-center justify-center py-12 px-4 ${theme === 'dark' ? 'bg-dark' : 'bg-creamLight'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`max-w-md w-full ${cardBgClass} rounded-2xl shadow-lg p-8`}
      >
        <div className="flex justify-center mb-6">
          <img src={logoImage} alt="Oratory League Logo" className="h-16 w-16" />
        </div>
        
        <h2 className="text-2xl font-bold text-gold text-center mb-6">
          {authMode === 'login' ? 'Sign in to your account' : 'Create your account'}
        </h2>

        {/* Toggle between login and register */}
        <div className="flex justify-center mb-8">
          <div className="bg-gold/20 rounded-full p-1 flex">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                authMode === 'login' 
                  ? 'bg-gold text-dark' 
                  : `${textClass} hover:text-gold`
              }`}
              onClick={() => setAuthMode('login')}
            >
              Sign In
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                authMode === 'register' 
                  ? 'bg-gold text-dark' 
                  : `${textClass} hover:text-gold`
              }`}
              onClick={() => {
                setAuthMode('register');
                setStep(1);
              }}
            >
              Register
            </button>
          </div>
        </div>

        {/* Login Form */}
        {authMode === 'login' && (
          <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Email
              </label>
              <input
                type="email"
                className={`w-full rounded-lg ${inputBgClass} border border-gold/30 focus:border-gold p-3`}
                placeholder="your@email.com"
                {...loginForm.register('email')}
              />
              {loginForm.formState.errors.email && (
                <p className="mt-1 text-sm text-red-500">{loginForm.formState.errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Password
              </label>
              <input
                type="password"
                className={`w-full rounded-lg ${inputBgClass} border border-gold/30 focus:border-gold p-3`}
                placeholder="••••••••"
                {...loginForm.register('password')}
              />
              {loginForm.formState.errors.password && (
                <p className="mt-1 text-sm text-red-500">{loginForm.formState.errors.password.message}</p>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gold/30 text-gold focus:ring-gold"
                />
                <label htmlFor="remember-me" className={`ml-2 block text-sm ${textClass}`}>
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <a href="#" className="text-gold hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
            
            <motion.button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-dark bg-gold hover:bg-goldLight transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign in
            </motion.button>
          </form>
        )}
        
        {/* Register Form - Step 1 */}
        {authMode === 'register' && step === 1 && (
          <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-6">
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Full Name
              </label>
              <input
                type="text"
                className={`w-full rounded-lg ${inputBgClass} border border-gold/30 focus:border-gold p-3`}
                placeholder="John Doe"
                {...registerForm.register('fullName')}
              />
              {registerForm.formState.errors.fullName && (
                <p className="mt-1 text-sm text-red-500">{registerForm.formState.errors.fullName.message}</p>
              )}
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Email
              </label>
              <input
                type="email"
                className={`w-full rounded-lg ${inputBgClass} border border-gold/30 focus:border-gold p-3`}
                placeholder="your@email.com"
                {...registerForm.register('email')}
              />
              {registerForm.formState.errors.email && (
                <p className="mt-1 text-sm text-red-500">{registerForm.formState.errors.email.message}</p>
              )}
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Password
              </label>
              <input
                type="password"
                className={`w-full rounded-lg ${inputBgClass} border border-gold/30 focus:border-gold p-3`}
                placeholder="••••••••"
                {...registerForm.register('password')}
              />
              {registerForm.formState.errors.password && (
                <p className="mt-1 text-sm text-red-500">{registerForm.formState.errors.password.message}</p>
              )}
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Confirm Password
              </label>
              <input
                type="password"
                className={`w-full rounded-lg ${inputBgClass} border border-gold/30 focus:border-gold p-3`}
                placeholder="••••••••"
                {...registerForm.register('confirmPassword')}
              />
              {registerForm.formState.errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500">{registerForm.formState.errors.confirmPassword.message}</p>
              )}
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Account Type
              </label>
              <div className="mt-2 grid grid-cols-3 gap-3">
                <label className="flex p-3 rounded-lg border border-gold/30 cursor-pointer hover:border-gold">
                  <input
                    type="radio"
                    className="sr-only"
                    value="individual"
                    {...registerForm.register('accountType')}
                  />
                  <span className={`flex flex-col items-center ${registerForm.watch('accountType') === 'individual' ? 'text-gold' : textClass}`}>
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-xs">Individual</span>
                  </span>
                </label>
                
                <label className="flex p-3 rounded-lg border border-gold/30 cursor-pointer hover:border-gold">
                  <input
                    type="radio"
                    className="sr-only"
                    value="speaker"
                    {...registerForm.register('accountType')}
                  />
                  <span className={`flex flex-col items-center ${registerForm.watch('accountType') === 'speaker' ? 'text-gold' : textClass}`}>
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                    <span className="text-xs">Speaker</span>
                  </span>
                </label>
                
                <label className="flex p-3 rounded-lg border border-gold/30 cursor-pointer hover:border-gold">
                  <input
                    type="radio"
                    className="sr-only"
                    value="corporate"
                    {...registerForm.register('accountType')}
                  />
                  <span className={`flex flex-col items-center ${registerForm.watch('accountType') === 'corporate' ? 'text-gold' : textClass}`}>
                    <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-xs">Corporate</span>
                  </span>
                </label>
              </div>
              {registerForm.formState.errors.accountType && (
                <p className="mt-1 text-sm text-red-500">{registerForm.formState.errors.accountType.message}</p>
              )}
            </div>
            
            <div className="flex items-center">
              <input
                id="agree-terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gold/30 text-gold focus:ring-gold"
                {...registerForm.register('agreeTerms')}
              />
              <label htmlFor="agree-terms" className={`ml-2 block text-sm ${textClass}`}>
                I agree to the <a href="#" className="text-gold hover:underline">Terms and Conditions</a>
              </label>
            </div>
            {registerForm.formState.errors.agreeTerms && (
              <p className="text-sm text-red-500">{registerForm.formState.errors.agreeTerms.message}</p>
            )}
            
            <motion.button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-dark bg-gold hover:bg-goldLight transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue
            </motion.button>
          </form>
        )}
        
        {/* Speaker Form - Step 2 */}
        {authMode === 'register' && step === 2 && accountType === 'speaker' && (
          <form onSubmit={speakerForm.handleSubmit(onSpeakerSubmit)} className="space-y-6">
            <h3 className="text-xl font-medium text-gold mb-4">Speaker Information</h3>
            
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Area of Expertise
              </label>
              <input
                type="text"
                className={`w-full rounded-lg ${inputBgClass} border border-gold/30 focus:border-gold p-3`}
                placeholder="Motivational, Technical, Educational, etc."
                {...speakerForm.register('specialization')}
              />
              {speakerForm.formState.errors.specialization && (
                <p className="mt-1 text-sm text-red-500">{speakerForm.formState.errors.specialization.message}</p>
              )}
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Years of Experience
              </label>
              <select
                className={`w-full rounded-lg ${inputBgClass} border border-gold/30 focus:border-gold p-3`}
                {...speakerForm.register('experience')}
              >
                <option value="">Select experience</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
              {speakerForm.formState.errors.experience && (
                <p className="mt-1 text-sm text-red-500">{speakerForm.formState.errors.experience.message}</p>
              )}
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Portfolio URL (optional)
              </label>
              <input
                type="text"
                className={`w-full rounded-lg ${inputBgClass} border border-gold/30 focus:border-gold p-3`}
                placeholder="https://your-portfolio.com"
                {...speakerForm.register('portfolio')}
              />
            </div>
            
            <div className="flex space-x-4">
              <motion.button
                type="button"
                className="flex-1 py-3 px-4 border border-gold rounded-full shadow-sm text-sm font-medium text-gold hover:bg-gold/10 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep(1)}
              >
                Back
              </motion.button>
              
              <motion.button
                type="submit"
                className="flex-1 py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-dark bg-gold hover:bg-goldLight transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Complete Registration
              </motion.button>
            </div>
          </form>
        )}
        
        {/* Corporate Form - Step 2 */}
        {authMode === 'register' && step === 2 && accountType === 'corporate' && (
          <form onSubmit={corporateForm.handleSubmit(onCorporateSubmit)} className="space-y-6">
            <h3 className="text-xl font-medium text-gold mb-4">Company Information</h3>
            
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Company Name
              </label>
              <input
                type="text"
                className={`w-full rounded-lg ${inputBgClass} border border-gold/30 focus:border-gold p-3`}
                placeholder="Your Company Name"
                {...corporateForm.register('companyName')}
              />
              {corporateForm.formState.errors.companyName && (
                <p className="mt-1 text-sm text-red-500">{corporateForm.formState.errors.companyName.message}</p>
              )}
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Your Position
              </label>
              <input
                type="text"
                className={`w-full rounded-lg ${inputBgClass} border border-gold/30 focus:border-gold p-3`}
                placeholder="CEO, Manager, HR, etc."
                {...corporateForm.register('position')}
              />
              {corporateForm.formState.errors.position && (
                <p className="mt-1 text-sm text-red-500">{corporateForm.formState.errors.position.message}</p>
              )}
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Company Size
              </label>
              <select
                className={`w-full rounded-lg ${inputBgClass} border border-gold/30 focus:border-gold p-3`}
                {...corporateForm.register('companySize')}
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501+">500+ employees</option>
              </select>
              {corporateForm.formState.errors.companySize && (
                <p className="mt-1 text-sm text-red-500">{corporateForm.formState.errors.companySize.message}</p>
              )}
            </div>
            
            <div>
              <label className={`block text-sm font-medium ${textClass} mb-1`}>
                Industry
              </label>
              <input
                type="text"
                className={`w-full rounded-lg ${inputBgClass} border border-gold/30 focus:border-gold p-3`}
                placeholder="Technology, Education, Finance, etc."
                {...corporateForm.register('industry')}
              />
              {corporateForm.formState.errors.industry && (
                <p className="mt-1 text-sm text-red-500">{corporateForm.formState.errors.industry.message}</p>
              )}
            </div>
            
            <div className="flex space-x-4">
              <motion.button
                type="button"
                className="flex-1 py-3 px-4 border border-gold rounded-full shadow-sm text-sm font-medium text-gold hover:bg-gold/10 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setStep(1)}
              >
                Back
              </motion.button>
              
              <motion.button
                type="submit"
                className="flex-1 py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-dark bg-gold hover:bg-goldLight transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Complete Registration
              </motion.button>
            </div>
          </form>
        )}

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className={`text-sm ${textClass}`}>
            {authMode === 'login' ? "Don't have an account yet?" : "Already have an account?"}{' '}
            <button
              className="text-gold hover:underline font-medium"
              onClick={() => {
                setAuthMode(authMode === 'login' ? 'register' : 'login');
                setStep(1);
              }}
            >
              {authMode === 'login' ? 'Create an account' : 'Sign in'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;