import React from 'react';
import { Zap, Shield, Smartphone, Globe } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Tez va Oson',
      description: 'Savollaringizga darhol javob oling va bilimlaringizni tezkor baham ko\'ring',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Xavfsiz Muhit',
      description: 'Barcha ma\'lumotlaringiz himoyalangan va moderatsiya qilingan',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Mobil Qulay',
      description: 'Har qanday qurilmada bemalol foydalaning - telefon, planshet yoki kompyuter',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: Globe,
      title: 'Global Jamoat',
      description: 'Butun dunyo bo\'ylab o\'quvchilar bilan bog\'laning va tajriba almashing',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Nima uchun PeerLearn?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Zamonaviy ta'limning barcha imkoniyatlari bir joyda
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              
              {/* Hover effect gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}