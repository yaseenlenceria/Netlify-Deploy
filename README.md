# Weddings with Erica

Live website for Weddings with Erica, deployed on Netlify from this repository.

- Production site: https://weddingswitherica.com/
- Canonical domain: `https://weddingswitherica.com`
- Netlify build config: `netlify.toml`
- Live app source: `artifacts/weddings-with-erica`
- Public SEO files: `artifacts/weddings-with-erica/public/robots.txt` and `artifacts/weddings-with-erica/public/sitemap.xml`
- Main route map: `artifacts/weddings-with-erica/src/App.tsx`
- SEO landing page content: `artifacts/weddings-with-erica/src/pages/SeoLandingPage.tsx`

## Netlify Build

Netlify builds the `@workspace/weddings-with-erica` package and publishes:

```bash
artifacts/weddings-with-erica/dist/public
```

The canonical redirect policy keeps all public traffic on the non-www HTTPS domain:

```text
https://weddingswitherica.com/
```

## SEO Maintenance

When adding or removing a public page:

1. Update the route in `artifacts/weddings-with-erica/src/App.tsx`.
2. Update page metadata/schema in the relevant page component.
3. Update `artifacts/weddings-with-erica/public/sitemap.xml`.
4. Keep `robots.txt` pointing to the canonical sitemap.
5. Add a `301` redirect in `netlify.toml` for removed or renamed URLs.
6. After Netlify deploys, submit the sitemap in Google Search Console.

## Current Public Pages

- `/`
- `/meet-erica`
- `/services`
- `/testimonials`
- `/contact`
- `/wedding-planner-in-ireland-price`
- `/wedding-planner-in-ireland-cost`
- `/best-wedding-planner-in-ireland`
- `/wedding-planner-book`
- `/destination-wedding-planner`
- `/international-wedding-planner`
- `/on-the-day-wedding-coordinator`
- `/privacy-policy`
