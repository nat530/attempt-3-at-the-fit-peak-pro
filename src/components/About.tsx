import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-blue-600" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About FitLife
            </h2>
            <p className="text-blue-100 text-lg mb-6">
              Since 2010, FitLife has been helping people transform their lives through fitness. Our state-of-the-art facilities, expert trainers, and supportive community create the perfect environment for achieving your fitness goals.
            </p>
            <p className="text-blue-100 text-lg">
              Whether you're just starting your fitness journey or looking to take your training to the next level, we're here to support you every step of the way.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Gym interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}