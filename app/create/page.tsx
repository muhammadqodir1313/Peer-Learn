"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Video, HelpCircle, Upload, Plus, Minus } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function CreatePage() {
  const [contentType, setContentType] = useState("text")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  const [questions, setQuestions] = useState([{ question: "", options: ["", "", "", ""], correctAnswer: 0 }])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      // Simulate upload progress
      setUploadProgress(0)
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 10
        })
      }, 200)
    }
  }

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", "", ""], correctAnswer: 0 }])
  }

  const removeQuestion = (index: number) => {
    if (questions.length > 1) {
      setQuestions(questions.filter((_, i) => i !== index))
    }
  }

  const updateQuestion = (index: number, field: string, value: string | number) => {
    const updated = [...questions]
    if (field === "question") {
      updated[index].question = value as string
    } else if (field === "correctAnswer") {
      updated[index].correctAnswer = value as number
    } else if (field.startsWith("option")) {
      const optionIndex = Number.parseInt(field.split("-")[1])
      updated[index].options[optionIndex] = value as string
    }
    setQuestions(updated)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Reset form after success
    setTimeout(() => {
      setTitle("")
      setDescription("")
      setSubject("")
      setContent("")
      setQuestions([{ question: "", options: ["", "", "", ""], correctAnswer: 0 }])
      setSubmitSuccess(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Yangi kontent yaratish</h1>
          <p className="text-gray-600">O'z bilimlaringizni boshqalar bilan bo'lishing</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Kontent turi tanlang</CardTitle>
            <CardDescription>Qanday turdagi material yaratmoqchisiz?</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={contentType} onValueChange={setContentType}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="text" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Matn
                </TabsTrigger>
                <TabsTrigger value="video" className="flex items-center gap-2">
                  <Video className="h-4 w-4" />
                  Video
                </TabsTrigger>
                <TabsTrigger value="test" className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  Test
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                {/* Common Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Sarlavha</Label>
                    <Input
                      id="title"
                      placeholder="Kontentingiz sarlavhasini kiriting"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Fan</Label>
                    <Select value={subject} onValueChange={setSubject} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Fanni tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matematika">Matematika</SelectItem>
                        <SelectItem value="fizika">Fizika</SelectItem>
                        <SelectItem value="kimya">Kimya</SelectItem>
                        <SelectItem value="ingliz-tili">Ingliz tili</SelectItem>
                        <SelectItem value="tarix">Tarix</SelectItem>
                        <SelectItem value="geografiya">Geografiya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Tavsif</Label>
                  <Textarea
                    id="description"
                    placeholder="Kontentingiz haqida qisqacha ma'lumot bering"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>

                {/* Content Type Specific Fields */}
                <TabsContent value="text" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="content">Matn mazmuni</Label>
                    <Textarea
                      id="content"
                      placeholder="Matn kontentingizni bu yerga yozing..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={10}
                      required
                    />
                  </div>
                </TabsContent>

                <TabsContent value="video" className="space-y-4">
                  <div className="space-y-2">
                    <Label>Video yuklash</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Video faylni bu yerga tashlang yoki tanlang</p>
                      <input type="file" className="hidden" id="video-upload" onChange={handleFileUpload} />
                      <label htmlFor="video-upload">
                        <Button variant="outline" asChild>
                          <span>Fayl tanlash</span>
                        </Button>
                      </label>
                      {uploadedFile && (
                        <p className="mt-2 text-green-500">
                          {uploadedFile.name} yuklandi ({uploadProgress}%)
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="video-description">Video tavsifi</Label>
                    <Textarea
                      id="video-description"
                      placeholder="Video haqida batafsil ma'lumot bering..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={5}
                      required
                    />
                  </div>
                </TabsContent>

                <TabsContent value="test" className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-lg font-medium">Test savollari</Label>
                      <Button type="button" onClick={addQuestion} variant="outline" size="sm">
                        <Plus className="h-4 w-4 mr-2" />
                        Savol qo'shish
                      </Button>
                    </div>

                    {questions.map((q, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">Savol {index + 1}</CardTitle>
                            {questions.length > 1 && (
                              <Button type="button" onClick={() => removeQuestion(index)} variant="outline" size="sm">
                                <Minus className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <Label>Savol matni</Label>
                            <Textarea
                              placeholder="Savolingizni yozing..."
                              value={q.question}
                              onChange={(e) => updateQuestion(index, "question", e.target.value)}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Javob variantlari</Label>
                            {q.options.map((option, optionIndex) => (
                              <div key={optionIndex} className="flex items-center gap-2">
                                <Input
                                  placeholder={`Variant ${optionIndex + 1}`}
                                  value={option}
                                  onChange={(e) => updateQuestion(index, `option-${optionIndex}`, e.target.value)}
                                  required
                                />
                                <input
                                  type="radio"
                                  name={`correct-${index}`}
                                  checked={q.correctAnswer === optionIndex}
                                  onChange={() => updateQuestion(index, "correctAnswer", optionIndex)}
                                  className="w-4 h-4"
                                />
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? "Yuborilmoqda..." : "Kontentni nashr qilish"}
                  </Button>
                  <Button type="button" variant="outline">
                    Qoralama sifatida saqlash
                  </Button>
                </div>
                {submitSuccess && <div className="text-green-500">Kontent muvaffaqiyatli yaratildi!</div>}
              </form>
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
