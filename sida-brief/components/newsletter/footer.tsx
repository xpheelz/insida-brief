export function NewsletterFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-5 py-7 sm:px-8 sm:py-9">
      {/* Referral block */}
      <div className="mb-8 rounded-2xl border border-border/50 bg-card p-6 text-center">
        <h3 className="mb-1.5 font-serif text-lg font-medium text-foreground sm:text-xl">
          Enjoying The Insida Brief?
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Share with a friend and unlock our VIP Software Vault.
        </p>
        <button className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-85">
          Share Your Link
        </button>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center gap-5 text-center">
        <span className="font-serif text-sm text-foreground/70">The Insida Brief</span>

        {/* Socials */}
        <div className="flex items-center gap-5">
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Twitter / X">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Substack">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
          </a>
        </div>

        {/* Legal */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground/60">
          <a href="#" className="transition-colors hover:text-muted-foreground">Privacy</a>
          <span>·</span>
          <a href="#" className="transition-colors hover:text-muted-foreground">Terms</a>
          <span>·</span>
          <a href="#" className="underline underline-offset-2 transition-colors hover:text-muted-foreground">Unsubscribe</a>
        </div>

        <p className="text-xs text-muted-foreground/40">
          © {year} The Insida Brief. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
