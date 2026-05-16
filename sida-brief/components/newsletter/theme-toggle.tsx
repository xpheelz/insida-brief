'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch — render nothing until client mounts
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="h-8 w-8" aria-hidden />

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="group relative flex h-8 w-14 items-center rounded-full border border-border/60 bg-muted px-1 transition-colors hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {/* Track icons */}
      <svg
        className="absolute left-1.5 h-3.5 w-3.5 text-amber-400 transition-opacity"
        style={{ opacity: isDark ? 0.3 : 1 }}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.166 17.834a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 001.061-1.06l-1.59-1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 6.166a.75.75 0 001.06 1.06l1.591-1.59a.75.75 0 00-1.06-1.061L6.166 6.166z" />
      </svg>
      <svg
        className="absolute right-1.5 h-3.5 w-3.5 text-foreground/50 transition-opacity"
        style={{ opacity: isDark ? 1 : 0.3 }}
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
      </svg>

      {/* Thumb */}
      <span
        className="relative z-10 h-5 w-5 rounded-full bg-background shadow-sm ring-1 ring-border/30 transition-transform duration-200"
        style={{ transform: isDark ? 'translateX(24px)' : 'translateX(0px)' }}
      />
    </button>
  )
}
