"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Search, Users, MessageCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"

const chatRooms = [
  {
    id: 1,
    name: "Matematika guruhi",
    description: "Matematika bo'yicha savol-javoblar",
    members: 156,
    online: 23,
    lastMessage: "Kvadrat tenglamalar haqida",
    lastMessageTime: "2 min oldin",
    isActive: true,
  },
  {
    id: 2,
    name: "Fizika laboratoriyasi",
    description: "Fizika eksperimentlari va nazariya",
    members: 89,
    online: 12,
    lastMessage: "Harakat qonunlari",
    lastMessageTime: "5 min oldin",
    isActive: false,
  },
  {
    id: 3,
    name: "Ingliz tili klubi",
    description: "Ingliz tilini o'rganish va amaliyot",
    members: 234,
    online: 45,
    lastMessage: "Grammar exercises",
    lastMessageTime: "1 min oldin",
    isActive: false,
  },
  {
    id: 4,
    name: "Kimya tajribalari",
    description: "Kimyoviy reaksiyalar va formulalar",
    members: 67,
    online: 8,
    lastMessage: "Valentlik haqida",
    lastMessageTime: "10 min oldin",
    isActive: false,
  },
]

const initialMessages = [
  {
    id: 1,
    author: "Aziza Karimova",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Assalomu alaykum! Kvadrat tenglamalarni yechishda yordam kerak",
    time: "14:30",
    isOwn: false,
  },
  {
    id: 2,
    author: "Siz",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Vaalaykum assalom! Qanday qiyinchilik bor?",
    time: "14:32",
    isOwn: true,
  },
  {
    id: 3,
    author: "Bobur Aliyev",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "Diskriminant formulasini ishlatishda xatolik qilyapman",
    time: "14:33",
    isOwn: false,
  },
  {
    id: 4,
    author: "Siz",
    avatar: "/placeholder.svg?height=32&width=32",
    content: "D = b² - 4ac formulasini to'g'ri qo'llash kerak. Misol ko'rsatayinmi?",
    time: "14:35",
    isOwn: true,
  },
]

export default function ChatPage() {
  const [selectedRoom, setSelectedRoom] = useState(chatRooms[0])
  const [messages, setMessages] = useState(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [roomMessages, setRoomMessages] = useState({
    1: initialMessages,
    2: [],
    3: [],
    4: [],
  })

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        author: "Siz",
        avatar: "/placeholder.svg?height=32&width=32",
        content: newMessage,
        time: new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" }),
        isOwn: true,
      }
      setMessages([...messages, message])
      setNewMessage("")
      setRoomMessages((prev) => ({
        ...prev,
        [selectedRoom.id]: [...(prev[selectedRoom.id] || []), message],
      }))
    }
  }

  const handleRoomChange = (room) => {
    setSelectedRoom(room)
    setMessages(roomMessages[room.id] || [])
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const randomMessages = [
          "Salom hammaga!",
          "Bu mavzu haqida ko'proq ma'lumot bor?",
          "Yordam kerak bo'lsa ayting",
          "Rahmat, tushundim!",
        ]
        const randomMessage = {
          id: Date.now(),
          author: "Boshqa foydalanuvchi",
          avatar: "/placeholder.svg?height=32&width=32",
          content: randomMessages[Math.floor(Math.random() * randomMessages.length)],
          time: new Date().toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" }),
          isOwn: false,
        }
        setMessages((prev) => [...prev, randomMessage])
        setRoomMessages((prev) => ({
          ...prev,
          [selectedRoom.id]: [...(prev[selectedRoom.id] || []), randomMessage],
        }))
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [selectedRoom.id])

  const filteredRooms = chatRooms.filter((room) => room.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Chat Rooms Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Chat xonalari
                </CardTitle>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Xonalarni qidiring..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {filteredRooms.map((room) => (
                    <div
                      key={room.id}
                      className={`p-4 cursor-pointer hover:bg-gray-50 border-l-4 ${
                        selectedRoom.id === room.id ? "border-blue-500 bg-blue-50" : "border-transparent"
                      }`}
                      onClick={() => handleRoomChange(room)}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-sm">{room.name}</h3>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-gray-500">{room.online}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{room.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400">{room.lastMessage}</span>
                        <span className="text-xs text-gray-400">{room.lastMessageTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-full flex flex-col">
              {/* Chat Header */}
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      {selectedRoom.name}
                    </CardTitle>
                    <p className="text-sm text-gray-500 mt-1">
                      {selectedRoom.members} a'zo • {selectedRoom.online} onlayn
                    </p>
                  </div>
                  <Badge variant="outline">{selectedRoom.description}</Badge>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex gap-3 ${message.isOwn ? "flex-row-reverse" : "flex-row"}`}>
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={message.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {message.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isOwn ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        {!message.isOwn && <p className="text-xs font-medium mb-1 opacity-70">{message.author}</p>}
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.isOwn ? "text-blue-100" : "text-gray-500"}`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    placeholder="Xabar yozing..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit" size="sm">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
