"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import {
  BookOpen,
  Video,
  FileText,
  Eye,
  ThumbsUp,
  Clock,
  Share2,
  Download,
  MessageCircle,
  Star,
  ArrowLeft,
  Play,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

// Mock data - real loyihada bu API dan keladi
const knowledgeItem = {
  id: 1,
  title: "Algebra asoslari",
  description:
    "Algebraning asosiy tushunchalari va formulalari. Bu darsda siz algebraning eng muhim qoidalarini o'rganasiz.",
  type: "video",
  subject: "Matematika",
  author: {
    name: "Aziz Karimov",
    avatar: "/placeholder.svg?height=40&width=40",
    reputation: 450,
    totalContent: 12,
  },
  content: `
# Algebra asoslari

Algebra matematikaning eng muhim bo'limlaridan biri hisoblanadi. Bu darsda biz algebraning asosiy tushunchalarini o'rganamiz.

## Asosiy tushunchalar

### 1. O'zgaruvchilar
O'zgaruvchilar odatda harflar bilan belgilanadi: x, y, z, a, b, c

### 2. Algebraik ifodalar
Algebraik ifoda - bu sonlar va o'zgaruvchilardan tuzilgan matematik ifoda.

Masalan:
- 2x + 3
- x² - 5x + 6
- (a + b)²

### 3. Tenglamalar
Tenglama - bu ikki algebraik ifodaning tengligini ifodalovchi matematik gap.

Masalan:
- 2x + 3 = 7
- x² - 5x + 6 = 0

## Amaliy misollar

1. **Oddiy tenglama yechish:**
   2x + 3 = 7
   2x = 7 - 3
   2x = 4
   x = 2

2. **Kvadrat tenglama:**
   x² - 5x + 6 = 0
   (x - 2)(x - 3) = 0
   x = 2 yoki x = 3

Bu asosiy tushunchalarni yaxshi o'zlashtirish keyingi mavzularni tushunish uchun juda muhim.
  `,
  videoUrl: "https://example.com/video.mp4",
  views: 1234,
  likes: 89,
  rating: 4.8,
  duration: "15 min",
  createdAt: "2 kun oldin",
  updatedAt: "1 kun oldin",
  tags: ["algebra", "matematika", "asoslar", "tenglamalar"],
  difficulty: "Boshlang'ich",
  language: "O'zbek",
}

const initialComments = [
  {
    id: 1,
    author: "Malika Tosheva",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Juda yaxshi tushuntirilgan! Algebra asoslarini tushunishda yordam berdi.",
    likes: 5,
    createdAt: "1 kun oldin",
    rating: 5,
  },
  {
    id: 2,
    author: "Bobur Aliyev",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Video sifati yaxshi, lekin ba'zi joylarni tezroq tushuntirish mumkin edi.",
    likes: 3,
    createdAt: "2 kun oldin",
    rating: 4,
  },
]

export default function KnowledgeDetailPage({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(knowledgeItem.likes)
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState("")
  const [userRating, setUserRating] = useState(0)
  const [averageRating, setAverageRating] = useState(knowledgeItem.rating)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return <Video className="h-5 w-5" />
      case "text":
        return <FileText className="h-5 w-5" />
      case "test":
        return <BookOpen className="h-5 w-5" />
      default:
        return <FileText className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "video":
        return "bg-gradient-to-r from-red-500 to-red-600 text-white"
      case "text":
        return "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
      case "test":
        return "bg-gradient-to-r from-green-500 to-green-600 text-white"
      default:
        return "bg-gradient-to-r from-gray-500 to-gray-600 text-white"
    }
  }

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1))
    // Here you would also send to API
  }

  const handleRating = (rating: number) => {
    setUserRating(rating)
    // Calculate new average (simplified)
    setAverageRating((prev) => (prev + rating) / 2)
  }

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        author: "Muhammadqodir Abdullajanov",
        avatar: "/placeholder.svg?height=32&width=32",
        content: newComment,
        likes: 0,
        createdAt: "Hozir",
        rating: userRating || 5,
      }
      setComments([comment, ...comments])
      setNewComment("")
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: knowledgeItem.title,
          text: knowledgeItem.description,
          url: window.location.href,
        })
      } catch (err) {
        console.log("Error sharing:", err)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link nusxalandi!")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/knowledge">
            <Button variant="ghost" className="hover:bg-white/50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Bilimlar bazasiga qaytish
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className={getTypeColor(knowledgeItem.type)}>
                        <div className="flex items-center gap-2">
                          {getTypeIcon(knowledgeItem.type)}
                          <span className="capitalize font-medium">
                            {knowledgeItem.type === "video" ? "Video" : knowledgeItem.type === "text" ? "Matn" : "Test"}
                          </span>
                        </div>
                      </Badge>
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        {knowledgeItem.subject}
                      </Badge>
                      <Badge variant="outline" className="border-green-200 text-green-700">
                        {knowledgeItem.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-3xl font-bold text-gray-900 mb-3">{knowledgeItem.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-600 leading-relaxed">
                      {knowledgeItem.description}
                    </CardDescription>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    <span className="font-medium">{knowledgeItem.views} ko'rishlar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="font-medium">{likeCount} yoqtirishlar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">{knowledgeItem.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium">{averageRating.toFixed(1)}/5</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-6">
                  <Button
                    onClick={handleLike}
                    variant={isLiked ? "default" : "outline"}
                    className={isLiked ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
                  >
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    {isLiked ? "Yoqtirildi" : "Yoqtirish"}
                  </Button>
                  <Button variant="outline" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Bo'lishish
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Yuklab olish
                  </Button>
                </div>
              </CardHeader>
            </Card>

            {/* Video Player (if video type) */}
            {knowledgeItem.type === "video" && (
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm">
                        <Play className="h-8 w-8 text-white" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm opacity-80">Video davomiyligi: {knowledgeItem.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Content */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Kontent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{knowledgeItem.content}</div>
                </div>
              </CardContent>
            </Card>

            {/* Rating Section */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Bu kontentni baholang</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRating(star)}
                      className={`p-1 rounded transition-colors ${
                        star <= userRating ? "text-yellow-500" : "text-gray-300 hover:text-yellow-400"
                      }`}
                    >
                      <Star className="h-6 w-6 fill-current" />
                    </button>
                  ))}
                  {userRating > 0 && <span className="ml-2 text-sm text-gray-600">{userRating}/5 yulduz</span>}
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Izohlar ({comments.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Add Comment */}
                <div className="space-y-3">
                  <Textarea
                    placeholder="Izoh qoldiring..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={3}
                  />
                  <Button onClick={handleCommentSubmit} className="bg-gradient-to-r from-blue-600 to-purple-600">
                    Izoh qoldirish
                  </Button>
                </div>

                <Separator />

                {/* Comments List */}
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-4">
                      <Avatar>
                        <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {comment.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{comment.author}</span>
                          <div className="flex items-center">
                            {[...Array(comment.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{comment.createdAt}</span>
                        </div>
                        <p className="text-gray-700 mb-2">{comment.content}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <button className="hover:text-blue-600 transition-colors">
                            <ThumbsUp className="h-3 w-3 mr-1 inline" />
                            {comment.likes}
                          </button>
                          <button className="hover:text-blue-600 transition-colors">Javob berish</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Author Info */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Muallif</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={knowledgeItem.author.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {knowledgeItem.author.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{knowledgeItem.author.name}</h3>
                    <p className="text-sm text-gray-500">{knowledgeItem.author.reputation} reytingi</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <p>{knowledgeItem.author.totalContent} ta kontent yaratgan</p>
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Profilni ko'rish
                </Button>
              </CardContent>
            </Card>

            {/* Content Info */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Kontent haqida</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Yaratilgan:</span>
                  <span className="font-medium">{knowledgeItem.createdAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Yangilangan:</span>
                  <span className="font-medium">{knowledgeItem.updatedAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Til:</span>
                  <span className="font-medium">{knowledgeItem.language}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Daraja:</span>
                  <span className="font-medium">{knowledgeItem.difficulty}</span>
                </div>
              </CardContent>
            </Card>

            {/* Tags */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Teglar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {knowledgeItem.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Related Content */}
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">O'xshash kontentlar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                    <h4 className="font-medium text-sm mb-1">Geometriya asoslari</h4>
                    <p className="text-xs text-gray-600">Video • 856 ko'rishlar</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                    <h4 className="font-medium text-sm mb-1">Kvadrat tenglamalar</h4>
                    <p className="text-xs text-gray-600">Matn • 642 ko'rishlar</p>
                  </div>
                  <div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                    <h4 className="font-medium text-sm mb-1">Matematik testlar</h4>
                    <p className="text-xs text-gray-600">Test • 423 ishtirok</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
