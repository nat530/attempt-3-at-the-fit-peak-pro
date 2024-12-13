import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="pt-16">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 mix-blend-multiply" />
        <div
          className="relative min-h-[600px] flex items-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transform Your Body,<br />
              Transform Your Life
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Join our community of fitness enthusiasts and achieve your goals with expert guidance and support.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors">
              Start Your Journey
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}