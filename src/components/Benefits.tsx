import React from 'react';
import { Target, Users, Clock, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Personalized Programs',
    description: 'Custom fitness plans tailored to your specific goals and needs'
  },
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Learn from certified professionals who are passionate about your success'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Work out on your terms with 24/7 facility access'
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Join thousands who have achieved their fitness goals with us'
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose <span className="text-blue-600">FitLife</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <benefit.icon className="h-12 w-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}