"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/components/auth-provider"
import { Protected } from "@/components/protected"
import { LogOut, Mail, ShieldCheck } from "lucide-react"
import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function MemberPage() {
  const { user, signOut } = useAuth()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-12 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Member Portal</h1>
          <p className="opacity-90">Welcome to your secured area</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <Protected>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-yellow-600" />
                You are signed in
              </CardTitle>
              <CardDescription>Access member-only content and features</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={user?.photoURL || "/placeholder.svg?height=64&width=64&query=profile"}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{user?.displayName || "Member"}</div>
                  <div className="text-sm text-gray-600 flex items-center gap-1">
                    <Mail className="w-4 h-4" /> {user?.email}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">UID: {user?.uid}</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => signOut()}
                  variant="outline"
                  className="border-yellow-600 text-yellow-700 hover:bg-yellow-50"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </Protected>
      </div>
    </div>
  )
}
