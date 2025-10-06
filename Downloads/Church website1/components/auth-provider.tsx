"use client"

import type React from "react"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { auth } from "@/lib/firebase"
import { onAuthStateChanged, setPersistence, browserLocalPersistence, signOut as fbSignOut } from "firebase/auth"

type AuthContextValue = {
  user: import("firebase/auth").User | null
  loading: boolean
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<import("firebase/auth").User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Persist auth across reloads
    setPersistence(auth, browserLocalPersistence).catch(() => {
      // ignore persistence errors (e.g., private mode)
    })
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setLoading(false)
    })
    return () => unsub()
  }, [])

  const signOut = async () => {
    await fbSignOut(auth)
  }

  const value = useMemo(() => ({ user, loading, signOut }), [user, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}
