import React from 'react';
import { MessageCircle, ThumbsUp, Clock, User, Tag } from 'lucide-react';

export default function RecentQuestions() {
  const questions = [
    {
      title: 'Integrallarni hisoblashda qanday usullardan foydalanish kerak?',
      author: 'Aziza Karimova',
      subject: 'Matematika',
      timeAgo: '2 soat oldin',
      answers: 12,
      likes: 24,
      tags: ['integral', 'hisoblash', 'calculus'],
      answered: true
    },
    {
      title: 'Python dasturlash tilida list va tuple orasidagi farq nima?',
      author: 'Bobur Alimov',
      subject: 'Dasturlash',
      timeAgo: '4 soat oldin',
      answers: 8,
      likes: 15,
      tags: ['python', 'data-types', 'list'],
      answered: false
    },
    {
      title: 'Newtonning harakat qonunlarini oddiy misollar bilan tushuntira olasizmi?',
      author: 'Malika Tosheva',
      subject: 'Fizika',
      timeAgo: '6 soat oldin',
      answers: 15,
      likes: 32,
      tags: ['newton', 'harakat', 'qonunlar'],
      answered: true
    },
    {
      title: 'Ingliz tilida Present Perfect ni qachon ishlatish kerak?',
      author: 'Javohir Rahmonov',
      subject: 'Ingliz tili',
      timeAgo: '8 soat oldin',
      answers: 6,
      likes: 18,
      tags: ['grammar', 'present-perfect', 'tenses'],
      answered: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            So'nggi savollar
          </h2>
          <p className="text-xl text-slate-600">
            Boshqa talabalar nimani so'rayapti va kimlar javob bermoqda
          </p>
        </div>

        <div className="space-y-6">
          {questions.map((question, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      question.answered 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {question.answered ? 'Javoblangan' : 'Javob kutilmoqda'}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {question.subject}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-relaxed">
                    {question.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{question.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{question.timeAgo}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {question.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="flex items-center space-x-1 px-2 py-1 bg-slate-100 text-slate-600 rounded-md text-xs"
                      >
                        <Tag className="w-3 h-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6 text-sm text-slate-500">
                  <div className="flex items-center space-x-1 hover:text-blue-600 transition-colors cursor-pointer">
                    <MessageCircle className="w-4 h-4" />
                    <span>{question.answers} javob</span>
                  </div>
                  <div className="flex items-center space-x-1 hover:text-red-600 transition-colors cursor-pointer">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{question.likes}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Javob berish
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
            Barcha savollarni ko'rish
          </button>
        </div>
      </div>
    </section>
  );
}