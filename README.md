# The Insida Brief — Newsletter Template

A Next.js 15 newsletter web template with Tailwind CSS v4 and shadcn/ui.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **UI**: shadcn/ui primitives
- **Fonts**: Inter + Playfair Display (Google Fonts)
- **Analytics**: Vercel Analytics (production only)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Connecting an Email Platform

The subscribe form posts to `/api/subscribe`. Wire it up in `app/api/subscribe/route.ts`:

| Platform  | Docs |
|-----------|------|
| Resend    | https://resend.com/docs |
| Mailchimp | https://mailchimp.com/developer |
| ConvertKit | https://developers.convertkit.com |
| Beehiiv   | https://developers.beehiiv.com |

Add your API key to `.env.local`:

```
RESEND_API_KEY=re_...
RESEND_AUDIENCE_ID=...
```

## Deploying

Works out of the box on **Vercel** or **Render**.

```bash
pnpm build
pnpm start
```

## Customising

| What | Where |
|------|-------|
| Brand colours (cyan / emerald / amber) | `app/globals.css` → `:root` |
| Newsletter name / issue number | `components/newsletter/header.tsx` |
| News articles | `components/newsletter/the-wire.tsx` |
| Featured course | `components/newsletter/the-upskill.tsx` |
| Deals | `components/newsletter/the-vault.tsx` |
| Footer links | `components/newsletter/footer.tsx` |
| Hero + article images | `public/images/` |
