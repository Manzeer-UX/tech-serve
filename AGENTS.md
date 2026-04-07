<!-- BEGIN:nextjs-agent-rules -->





## File & Folder Naming

- Components: `PascalCase` folder + file — `Button/Button.tsx` with `index.ts` re-export
- Hooks: `camelCase`, prefix `use` — `useDebounce.ts`
- Server Actions: `camelCase`, suffix `Action` — `createOrderAction.ts`
- Zod schemas: `camelCase`, suffix `Schema` — `registerSchema.ts`
- Types/Interfaces: `PascalCase`
- Utils: `camelCase`
- Next.js specials: lowercase enforced — `page.tsx`, `layout.tsx`, `error.tsx`, `loading.tsx`

---

## Component Rules

- **Never use default exports** from component files — always named exports
- Always `forwardRef` for UI primitives that wrap HTML elements
- Always extend HTML intrinsics for wrapper components: `interface InputProps extends ComponentPropsWithoutRef<'input'>`
- Props interface named `ComponentNameProps`
- CVA variants defined at **module level**, never inside the component function
- Boolean props prefixed: `isLoading`, `isDisabled`, `hasError`, `canEdit`
- Event handlers prefixed: `handleSubmit`, `handleUserDelete`

---

## Server vs Client

- Default to **Server Components** — add `'use client'` only when required
- Reasons to add `'use client'`: `useState`, `useEffect`, browser APIs, event listeners, third-party client libs
- Files in `src/server/` must have `import 'server-only'` at the top
- Never import server-only code into client components

---

## TypeScript

- No `any` — ever
- No type assertions (`as X`) unless absolutely unavoidable, add a comment explaining why
- Use discriminated unions for component states: `'idle' | 'loading' | 'success' | 'error'`
- Use `Result<T>` return type for all Server Actions:
  ```ts
  type Result<T, E = string> =
    | { success: true; data: T }
    | { success: false; error: E }
  ```
- Use branded types for IDs: `type UserId = string & { __brand: 'UserId' }`

---

## Server Actions

- Always validate input with Zod before any logic
- Always return `Result<T>` — never throw to the client
- Use `revalidatePath` or `revalidateTag` after mutations
- Use `redirect` inside Server Actions, not in components

---

## State Management

- Server data → Server Components + Server Actions
- URL state → `nuqs`
- Component-local → `useState` / `useReducer`
- Global UI state → Zustand (never put server data here)
- Never use Context for frequently changing values

---

## Styling

- Use `cn()` (clsx + tailwind-merge) for all className merging
- Use CSS custom properties for all design tokens — colors, spacing, radius, shadow
- Semantic tokens only in components — never raw primitives
- Dark mode via `[data-theme="dark"]` attribute on `<html>`
- Tailwind classes map to CSS variables via `tailwind.config.ts`

---

## Data Fetching

- Fetch data in Server Components — no unnecessary API round-trips
- Use `next: { tags: [...] }` for cache tagging and on-demand revalidation
- Wrap each route in `<Suspense>` with a skeleton fallback
- Parallel fetches: initiate multiple async calls without `await`-ing sequentially

---

## Error Handling

- Every route segment must have `error.tsx`
- Use custom error classes extending `AppError` — never throw raw strings
- Always log errors to monitoring (Sentry) inside `error.tsx` `useEffect`
- Server Action errors → `Result` type, not thrown exceptions

---

## Imports & Exports

- Use `@/` path alias for all internal imports
- Barrel `index.ts` files for feature public APIs — only export what other features need
- Features must not directly import from other features — go through `lib/` or shared types
- Group imports: external libs → internal `@/` → relative

---

## Performance

- `next/image` always — explicit `sizes` prop required
- `dynamic()` for heavy components, charting libs, and anything browser-only (`ssr: false`)
- `useMemo` only for expensive computations or referential stability
- `useCallback` only when passed to memoized children or used as effect dependency

---

## Testing

- Unit tests (Vitest): pure functions, hooks, utils
- Component tests (RTL): user interactions, accessibility, states
- E2E (Playwright): critical user journeys only
- Test files colocated: `Button.test.tsx` next to `Button.tsx`
- Query by role/label first — never by `className` or `id`

---

## Component-Based Workflow

When building or modifying any UI, work strictly component by component — never write multiple components in one pass.

### Before You Write a Single Line

- Identify the **one component** you are working on — name it, scope it
- Determine its type: `ui/` primitive · `layout/` structural · `shared/` composite · `features/` domain
- Check if a similar component already exists — extend, don't duplicate
- Define props interface first, before any JSX

### Component Checklist (complete in order)

```
1. [ ] Props interface defined (ComponentNameProps)
2. [ ] Variants defined with CVA at module level (if applicable)
3. [ ] Component function / forwardRef written
4. [ ] displayName set (for forwardRef components)
5. [ ] Named export added
6. [ ] index.ts re-export updated
7. [ ] Skeleton / loading state handled (if async data involved)
8. [ ] Empty state handled
9. [ ] Error state handled
10. [ ] Accessibility — role, aria-*, keyboard nav verified
11. [ ] Responsive — mobile-first Tailwind classes
12. [ ] Dark mode — semantic tokens used (no hardcoded colors)
13. [ ] Test file created (ComponentName.test.tsx)
14. [ ] Story file created (ComponentName.stories.tsx) if ui/ primitive
```

### Size Rules

- A component file must not exceed **150 lines** — split if it does
- A component must render **one coherent thing** — if you need an "and", split it
- Extract any logic >3 lines into a custom hook in the same folder
- Extract any repeated JSX block (2+ times) into its own component

### Anatomy Order (inside every component file)

```ts
// 1. Imports
// 2. CVA variants (if any)
// 3. Props interface
// 4. Component (forwardRef or function)
// 5. displayName
// 6. Named exports
```

### Composition Over Configuration

- Prefer `children` + slots over a growing list of props
- Use compound components for complex UI (e.g. `<Card>`, `<Card.Header>`, `<Card.Body>`)
- Never pass >6 props — if you need more, introduce a data object or split the component

```tsx
// ✅ Slot pattern
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>

// ❌ Prop explosion
<Card title="..." subtitle="..." footer="..." actions={[...]} badge="..." icon={...} />
```

### Isolation Rule

- A component must work **in isolation** — no implicit dependencies on parent state
- All data a component needs comes through props or its own data-fetching (Server Component)
- Never reach into a global store from a `ui/` primitive — only feature components may touch Zustand

### When the Agent Is Asked to "Build a Feature"

Work in this order, one step at a time, waiting for confirmation between each:

```
1. Scaffold the folder structure for the feature
2. Define types and schemas
3. Build ui/ primitives needed (bottom-up)
4. Build shared/ composites
5. Build feature/ components
6. Wire Server Actions
7. Connect page.tsx (routing only — thin as possible)
8. Add tests
```

Never jump to step 7 before steps 1–6 are solid.

---

## Do Nots

- No `console.log` in committed code
- No hardcoded secrets or URLs — use `env.ts` with `@t3-oss/env-nextjs`
- No `useEffect` for data fetching in Server Component contexts
- No inline styles unless dynamically computed
- No mutation of state directly — use immer or spread
- No barrel files in `app/` directory
- No `export default` from component or hook files
<!-- END:nextjs-agent-rules -->
