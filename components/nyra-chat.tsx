"use client"

import * as React from "react"
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Namaste! Welcome to Radio Nyra. I'm Nyra, your AI assistant. How can I help you today?",
    timestamp: new Date(),
  },
]

const SUGGESTED_QUESTIONS = [
  "How can I listen in my car?",
  "What is the address of the studio?",
  "Do you have any upcoming events?",
  "What is the difference between FM and AM and HD radio?",
]


export function NyraChat() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [showSuggestions, setShowSuggestions] = React.useState(true)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages, isOpen])

  const handleSend = async (text?: string) => {
    const messageContent = text || inputValue
    if (!messageContent.trim() || isLoading) return

    if (showSuggestions) setShowSuggestions(false)

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageContent,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    if (!text) setInputValue("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getMockResponse(messageContent),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const getMockResponse = (input: string): string => {
    const lowInput = input.toLowerCase()
    
    // Knowledge Base
    const KB = [
      {
        keywords: ["schedule", "shows", "timing", "when", "program"],
        response: "Our schedule is packed with hits! \n- Morning (7-9 AM): Zara Muskurao with Aayushii Rode \n- Mid-day (10 AM - 1 PM): Triangle Tunes and Talks with Monika Joshi \n- Afternoon (1-4 PM): Bollywood Bliss with Bharti Rathore \n- Evening (7-10 PM): Nirvana Nights with Shivani. \nCheck the full schedule on our Schedule page!"
      },
      {
        keywords: ["contact", "phone", "email", "reach", "whatsapp", "call", "address", "location"],
        response: "You can reach us in many ways:\n- Email: Info@radionyra.com\n- Phone: +1-919-999-8595 (Mon-Fri, 9am-6pm EST)\n- WhatsApp: +1-919-294-4800\n- Location: Durham, North Carolina."
      },
      {
        keywords: ["advertise", "business", "growth", "marketing", "listeners", "stats", "newsletter", "ads"],
        response: "Advertise with the #1 South Asian Radio Network! We have 100K+ daily listeners, a 60K+ monthly newsletter, and 500+ brand partners. Visit our Advertise page to send an inquiry!"
      },
      {
        keywords: ["founded", "history", "start", "1963", "ravi", "cherukuri", "founder", "mission"],
        response: "Radio Nyra has a legacy dating back to November 16, 1963! Our NC journey began in 2014 in Durham. Founded by Ravi Cherukuri, our mission is to empower the South Asian community in the USA."
      },
      {
        keywords: ["frequency", "fm", "station", "channel", "hindi", "telugu", "99.9", "hd3", "hd4"],
        response: "Tune in on:\n- Hindi: Raleigh-Durham 99.9FM-HD4, Atlanta 107.5FM-HD3, and more!\n- Telugu: Raleigh-Durham 99.9FM-HD3 (Launched July 2025)."
      },
      {
        keywords: ["partner", "apna bazar", "spices hut", "sangam", "bombay central"],
        response: "We partner with amazing local businesses like Apna Bazar, Spices Hut, Sangam Mart, and Bombay Central. Check our Partners page for the full list!"
      },
      {
        keywords: ["hello", "hi", "namaste", "hey", "who are you", "what can you do"],
        response: "Namaste! I'm Nyra, your AI assistant. I can help you with show schedules, station frequencies, advertising info, and more. What's on your mind?"
      },
      {
        keywords: ["car", "automotive", "drive", "listen in car", "bluetooth", "carplay", "android auto"],
        response: "To listen in your car, you can:\n- Tune to 99.9 FM (Raleigh-Durham area).\n- Use Bluetooth to stream from our app.\n- Connect via Apple CarPlay or Android Auto using our mobile app!\n- Just ask Siri/Google: 'Open Radio Nyra'!"
      },
      {
        keywords: ["events", "upcoming", "happenings", "holi", "concert", "festiv"],
        response: "We always have exciting events! Currently, we're celebrating the Holi season with special broadcasts and community gatherings. Keep an eye on our 'Events' section on the website for the latest updates!"
      },
      {
        keywords: ["fm", "am", "hd", "difference", "radio technology", "high definition"],
        response: "Great question! \n- FM (Frequency Modulation): Traditional high-quality analog broadcast.\n- AM (Amplitude Modulation): Older tech, usually for talk/news.\n- HD Radio: Digital technology that allows multiple 'channels' on one FM frequency (like our HD3 Telugu and HD4 Hindi stations) with CD-like crystal clear audio!"
      }
    ]

    // Find best match based on keyword count
    let bestMatch = null
    let maxKeywords = 0

    for (const item of KB) {
      const matchCount = item.keywords.filter(k => lowInput.includes(k)).length
      if (matchCount > maxKeywords) {
        maxKeywords = matchCount
        bestMatch = item.response
      }
    }

    return bestMatch || "That's an interesting question! I'm specifically trained on Radio Nyra info like schedules, contact details, and advertising. Could you try asking about one of those? Namaste!"
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-background border border-border shadow-2xl flex flex-col overflow-hidden glass-card"
            style={{ borderRadius: "0px" }} // Following Radio Nyra's sharp corner design
          >
            {/* Header */}
            <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-none">Nyra AI</h3>
                  <p className="text-[10px] opacity-80 mt-1">Online • Radio Nyra Assistant</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-black/10 text-primary-foreground h-8 w-8"
              >
                <X size={20} />
              </Button>
            </div>

            {/* Messages */}
            <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-dot-pattern"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={cn(
                    "flex w-max max-w-[80%] flex-col gap-1",
                    m.role === "user" ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div
                    className={cn(
                      "px-3 py-2 text-sm",
                      m.role === "user"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-foreground"
                    )}
                    style={{ borderRadius: "0px" }}
                  >
                    {m.content}
                  </div>
                  <span className="text-[10px] text-muted-foreground px-1">
                    {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Loader2 size={14} className="animate-spin" />
                  <span className="text-xs italic">Nyra is thinking...</span>
                </div>
              )}
              
              {showSuggestions && messages.length === 1 && !isLoading && (
                <div className="pt-2 space-y-2">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-2">Suggested Questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(q)}
                        className="text-left px-3 py-2 text-xs bg-primary/5 hover:bg-primary/10 border border-primary/20 text-primary transition-all duration-200 hover:translate-x-1"
                        style={{ borderRadius: "0px" }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border bg-background">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <Input
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="bg-muted border-none focus-visible:ring-primary text-sm h-10"
                  style={{ borderRadius: "0px" }}
                />
                <Button 
                    type="submit" 
                    size="icon" 
                    disabled={!inputValue.trim() || isLoading}
                    className="h-10 w-10 shrink-0"
                    style={{ borderRadius: "0px" }}
                >
                  <Send size={18} />
                </Button>
              </form>
              <p className="text-[8px] text-center text-muted-foreground mt-2 uppercase tracking-widest font-medium">
                Radio Nyra • The Voice of the Indian Subcontinent
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bubble Toggle */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className={cn(
            "h-14 w-14 rounded-full shadow-[0_0_20px_rgba(255,0,0,0.3)] bg-primary hover:bg-primary transition-all duration-300",
            isOpen && "rotate-90"
          )}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </Button>
      </motion.div>
    </div>
  )
}
