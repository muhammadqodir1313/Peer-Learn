import React from 'react';
import { Users, Clock, Star, ArrowRight } from 'lucide-react';

export default function StudyGroups() {
  const groups = [
    {
      name: 'Oliy Matematika Guruhi',
      subject: 'Matematika',
      members: 45,
      rating: 4.9,
      nextSession: '2 soat',
      description: 'Integrallar va differensiallarni chuqur o\'rganamiz',
      avatar: 'from-blue-400 to-indigo-600',
      isOnline: true
    },
    {
      name: 'Fizika Qonunlari',
      subject: 'Fizika',
      members: 32,
      rating: 4.8,
      nextSession: '1 kun',
      description: 'Mexanika va termodinamika masalalarini yechamiz',
      avatar: 'from-purple-400 to-pink-600',
      isOnline: false
    },
    {
      name: 'Dasturlash Boshlang\'ichlar',
      subject: 'IT',
      members: 67,
      rating: 4.7,
      nextSession: '5 soat',
      description: 'Python tilini o\'rganish va loyihalar yaratish',
      avatar: 'from-green-400 to-emerald-600',
      isOnline: true
    },
    {
      name: 'Ingliz Tili Klubi',
      subject: 'Til',
      members: 28,
      rating: 4.9,
      nextSession: '3 soat',
      description: 'Speaking va listening ko\'nikmalarini oshirish',
      avatar: 'from-orange-400 to-red-600',
      isOnline: true
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Faol o'quv guruhlari
          </h2>
          <p className="text-xl text-slate-600">
            Bir xil maqsadga ega talabalar bilan birga o'rganing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${group.avatar} rounded-xl flex items-center justify-center relative`}>
                    <Users className="w-6 h-6 text-white" />
                    {group.isOnline && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {group.name}
                    </h3>
                    <p className="text-sm text-slate-600">{group.subject}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium text-slate-700">{group.rating}</span>
                </div>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">{group.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-slate-500">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{group.members} a'zo</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Keyingi: {group.nextSession}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200 flex items-center justify-center group">
                Guruhga qo'shilish
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold border border-slate-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200">
            Barcha guruhlarni ko'rish
          </button>
        </div>
      </div>
    </section>
  );
}