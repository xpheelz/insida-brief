import { NewsletterHeader } from '@/components/newsletter/header'
import { NewsletterIntro } from '@/components/newsletter/intro'
import { TheWire } from '@/components/newsletter/the-wire'
import { TheUpskill } from '@/components/newsletter/the-upskill'
import { TheVault } from '@/components/newsletter/the-vault'
import { NewsletterSubscribe } from '@/components/newsletter/subscribe'
import { NewsletterFooter } from '@/components/newsletter/footer'
import { ThemeToggle } from '@/components/newsletter/theme-toggle'

const Divider = () => (
  <div className="mx-5 h-px bg-border/50 sm:mx-8" />
)

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      {/* ── Sticky top nav ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex h-12 max-w-[680px] items-center justify-between px-5 sm:px-8">
          <span className="font-serif text-sm font-medium tracking-tight text-foreground">
            The Insida Brief
          </span>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-muted-foreground sm:inline">Issue #001</span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* ── Newsletter body ─────────────────────────────────────────────── */}
      <main className="mx-auto w-full max-w-[680px]">
        <NewsletterHeader />
        <Divider />
        <NewsletterSubscribe />
        <Divider />
        <NewsletterIntro />
        <Divider />
        <TheWire />
        <Divider />
        <TheUpskill />
        <Divider />
        <TheVault />
        <Divider />
        <NewsletterFooter />
      </main>

    </div>
  )
}
