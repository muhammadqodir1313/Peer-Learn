import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, MessageCircle, Users, Plus, TrendingUp, Award } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Xush kelibsiz, Muhammadqodir!
          </h1>
          <p className="text-xl text-gray-600">Bugun nimani o'rganmoqchisiz yoki qanday bilim bo'lishmoqchisiz?</p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Link href="/create">
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader className="pb-3 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Plus className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-sm">Kontent yaratish</CardTitle>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/forum">
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md hover:-translate-y-1 bg-gradient-to-br from-green-50 to-green-100">
              <CardHeader className="pb-3 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-sm">Savol berish</CardTitle>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/knowledge">
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md hover:-translate-y-1 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardHeader className="pb-3 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-sm">Bilimlar</CardTitle>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/chat">
            <Card className="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md hover:-translate-y-1 bg-gradient-to-br from-orange-50 to-orange-100">
              <CardHeader className="pb-3 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-sm">Chat</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Jami kontentlar</CardTitle>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                12
              </div>
              <p className="text-xs text-green-600 font-medium">+2 o'tgan haftadan</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Javob bergan savollar</CardTitle>
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                28
              </div>
              <p className="text-xs text-green-600 font-medium">+5 o'tgan haftadan</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Reytinglar</CardTitle>
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                <Award className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                156
              </div>
              <p className="text-xs text-green-600 font-medium">+12 o'tgan haftadan</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>So'nggi faoliyat</CardTitle>
              <CardDescription>Sizning oxirgi harakatlaringiz</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Matematika bo'yicha yangi video yuklandi</p>
                  <p className="text-xs text-gray-500">2 soat oldin</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Fizika savoliga javob berildi</p>
                  <p className="text-xs text-gray-500">4 soat oldin</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Yangi test yaratildi</p>
                  <p className="text-xs text-gray-500">1 kun oldin</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mashhur kontentlar</CardTitle>
              <CardDescription>Eng ko'p ko'rilgan materiallar</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Algebra asoslari</p>
                  <p className="text-xs text-gray-500">Video • 1,234 ko'rishlar</p>
                </div>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Geometriya testlari</p>
                  <p className="text-xs text-gray-500">Test • 856 ishtirok</p>
                </div>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Fizika formulalari</p>
                  <p className="text-xs text-gray-500">Matn • 642 o'qish</p>
                </div>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
