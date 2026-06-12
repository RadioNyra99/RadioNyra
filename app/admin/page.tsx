"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Mail, AlertCircle, Radio, Shield } from "lucide-react"

const ADMIN_EMAIL = "info@radionyra.com"
const ADMIN_PASSWORD = "Nyra@1019"

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    setTimeout(() => {
      if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        if (typeof window !== "undefined") {
          sessionStorage.setItem("nyra_admin_auth", "true")
          sessionStorage.setItem("nyra_admin_email", email)
        }
        router.push("/admin/dashboard")
      } else {
        setError("Invalid email or password. Access denied.")
        setIsLoading(false)
      }
    }, 800)
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      <main className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-md">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground mb-2">
              Admin <span className="text-primary">Portal</span>
            </h1>
            <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">
              Authorized Personnel Only
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="bg-card border border-border rounded-2xl p-8 shadow-lg space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" /> Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@radionyra.com"
                required
                className="h-12 bg-background border-border rounded-xl text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                <Lock className="w-3.5 h-3.5" /> Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="h-12 bg-background border-border rounded-xl text-sm"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-bold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-md active:scale-95"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Authenticating...
                </div>
              ) : (
                <>
                  <Lock className="w-5 h-5 mr-2" />
                  Sign In to Dashboard
                </>
              )}
            </Button>

            <div className="text-center pt-4 border-t border-border/50">
              <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                Radio Nyra Admin System v2.0
              </p>
              <div className="flex items-center justify-center gap-2 mt-2 text-muted-foreground/50">
                <Radio className="w-3 h-3" />
                <span className="text-[9px] uppercase tracking-widest font-bold">Secured Access</span>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}
