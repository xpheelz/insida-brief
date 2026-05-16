'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function NewsletterSubscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong')
      setStatus('success')
      setMessage(data.message ?? "You're in! Check your inbox for a confirmation.")
      setEmail('')
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section className="px-5 py-7 sm:px-8 sm:py-9">
      <div className="rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 p-6 text-center sm:p-8">
        {/* Icon */}
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-cyan/12">
          <svg className="h-5 w-5 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>

        <h2 className="mb-2 font-serif text-2xl font-medium text-foreground sm:text-3xl">
          Join The Insida Brief
        </h2>
        <p className="mx-auto mb-6 max-w-sm text-sm text-muted-foreground sm:text-base">
          Exclusive tech insights, curated tutorials, and insider deals — every week.
        </p>

        {status === 'success' ? (
          <div className="mx-auto flex max-w-xs items-center gap-3 rounded-xl border border-brand-emerald/30 bg-brand-emerald/8 px-5 py-4 text-left">
            <svg className="h-5 w-5 shrink-0 text-brand-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-foreground">{message}</p>
          </div>
        ) : (
          <>
            {/* Form — stacked on mobile, inline on sm+ */}
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-sm flex-col gap-2.5 sm:flex-row sm:gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                disabled={status === 'loading'}
                required
                className="flex-1 rounded-xl border border-border/60 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-brand-cyan/60 focus:outline-none focus:ring-2 focus:ring-brand-cyan/20 disabled:opacity-50 sm:rounded-r-none sm:rounded-l-xl"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="rounded-xl bg-brand-cyan px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:rounded-l-none sm:rounded-r-xl"
              >
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>
            </form>

            {status === 'error' && (
              <p className="mt-3 text-xs text-destructive">{message}</p>
            )}

            <p className="mt-3 text-xs text-muted-foreground/60">
              Free forever · No spam · Unsubscribe anytime
            </p>
          </>
        )}
      </div>
    </section>
  )
}
