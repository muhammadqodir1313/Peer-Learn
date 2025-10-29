"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, MessageCircle, Award, Edit, Camera, Eye, ThumbsUp } from "lucide-react"
import { Navbar } from "@/components/navbar"

const userStats = {
  totalContent: 12,
  totalAnswers: 28,
  totalLikes: 156,
  totalViews: 2340,
  reputation: 450,
}

const userContent = [
  {
    id: 1,
    title: "Algebra asoslari",
    type: "video",
    subject: "Matematika",
    views: 1234,
    likes: 89,
    createdAt: "2 kun oldin",
  },
  {
    id: 2,
    title: "Geometriya testlari",
    type: "test",
    subject: "Matematika",
    views: 856,
    likes: 67,
    createdAt: "1 hafta oldin",
  },
  {
    id: 3,
    title: "Fizika formulalari",
    type: "text",
    subject: "Fizika",
    views: 642,
    likes: 45,
    createdAt: "3 kun oldin",
  },
]

const userAnswers = [
  {
    id: 1,
    question: "Kvadrat tenglamalarni yechishda qiyinchilik",
    answer: "Diskriminant formulasini to'g'ri qo'llash uchun...",
    likes: 12,
    createdAt: "1 kun oldin",
  },
  {
    id: 2,
    question: "Ingliz tilida essay yozish qoidalari",
    answer: "IELTS essay yozishda asosiy qoidalar...",
    likes: 8,
    createdAt: "3 kun oldin",
  },
]

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [avatarFile, setAvatarFile] = useState<string | null>(null)
  const [contentFilter, setContentFilter] = useState("all")
  const [sortOrder, setSortOrder] = useState("newest")
  const [name, setName] = useState("Abdullajonov Muhammadqodir")
  const [bio, setBio] = useState(
    "Matematika va fizika o'qituvchisi. PeerLearn platformasida bilim bo'lishishni yaxshi ko'raman.",
  )
  const [email, setEmail] = useState("farhodjonovichm1301@gamil.com")
  const [school, setSchool] = useState("66-maktab")

  const handleSave = async () => {
    setIsSaving(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSaving(false)
    setIsEditing(false)
    setSaveSuccess(true)

    setTimeout(() => setSaveSuccess(false), 3000)
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setAvatarFile(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const filteredContent = userContent
    .filter((item) => {
      if (contentFilter === "all") return true
      return item.type === contentFilter
    })
    .sort((a, b) => {
      if (sortOrder === "newest") {
        // Sort by creation order (since createdAt is relative time string)
        return b.id - a.id
      }
      if (sortOrder === "popular") return b.views - a.views
      return b.likes - a.likes
    })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="relative mx-auto w-24 h-24 mb-4">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src={avatarFile || "/placeholder.svg?height=96&width=96"} />
                    <AvatarFallback className="text-2xl">AK</AvatarFallback>
                  </Avatar>
                  <label htmlFor="avatar-upload">
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0 bg-transparent"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </label>
                  <Input
                    type="file"
                    id="avatar-upload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">To'liq ism</Label>
                      <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="school">Maktab</Label>
                      <Input id="school" value={school} onChange={(e) => setSchool(e.target.value)} />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleSave} size="sm" disabled={isSaving}>
                        {isSaving ? "Saqlanmoqda..." : "Saqlash"}
                      </Button>
                      <Button onClick={() => setIsEditing(false)} variant="outline" size="sm" disabled={isSaving}>
                        Bekor qilish
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <CardTitle className="text-xl">{name}</CardTitle>
                    <CardDescription className="mt-2 text-center">{bio}</CardDescription>
                    <div className="mt-4 space-y-2 text-sm text-gray-600">
                      <p>📧 {email}</p>
                      <p>🏫 {school}</p>
                    </div>
                    <Button onClick={() => setIsEditing(true)} variant="outline" size="sm" className="mt-4">
                      <Edit className="h-4 w-4 mr-2" />
                      Tahrirlash
                    </Button>
                  </div>
                )}
              </CardHeader>
            </Card>

            {/* Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Statistika</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-600" />
                    <span className="text-sm">Kontentlar</span>
                  </div>
                  <span className="font-semibold">{userStats.totalContent}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Javoblar</span>
                  </div>
                  <span className="font-semibold">{userStats.totalAnswers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Yoqtirishlar</span>
                  </div>
                  <span className="font-semibold">{userStats.totalLikes}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-orange-600" />
                    <span className="text-sm">Ko'rishlar</span>
                  </div>
                  <span className="font-semibold">{userStats.totalViews}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">Reytingi</span>
                  </div>
                  <span className="font-semibold">{userStats.reputation}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Tabs */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="content" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="content">Mening kontentlarim</TabsTrigger>
                <TabsTrigger value="answers">Mening javoblarim</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="content-filter">Filter:</Label>
                    <select
                      id="content-filter"
                      className="border rounded px-2 py-1"
                      value={contentFilter}
                      onChange={(e) => setContentFilter(e.target.value)}
                    >
                      <option value="all">Hammasi</option>
                      <option value="video">Video</option>
                      <option value="text">Matn</option>
                      <option value="test">Test</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="sort-order">Saralash:</Label>
                    <select
                      id="sort-order"
                      className="border rounded px-2 py-1"
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                    >
                      <option value="newest">Eng yangi</option>
                      <option value="popular">Eng ko'p ko'rilgan</option>
                      <option value="liked">Eng ko'p yoqtirilgan</option>
                    </select>
                  </div>
                </div>
                {filteredContent.map((content) => (
                  <Card key={content.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{content.subject}</Badge>
                            <Badge
                              className={
                                content.type === "video"
                                  ? "bg-red-100 text-red-800"
                                  : content.type === "text"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-green-100 text-green-800"
                              }
                            >
                              {content.type === "video" ? "Video" : content.type === "text" ? "Matn" : "Test"}
                            </Badge>
                          </div>
                          <CardTitle className="text-lg">{content.title}</CardTitle>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              <span>{content.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{content.likes}</span>
                            </div>
                            <span>{content.createdAt}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="answers" className="space-y-4">
                {userAnswers.map((answer) => (
                  <Card key={answer.id}>
                    <CardHeader>
                      <CardTitle className="text-lg">{answer.question}</CardTitle>
                      <CardDescription className="mt-2">{answer.answer}</CardDescription>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{answer.likes}</span>
                        </div>
                        <span>{answer.createdAt}</span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}
