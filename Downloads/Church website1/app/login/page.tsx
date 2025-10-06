"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
} from "firebase/auth"
import { auth, googleProvider } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Mail, Lock, Eye, EyeOff, Loader2, LogIn, UserPlus, KeyRound, LogInIcon } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"
import { Navigation } from "@/components/navigation"

export default function LoginPage() {
  const router = useRouter()
  const { user } = useAuth()

  const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [info, setInfo] = useState<string | null>(null)

  useEffect(() => {
    if (user) {
      router.replace("/member")
    }
  }, [user, router])

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setInfo(null)
    try {
      if (mode === "sign-in") {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
      }
      router.replace("/member")
    } catch (err: any) {
      setError(err?.message || "Authentication failed")
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = async () => {
    setLoading(true)
    setError(null)
    setInfo(null)
    try {
      await signInWithPopup(auth, googleProvider)
      router.replace("/member")
    } catch (err: any) {
      setError(err?.message || "Google sign-in failed")
    } finally {
      setLoading(false)
    }
  }

  const handleForgotPassword = async () => {
    setError(null)
    setInfo(null)
    if (!email) {
      setError("Please enter your email to reset password.")
      return
    }
    setLoading(true)
    try {
      await sendPasswordResetEmail(auth, email)
      setInfo("Password reset email sent. Please check your inbox.")
    } catch (err: any) {
      setError(err?.message || "Failed to send reset email")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="py-12 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">{mode === "sign-in" ? "Welcome Back" : "Create Your Account"}</h1>
          <p className="opacity-90">
            {mode === "sign-in" ? "Sign in to access your member portal" : "Join and access your member portal"}
          </p>
        </div>
      </section>

      <div className="max-w-md mx-auto px-4 py-12">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {mode === "sign-in" ? (
                <LogIn className="w-5 h-5 text-yellow-600" />
              ) : (
                <UserPlus className="w-5 h-5 text-yellow-600" />
              )}
              {mode === "sign-in" ? "Sign In" : "Sign Up"}
            </CardTitle>
            <CardDescription>
              {mode === "sign-in"
                ? "Use your email and password or continue with Google"
                : "Create an account with email/password or use Google"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleEmailAuth}>
              <div>
                <Label htmlFor="email">Email</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-9"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-1">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-9 pr-10"
                    placeholder={mode === "sign-in" ? "Enter your password" : "Create a password"}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded p-2">{error}</div>}
              {info && (
                <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded p-2">{info}</div>
              )}

              <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...
                  </>
                ) : mode === "sign-in" ? (
                  <>
                    <LogInIcon className="w-4 h-4 mr-2" /> Sign In
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4 mr-2" /> Create Account
                  </>
                )}
              </Button>

              <div className="flex items-center gap-3">
                <Separator className="flex-1" />
                <span className="text-xs text-gray-500">or</span>
                <Separator className="flex-1" />
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full bg-transparent"
                onClick={handleGoogle}
                disabled={loading}
              >
                {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Continue with Google
              </Button>

              <div className="flex items-center justify-between text-sm">
                <button
                  type="button"
                  onClick={() => setMode(mode === "sign-in" ? "sign-up" : "sign-in")}
                  className="text-yellow-700 hover:underline"
                >
                  {mode === "sign-in" ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                </button>

                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-gray-600 hover:underline flex items-center gap-1"
                >
                  <KeyRound className="w-4 h-4" />
                  Forgot password?
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <Link href="/" className="hover:underline">
                Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
