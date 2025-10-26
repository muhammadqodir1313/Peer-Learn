"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Video, FileText, Search, Eye, ThumbsUp, Clock } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const knowledgeItems = [
  {
    id: 1,
    title: "Algebra asoslari",
    description: "Algebraning asosiy tushunchalari va formulalari",
    type: "video",
    subject: "Matematika",
    author: "Aziz Karimov",
    views: 1234,
    likes: 89,
    duration: "15 min",
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    title: "Geometriya testlari",
    description: "Geometriya bo'yicha amaliy testlar to'plami",
    type: "test",
    subject: "Matematika",
    author: "Malika Tosheva",
    views: 856,
    likes: 67,
    duration: "30 min",
    createdAt: "2024-01-05",
  },
  {
    id: 3,
    title: "Fizika formulalari",
    description: "Maktab fizikasi bo'yicha barcha formulalar",
    type: "text",
    subject: "Fizika",
    author: "Bobur Aliyev",
    views: 642,
    likes: 45,
    duration: "10 min",
    createdAt: "2024-01-10",
  },
  {
    id: 4,
    title: "Ingliz tili grammatikasi",
    description: "Ingliz tili grammatikasining asosiy qoidalari",
    type: "video",
    subject: "Ingliz tili",
    author: "Nilufar Rahimova",
    views: 923,
    likes: 78,
    duration: "25 min",
    createdAt: "2024-01-15",
  },
]

export default function KnowledgePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [sortBy, setSortBy] = useState("newest")
  const [viewMode, setViewMode] = useState("grid")

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-4 w-4" />
      case "text":
        return <FileText className="h-4 w-4" />
      case "test":
        return <BookOpen className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-red-100 text-red-800"
      case "text":
        return "bg-blue-100 text-blue-800"
      case "test":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredItems = knowledgeItems
    .filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.author.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesSubject = selectedSubject === "all" || item.subject === selectedSubject
      return matchesSearch && matchesSubject
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case "popular":
          return b.views - a.views
        case "liked":
          return b.likes - a.likes
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bilimlar bazasi</h1>
          <p className="text-gray-600">O'quvchilar tomonidan yaratilgan barcha materiallar</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Bilimlarni qidiring..."
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
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Saralash" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Yangi</SelectItem>
              <SelectItem value="popular">Mashhur</SelectItem>
              <SelectItem value="liked">Yoqtirilgan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getTypeColor(item.type)}>
                        <div className="flex items-center gap-1">
                          {getTypeIcon(item.type)}
                          <span className="capitalize">{item.type}</span>
                        </div>
                      </Badge>
                      <Badge variant="outline">{item.subject}</Badge>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="mt-1">{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>Muallif: {item.author}</span>
                  <span>{item.createdAt}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{item.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  asChild
                >
                  <Link href={`/knowledge/${item.id}`}>Ko'rish</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Hech narsa topilmadi</h3>
            <p className="text-gray-500">Qidiruv so'zingizni o'zgartiring yoki boshqa kategoriyani tanlang</p>
          </div>
        )}
      </main>
    </div>
  )
}
