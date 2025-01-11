import React, { useState } from 'react';
import { Plane, ArrowRight, CheckCircle, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';
import cockpitImage from '../A320 cockpit.jpg';

export const ComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDuplicateEmail, setIsDuplicateEmail] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsDuplicateEmail(false);
    
    try {
      const { error: supabaseError } = await supabase
        .from('waitlist')
        .insert([
          { email, source: 'coming_soon_page' }
        ]);

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError("Don't worry, we already have your email. We'll let you know when we go live!");
          setIsDuplicateEmail(true);
        } else {
          setError('Something went wrong. Please try again.');
        }
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cockpitImage})` }}
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* Main Content */}
      <div className="relative z-10 flex-grow flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center mb-16">
            <Plane className="h-12 w-12 text-primary-400" strokeWidth={1.5} />
            <span className="ml-3 text-3xl font-display font-bold text-white tracking-tight">
              A320 Hub
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-white font-display leading-tight mb-2">
            Want to Pass Your
            <span className="text-primary-400 block mt-3">A320 Training?</span>
          </h1>
          
          <div className="relative mb-8">
            <div className="absolute left-1/2 -translate-x-1/2 -rotate-6 bg-accent-400 text-black px-6 py-1 rounded-sm shadow-lg transform hover:rotate-0 transition-transform duration-300">
              <span className="text-2xl font-bold tracking-wider">COMING SOON</span>
            </div>
            {/* Spacer div to maintain layout flow */}
            <div className="h-8"></div>
          </div>

          <p className="text-xl text-gray-300 mb-16 max-w-xl mx-auto leading-relaxed">
            An all-new platform designed to simplify your A320 training. Enter your email, and we'll notify you when we're clear for take-off.
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              {error && isDuplicateEmail && (
                <div className="mb-6 text-accent-400 text-lg font-medium bg-accent-400/10 py-4 px-6 rounded-lg">
                  {error}
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 border-2 border-white/20 
                             text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                             focus:ring-primary-500 focus:border-transparent transition-all text-lg"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="py-4 px-8 rounded-lg bg-primary-500 text-white font-medium text-lg
                           hover:bg-primary-600 focus:outline-none focus:ring-2 
                           focus:ring-offset-2 focus:ring-primary-500 transition-all
                           disabled:opacity-50 disabled:cursor-not-allowed
                           inline-flex items-center justify-center whitespace-nowrap
                           sm:w-auto w-full"
                >
                  {isLoading ? (
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
              </div>
              {error && !isDuplicateEmail && (
                <p className="mt-4 text-red-400 text-sm">{error}</p>
              )}
              <p className="mt-4 text-sm text-gray-400">
                By entering your email you agree to our{' '}
                <a href="/terms" className="text-primary-400 hover:text-primary-300 underline">
                  Platform Terms
                </a>
                {' '}&{' '}
                <a href="/privacy" className="text-primary-400 hover:text-primary-300 underline">
                  Privacy Notice
                </a>
              </p>
            </form>
          ) : (
            <div className="flex items-center justify-center text-green-400 text-lg font-medium bg-green-400/10 py-6 px-8 rounded-lg">
              <CheckCircle className="h-6 w-6 mr-2" />
              <span>Thank you for joining our waitlist!</span>
            </div>
          )}
        </div>
      </div>

      {/* Copyright Footer */}
      <footer className="relative z-10 py-6 text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} A320 Hub. All rights reserved. Part of Leonix Innovations Ltd.
            {' • '}
            <a 
              href="mailto:hello@a320prep.com"
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              Contact Us
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};