"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HostsRedirect() {
  const router = useRouter()
  useEffect(() => {
    router.replace("/shows")
  }, [router])

  return null
}
