This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

RPM-ECOMMERCEWEB
├─ README.md
├─ app
│ ├─ (auth)
│ │ ├─ login
│ │ │ └─ page.tsx
│ │ └─ register
│ │ └─ page.tsx
│ ├─ (marketing)
│ │ ├─ campaign
│ │ │ └─ [slug]
│ │ │ └─ page.tsx
│ │ ├─ manifesto
│ │ │ └─ page.tsx
│ │ └─ page.tsx
│ ├─ (store)
│ │ ├─ account
│ │ │ └─ page.tsx
│ │ ├─ cart
│ │ │ └─ page.tsx
│ │ ├─ checkout
│ │ │ └─ page.tsx
│ │ └─ products
│ │ ├─ [slug]
│ │ │ ├─ loading.tsx
│ │ │ └─ page.tsx
│ │ ├─ loading.tsx
│ │ └─ page.tsx
│ ├─ favicon.ico
│ ├─ layout.tsx
│ ├─ not-found.tsx
│ ├─ page.tsx
│ ├─ robots.ts
│ └─ sitemap.ts
├─ components
│ ├─ layout
│ │ ├─ cart-badge.tsx
│ │ ├─ container.tsx
│ │ ├─ footer.tsx
│ │ ├─ header-search.tsx
│ │ ├─ header.tsx
│ │ └─ section.tsx
│ ├─ marketing
│ │ ├─ best-sellers.tsx
│ │ ├─ collection-cards.tsx
│ │ ├─ featured-products.tsx
│ │ ├─ hero.tsx
│ │ ├─ index.ts
│ │ ├─ lookbook-mini-grid.tsx
│ │ ├─ manifesto.tsx
│ │ ├─ newsletter-cta.tsx
│ │ └─ trust-bar.tsx
│ └─ ui
│ ├─ Button.tsx
│ ├─ badge.tsx
│ ├─ card.tsx
│ ├─ input.tsx
│ ├─ pagination.tsx
│ └─ skeleton.tsx
├─ eslint.config.mjs
├─ features
│ ├─ cart
│ │ ├─ components
│ │ │ └─ cart-client.tsx
│ │ ├─ store.ts
│ │ └─ types.ts
│ ├─ catalog
│ │ ├─ components
│ │ │ ├─ image-gallery.tsx
│ │ │ ├─ info-block.tsx
│ │ │ ├─ pdp-actions.tsx
│ │ │ ├─ price.tsx
│ │ │ ├─ product-card.tsx
│ │ │ ├─ product-client.tsx
│ │ │ ├─ product-grid-skeleton.tsx
│ │ │ ├─ product-grid.tsx
│ │ │ ├─ product-info.tsx
│ │ │ └─ variant-picker.tsx
│ │ └─ types.ts
│ └─ checkout
│ ├─ components
│ │ └─ checkout-client.tsx
│ └─ validators.ts
├─ lib
│ ├─ analytics
│ │ ├─ events.ts
│ │ └─ providers.ts
│ ├─ api
│ │ ├─ auth.ts
│ │ ├─ catalog.ts
│ │ ├─ client.ts
│ │ └─ dtos
│ │ ├─ cart.ts
│ │ ├─ catalog.ts
│ │ └─ checkout.ts
│ ├─ config
│ │ └─ envConfig.ts
│ ├─ mock
│ │ └─ products.ts
│ ├─ seo
│ │ ├─ jsonld.ts
│ │ └─ metadata.ts
│ ├─ supabase
│ │ ├─ client.ts
│ │ └─ server.ts
│ └─ utils
│ └─ cn.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│ ├─ file.svg
│ ├─ globe.svg
│ ├─ images
│ │ └─ products
│ ├─ next.svg
│ ├─ vercel.svg
│ └─ window.svg
├─ styles
│ └─ globals.css
└─ tsconfig.json
