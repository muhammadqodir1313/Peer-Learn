import React from 'react';
import { Calculator, Atom, Globe, Palette, Music, Code, Heart, Book } from 'lucide-react';

export default function SubjectCategories() {
  const subjects = [
    { icon: Calculator, name: 'Matematika', students: 12500, color: 'from-blue-500 to-cyan-500' },
    { icon: Atom, name: 'Fizika', students: 8300, color: 'from-purple-500 to-pink-500' },
    { icon: Globe, name: 'Geografiya', students: 6200, color: 'from-green-500 to-emerald-500' },
    { icon: Palette, name: 'San\'at', students: 4800, color: 'from-orange-500 to-red-500' },
    { icon: Music, name: 'Musiqa', students: 3900, color: 'from-indigo-500 to-purple-500' },
    { icon: Code, name: 'Dasturlash', students: 9100, color: 'from-gray-700 to-gray-900' },
    { icon: Heart, name: 'Biologiya', students: 7200, color: 'from-pink-500 to-rose-500' },
    { icon: Book, name: 'Adabiyot', students: 5600, color: 'from-amber-500 to-yellow-500' }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Fanlar bo'yicha o'rganing
          </h2>
          <p className="text-xl text-slate-600">
            Sizni qiziqtirgan fanni tanlang va o'rganishni boshlang
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${subject.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <subject.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{subject.name}</h3>
              <p className="text-slate-600 text-sm mb-4">{subject.students.toLocaleString()} talaba</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">Faol guruhlar</span>
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 bg-gradient-to-br ${subject.color} rounded-full border-2 border-white`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}