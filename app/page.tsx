import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, MessageCircle, Users, Video, FileText, HelpCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">PeerLearn</span>
            </div>
            <div className="flex space-x-4">
              <Link href="/login">
                <Button variant="ghost">Kirish</Button>
              </Link>
              <Link href="/signup">
                <Button>Ro'yxatdan o'tish</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Bilimni bo'lishing, <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              birga o'rganing
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            PeerLearn - o'quvchilar uchun bilim almashinuvi platformasi. O'z bilimlaringizni bo'lishing, savollar bering
            va bir-biringizga yordam bering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Bepul boshlash
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 hover:bg-gray-50 transition-all duration-300 bg-transparent"
              >
                Platformani ko'rish
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platformaning imkoniyatlari</h2>
            <p className="text-lg text-gray-600">O'qish va o'rgatish uchun barcha kerakli vositalar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Matn materiallar</CardTitle>
                <CardDescription>O'z bilimlaringizni matn ko'rinishida bo'lishing</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Video darslar</CardTitle>
                <CardDescription>Video orqali chuqur tushuntirishlar bering</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Testlar</CardTitle>
                <CardDescription>Bilimni tekshirish uchun testlar yarating</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Savol-javob</CardTitle>
                <CardDescription>Savollar bering va javoblar oling</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Forum</CardTitle>
                <CardDescription>Jamoa bilan muhokama qiling</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Chat</CardTitle>
                <CardDescription>Real vaqtda suhbatlashing</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-4">Bugun boshlang!</h2>
          <p className="text-xl text-blue-100 mb-8">Minglab o'quvchilar bilan birga o'rganing va o'rgating</p>
          <Link href="/signup">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ro'yxatdan o'tish
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-2xl font-bold">PeerLearn</span>
          </div>
          <p className="text-center text-gray-400 mt-4">© 2024 PeerLearn. Barcha huquqlar himoyalangan.</p>
        </div>
      </footer>
    </div>
  )
}
