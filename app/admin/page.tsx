import Link from "next/link"
import { LockKeyhole } from "lucide-react"

export default function AdminUnavailablePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 py-12 text-foreground">
      <section className="w-full max-w-lg rounded-3xl border border-border bg-card p-7 text-center shadow-sm sm:p-10">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"><LockKeyhole className="h-7 w-7" aria-hidden /></span>
        <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[.2em] text-primary">Admin access</p>
        <h1 className="mt-2 text-2xl font-black tracking-tight">Secure sign-in is not configured</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">This site is built as a static export and has no server-side authentication service connected. The admin tools are unavailable until secure authentication and protected data storage are set up.</p>
        <Link href="/" className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold text-white hover:bg-primary/90">Return to Radio Nyra</Link>
      </section>
    </main>
  )
}
