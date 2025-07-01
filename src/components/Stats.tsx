import React from 'react';
import { Users, BookOpen, MessageSquare, Award } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, value: '50,000+', label: 'Faol foydalanuvchilar', color: 'text-blue-600' },
    { icon: BookOpen, value: '120+', label: 'O\'quv fanlar', color: 'text-green-600' },
    { icon: MessageSquare, value: '1M+', label: 'Savol-javoblar', color: 'text-purple-600' },
    { icon: Award, value: '25,000+', label: 'Muvaffaqiyatli guruhlar', color: 'text-orange-600' }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`inline-flex p-3 rounded-2xl bg-slate-100 ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}