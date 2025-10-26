"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageCircle, Search, Plus, ThumbsUp, Eye } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const forumPosts = [
  {
    id: 1,
    title: "Kvadrat tenglamalarni yechishda qiyinchilik",
    content:
      "Kvadrat tenglamalarni yechishda diskriminant formulasini qo'llashda xatolik qilyapman. Kimdir yordam bera oladimi?",
    author: "Aziza Karimova",
    avatar: "/placeholder.svg?height=40&width=40",
    subject: "Matematika",
    replies: 5,
    likes: 12,
    views: 89,
    createdAt: "2 soat oldin",
    isAnswered: false,
  },
  {
    id: 2,
    title: "Ingliz tilida essay yozish qoidalari",
    content: "IELTS imtihoniga tayyorlanayapman. Essay yozishning asosiy qoidalarini bilmoqchiman.",
    author: "Bobur Aliyev",
    avatar: "/placeholder.svg?height=40&width=40",
    subject: "Ingliz tili",
    replies: 8,
    likes: 15,
    views: 124,
    createdAt: "4 soat oldin",
    isAnswered: true,
  },
  {
    id: 3,
    title: "Fizikada harakat tenglamalari",
    content: "To'g'ri chiziqli tekis tezlanuvchan harakat tenglamalarini qanday qo'llash kerak?",
    author: "Malika Tosheva",
    avatar: "/placeholder.svg?height=40&width=40",
    subject: "Fizika",
    replies: 3,
    likes: 8,
    views: 67,
    createdAt: "1 kun oldin",
    isAnswered: false,
  },
  {
    id: 4,
    title: "Kimyoda valentlik tushunchasi",
    content: "Elementlarning valentligini qanday aniqlash mumkin? Jadval yodlash kerakmi?",
    author: "Sardor Rahimov",
    avatar: "/placeholder.svg?height=40&width=40",
    subject: "Kimya",
    replies: 6,
    likes: 10,
    views: 95,
    createdAt: "2 kun oldin",
    isAnswered: true,
  },
]

export default function ForumPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [showAnswered, setShowAnswered] = useState("all")
  const [showQuestionForm, setShowQuestionForm] = useState(false)
  const [newQuestion, setNewQuestion] = useState<{ title: string; content: string; subject: string }>({ title: "", content: "", subject: "" })

  const filteredPosts = forumPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSubject = selectedSubject === "all" || post.subject === selectedSubject
    const matchesAnswered =
      showAnswered === "all" ||
      (showAnswered === "answered" && post.isAnswered) ||
      (showAnswered === "unanswered" && !post.isAnswered)
    return matchesSearch && matchesSubject && matchesAnswered
  })

  const handleQuestionSubmit = () => {
    if (newQuestion.title && newQuestion.content && newQuestion.subject) {
      const question = {
        id: Date.now(),
        title: newQuestion.title,
        content: newQuestion.content,
        author: "Muhammadqodir Abdullajanov",
        avatar: "/placeholder.svg?height=40&width=40",
        subject: newQuestion.subject,
        replies: 0,
        likes: 0,
        views: 0,
        createdAt: "Hozir",
        isAnswered: false,
      }
      // Add to posts list
      setShowQuestionForm(false)
      setNewQuestion({ title: "", content: "", subject: "" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Savol-javob forumi</h1>
            <p className="text-gray-600">Savollar bering va bir-biringizga yordam bering</p>
          </div>
          <Button onClick={() => setShowQuestionForm(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Savol berish
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Savollarni qidiring..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={selectedSubject === "all" ? "default" : "outline"}
              onClick={() => setSelectedSubject("all")}
              size="sm"
            >
              Barchasi
            </Button>
            <Button
              variant={selectedSubject === "Matematika" ? "default" : "outline"}
              onClick={() => setSelectedSubject("Matematika")}
              size="sm"
            >
              Matematika
            </Button>
            <Button
              variant={selectedSubject === "Fizika" ? "default" : "outline"}
              onClick={() => setSelectedSubject("Fizika")}
              size="sm"
            >
              Fizika
            </Button>
            <Button
              variant={selectedSubject === "Ingliz tili" ? "default" : "outline"}
              onClick={() => setSelectedSubject("Ingliz tili")}
              size="sm"
            >
              Ingliz tili
            </Button>
            <Button
              variant={selectedSubject === "Kimya" ? "default" : "outline"}
              onClick={() => setSelectedSubject("Kimya")}
              size="sm"
            >
              Kimya
            </Button>
            <Select value={showAnswered} onValueChange={setShowAnswered}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Holati" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barchasi</SelectItem>
                <SelectItem value="answered">Javob berilgan</SelectItem>
                <SelectItem value="unanswered">Javobsiz</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Forum Posts */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar>
                      <AvatarImage src={post.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{post.subject}</Badge>
                        {post.isAnswered && <Badge className="bg-green-100 text-green-800">Javob berilgan</Badge>}
                      </div>
                      <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                      <CardDescription className="text-sm">{post.content}</CardDescription>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.createdAt}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{post.replies}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Hech qanday savol topilmadi</h3>
            <p className="text-gray-500 mb-4">Qidiruv so'zingizni o'zgartiring yoki birinchi bo'lib savol bering</p>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Birinchi savol berish
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}
