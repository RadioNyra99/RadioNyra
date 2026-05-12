"use client"

import { useState, useEffect } from "react"
import { X, Mail, BellRing } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmailPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Show popup after 10 seconds if not already seen
    const hasSeenPopup = localStorage.getItem("hasSeenEmailPopup")
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("hasSeenEmailPopup", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    // Here you would integrate with Mailchimp API
    console.log("Subscribing email to Mailchimp:", email)
    
    setSubmitted(true)
    setTimeout(() => {
      handleClose()
    }, 3000)
  }

  const handlePushSubscribe = () => {
    // Here you would integrate with OneSignal
    console.log("Requesting push notification permission via OneSignal")
    // alert("Prompting for push notifications...")
    handleClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-background border border-border/50 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in zoom-in-95 duration-300">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleClose}
          className="absolute right-2 top-2 z-10 text-muted-foreground hover:text-foreground rounded-full"
        >
          <X className="h-5 w-5" />
        </Button>
        
        <div className="p-8 text-center pt-10">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            {submitted ? <BellRing className="h-8 w-8 text-primary animate-bounce" /> : <Mail className="h-8 w-8 text-primary" />}
          </div>
          
          <h2 className="text-2xl font-black uppercase tracking-tighter mb-3">
            {submitted ? "You're Subscribed!" : "Get Daily Trending Songs"}
          </h2>
          
          <p className="text-muted-foreground mb-6 text-sm">
            {submitted 
              ? "Thanks for joining the Radio Nyra family. We'll send you the best updates soon."
              : "Never miss a beat. Subscribe to our newsletter to get the latest Bollywood & Tollywood hits delivered straight to your inbox."}
          </p>
          
          {!submitted && (
            <div className="space-y-4">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border/50 bg-muted/50 focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                />
                <Button type="submit" className="w-full rounded-xl h-12 font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-white">
                  Subscribe Now
                </Button>
              </form>
              
              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border/50" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground font-bold">Or</span>
                </div>
              </div>
              
              <Button 
                type="button" 
                variant="outline" 
                className="w-full rounded-xl h-12 font-bold uppercase tracking-wider"
                onClick={handlePushSubscribe}
              >
                <BellRing className="h-4 w-4 mr-2" />
                Enable Push Notifications
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
