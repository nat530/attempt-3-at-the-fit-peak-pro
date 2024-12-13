import React from 'react';
import { Dumbbell, Running, Users, Heart } from 'lucide-react';

const programs = [
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Build muscle and increase strength with our comprehensive weight training programs',
    price: '$49/month'
  },
  {
    icon: Running,
    title: 'Cardio Classes',
    description: 'Improve endurance and burn calories with high-energy cardio sessions',
    price: '$39/month'
  },
  {
    icon: Users,
    title: 'Group Fitness',
    description: 'Join motivating group classes led by experienced instructors',
    price: '$59/month'
  },
  {
    icon: Heart,
    title: 'Personal Training',
    description: 'Get personalized attention and faster results with 1-on-1 training',
    price: '$99/month'
  }
];

export default function Programs() {
  return (
    <section className="py-20" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Programs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <program.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <p className="text-2xl font-bold text-orange-500">{program.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}