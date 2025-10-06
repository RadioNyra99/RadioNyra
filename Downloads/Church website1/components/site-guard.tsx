"use client"

import type React from "react"
import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Loader2 } from "lucide-react"

export function SiteGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  const isLogin = pathname === "/login"

  useEffect(() => {
    if (loading) return
    // If not signed in and not on /login, force to /login
    if (!user && !isLogin) {
      router.replace("/login")
      return
    }
    // If signed in and on /login, send to /member (or home)
    if (user && isLogin) {
      router.replace("/member")
    }
  }, [user, loading, isLogin, router])

  // While checking or redirecting, show a small loader to avoid flashes
  if (loading || (!user && !isLogin) || (user && isLogin)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-2 text-gray-600">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
