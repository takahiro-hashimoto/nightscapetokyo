# Content Visibility Playbook

`content-visibility: auto` is useful when we want to keep full HTML in the document for SEO while reducing initial rendering cost.

## Safe default

Wrap non-critical, below-the-fold sections with a shared wrapper:

```tsx
<DeferredRender>
  <SectionComponent />
</DeferredRender>
```

This keeps the content in server-rendered HTML and lets the browser skip expensive paint/layout work until the section is near the viewport.

## Good candidates

- Maps
- FAQ blocks
- author/profile boxes
- share modules
- related content sections
- long lists after the first visible chunk
- lower-page promotional or supporting content

## Avoid by default

- hero sections
- H1 and the first explanatory paragraph
- LCP images and their immediate wrapper
- primary CTA blocks above the fold
- client components that have a history of hydration mismatches when class names differ between server and client

## Recommended rollout rules

1. Keep important text in the initial HTML.
2. Defer rendering, not data availability.
3. Prefer wrapping a section from a parent server component instead of mutating a client component directly.
4. For ranked/list pages, render the first visible items normally and defer the rest.
5. Verify with Search Console rendered HTML if the section is SEO-critical.

## Next.js implementation notes

- Prefer a small shared wrapper such as `src/components/layout/DeferredRender.tsx`.
- Use the wrapper in shared page templates first: home, category, tag, recommend, spot detail.
- If a section is a client component, prefer wrapping it from the parent rather than changing its root class inside the client component.
- Treat `content-visibility` as a rendering optimization, not a replacement for pagination when content is extremely large.
