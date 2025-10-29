"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Send } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CreateQuestionPage() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [subject, setSubject] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{ title?: string; content?: string; subject?: string }>({})
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setIsSubmitting(true)

    // Validation
    const newErrors: { title?: string; content?: string; subject?: string } = {}
    if (!title.trim()) newErrors.title = "Savol sarlavhasi kiritish majburiy"
    if (!content.trim()) newErrors.content = "Savol mazmuni kiritish majburiy"
    if (!subject) newErrors.subject = "Fan tanlash majburiy"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Success
    setIsSubmitting(false)
    router.push("/forum")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/forum">
            <Button variant="ghost" className="hover:bg-white/50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Forumga qaytish
            </Button>
          </Link>
        </div>

        <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Yangi savol berish</CardTitle>
            <CardDescription>
              Savolingizni aniq va tushunarli qilib yozing, boshqa o'quvchilar sizga yordam berishlari uchun
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="subject">Fan</Label>
                <Select value={subject} onValueChange={setSubject}>
                  <SelectTrigger>
                    <SelectValue placeholder="Fanni tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Matematika">Matematika</SelectItem>
                    <SelectItem value="Fizika">Fizika</SelectItem>
                    <SelectItem value="Kimya">Kimya</SelectItem>
                    <SelectItem value="Ingliz tili">Ingliz tili</SelectItem>
                    <SelectItem value="Tarix">Tarix</SelectItem>
                    <SelectItem value="Geografiya">Geografiya</SelectItem>
                  </SelectContent>
                </Select>
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Savol sarlavhasi</Label>
                <Input
                  id="title"
                  placeholder="Savolingizni qisqacha ifodalang"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Savol mazmuni</Label>
                <Textarea
                  id="content"
                  placeholder="Savolingizni batafsil yozing. Qancha ko'p ma'lumot bersangiz, shuncha yaxshi javob olasiz."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={8}
                />
                {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isSubmitting ? (
                    "Yuborilmoqda..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Savolni yuborish
                    </>
                  )}
                </Button>
                <Button type="button" variant="outline" onClick={() => router.back()}>
                  Bekor qilish
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
