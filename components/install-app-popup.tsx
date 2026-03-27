"use client"

import { useState, useEffect } from "react"
import { X, Download, Share } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InstallAppPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if it's already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      return
    }

    // Check if iOS
    const ua = window.navigator.userAgent;
    const webkit = !!ua.match(/WebKit/i);
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    setIsIOS(iOS && webkit && !ua.match(/CriOS/i));

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
      // Show popup after 3 seconds
      setTimeout(() => setIsOpen(true), 3000)
    }
    
    window.addEventListener('beforeinstallprompt', handler)
    
    // For iOS, just show it after a delay if they haven't seen it recently
    if (iOS && !localStorage.getItem("hasSeenInstallPopup")) {
      setTimeout(() => setIsOpen(true), 4000)
    }

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("hasSeenInstallPopup", "true")
  }

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt')
      }
      setDeferredPrompt(null)
      setIsOpen(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-[100] md:w-96">
      <div className="bg-background border border-border/50 rounded-2xl shadow-2xl p-4 flex items-start gap-4 animate-in slide-in-from-bottom-10 fade-in duration-300 relative pr-10">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={handleClose}
          className="absolute right-1 top-1 text-muted-foreground hover:text-foreground h-8 w-8 rounded-full"
        >
          <X className="h-4 w-4" />
        </Button>
        
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
          <Download className="h-6 w-6 text-primary" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-bold mb-1">Install Radio Nyra App</h3>
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
            {isIOS 
              ? "Install our app on your iPhone: tap the Share button below, then 'Add to Home Screen'."
              : "Install our app for a faster, ad-free experience, and background listening."}
          </p>
          
          {!isIOS && (
            <Button onClick={handleInstall} size="sm" className="w-full font-bold uppercase tracking-wider h-8">
              Install Now
            </Button>
          )}
          {isIOS && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium bg-muted/50 p-2 rounded-lg justify-center">
              Tap <Share className="w-4 h-4 mx-1" /> then Add to Home Screen
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
