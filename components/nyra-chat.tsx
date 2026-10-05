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
    content: "Namaste! I'm Nyra AI, your personal discovery assistant for South Asian music, live shows, podcasts, and community events on Radio Nyra. What would you like to explore?",
    timestamp: new Date(),
  },
]

const SUGGESTED_QUESTIONS = [
  "What song was playing 10 minutes ago?",
  "When is the next Telugu show?",
  "What community events are happening this weekend?",
  "Show me immigration podcast updates",
  "How can I tune in to 99.9 FM in my car?",
]


export function NyraChat() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const [showSuggestions, setShowSuggestions] = React.useState(true)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleOpenAI = (e: Event) => {
      const customEvent = e as CustomEvent<{ query?: string }>
      setIsOpen(true)
      if (customEvent.detail?.query) {
        setTimeout(() => {
          handleSend(customEvent.detail.query)
        }, 300)
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("open-nyra-ai", handleOpenAI)
      return () => window.removeEventListener("open-nyra-ai", handleOpenAI)
    }
  }, [])

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
        keywords: ["song playing", "what was playing", "played", "10 minutes", "song ago", "track", "tum hi ho"],
        response: "🎶 Live Broadcast Music Log:\n- 99.9 FM-HD4 Hindi (Zara Muskurao): Recently played 'Tum Hi Ho' by Arijit Singh, followed by 'Kesariya'.\n- 99.9 FM-HD3 Telugu: Recently played 'Samajavaragamana' by Sid Sriram.\nClick the play button in the bottom player bar to listen live!"
      },
      {
        keywords: ["dedication", "dedicate", "song request", "request"],
        response: "🎵 Listener Song Dedication:\nTo dedicate a song on air to your friends or family:\n1. WhatsApp: +1 (919) 294-4800\n2. Include: Song Title, Artist Name, Name of recipient & your dedication message.\nOur on-air RJs will broadcast your dedication during the evening drive shows!"
      },
      {
        keywords: ["immigration", "visa", "h-1b", "h1b", "l-1", "l1", "f-1", "j-1", "brown"],
        response: "🇺🇸 Immigration & Legal Spotlight:\nWe have full-length video podcast episodes with Brown Immigration Law:\n- $103,265 H-1B Fee DHS Proposal Explained by Kelsey Berger\n- L-1 Visa Approval Secrets & Qualifications\n- F-1 vs J-1 vs I Visas Explained for Students\nCheck out the 'Latest RadioNyra Podcasts' section on the homepage or visit /podcasts!"
      },
      {
        keywords: ["schedule", "shows", "timing", "when", "program"],
        response: "Our schedule is packed with hits!\n- Morning (7-9 AM): Zara Muskurao with Aayushii Rode (HD4 Hindi)\n- Morning (8-10 AM): Chinna Mata with Priya (HD3 Telugu)\n- Midday (9-11 AM): Triangle Tunes and Talks with Monika Joshi\n- Afternoon (1-3 PM): Bollywood Bliss with Bharti Rathore\n- Evening Drive (5-7 PM): Dil Se Desi with Van Bhandari (HD4)\n- Evening (8-11 PM): Nirvana Nights with Parag.\nCheck the complete 7-day schedule on /schedule!"
      },
      {
        keywords: ["telugu", "next telugu", "chinna mata"],
        response: "RadioNyra Telugu broadcasts 24/7 on 99.9 FM-HD3 in the Raleigh-Durham Triangle!\n- Morning (8-10 AM): Chinna Mata with Priya\nSwitch stations anytime in the bottom player!"
      },
      {
        keywords: ["contact", "phone", "email", "reach", "whatsapp", "call", "address", "location"],
        response: "You can reach us in many ways:\n- Email: Info@radionyra.com\n- Phone: +1 (919) 294-4800 (Mon-Fri, 9am-6pm EST)\n- WhatsApp: +1 (919) 294-4800\n- Location: Durham, North Carolina."
      },
      {
        keywords: ["advertise", "business", "growth", "marketing", "listeners", "stats", "newsletter", "ads"],
        response: "Advertise with the #1 Indian Subcontinent Radio Network! We have 100K+ daily listeners, a 60K+ monthly newsletter, and 500+ brand partners. Visit our Advertise page to send an inquiry!"
      },
      {
        keywords: ["founded", "history", "start", "1963", "ravi", "cherukuri", "founder", "mission"],
        response: "Radio Nyra has a legacy dating back to November 16, 1963! Our NC journey began in 2014 in Durham. Founded by Ravi Cherukuri, our mission is to empower the Indian Subcontinent community in the USA."
      },
      {
        keywords: ["frequency", "fm", "station", "channel", "hindi", "telugu", "99.9", "hd3", "hd4"],
        response: "Tune in on:\n- Hindi: Raleigh-Durham 99.9FM-HD4, Atlanta 107.5FM-HD3, and more!\n- Telugu: Raleigh-Durham 99.9FM-HD3 (Launched July 2025)."
      },
      {
        keywords: ["partner", "partners", "client", "clients", "apna bazar", "spices hut", "sangam", "bombay central", "brown immigration", "novel morrisville"],
        response: "We partner with amazing businesses and community sponsors including Brown Immigration Law, Novel Morrisville, BMW, Apna Bazar, Spices Hut, and many more. Check our Partners page (/partners) for the full list!"
      },
      {
        keywords: ["hello", "hi", "namaste", "hey", "who are you", "what can you do"],
        response: "Namaste! I'm Nyra, your AI cultural & discovery assistant. Ask me about songs playing on air, show schedules, Telugu & Hindi frequencies, immigration podcast episodes, or community events!"
      },
      {
        keywords: ["car", "automotive", "drive", "listen in car", "bluetooth", "carplay", "android auto"],
        response: "To listen in your car, you can:\n- Tune to 99.9 FM (HD4 for Hindi, HD3 for Telugu in Raleigh-Durham).\n- Use Bluetooth to stream from our app.\n- Connect via Apple CarPlay or Android Auto using our mobile app!\n- Just ask Siri/Google: 'Open Radio Nyra'!"
      },
      {
        keywords: ["events", "upcoming", "happenings", "holi", "concert", "festiv", "weekend", "cary", "morrisville"],
        response: "We have exciting diaspora events in the Triangle!\n- Garba Nights for the Community in Raleigh/Cary\n- Cultural festivals and temple celebrations in Morrisville\nVisit our /events page for full venue details and tickets!"
      },
      {
        keywords: ["fm", "am", "hd", "difference", "radio technology", "high definition"],
        response: "Great question!\n- FM (Frequency Modulation): Traditional high-quality analog broadcast.\n- HD Radio: Modern digital technology that allows multiple crystal-clear digital audio streams on one FM frequency—like our HD3 Telugu and HD4 Hindi stations with CD-like sound!"
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
