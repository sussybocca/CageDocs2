# CAGE Docs 2

Public documentation and open-source CAGE V4 core snapshot.

CAGE is a strict glyph-based systems language. Current V4 source is judged by a versioned Constitution, compiler Courts, and the Tribunal before it can receive execution authority.

## Repository layout

- `app/` — Next.js/TSX documentation site.
- `content/docs/` — tutorials and language/reference chapters.
- `app/glyphs/` — categorized glyph reference.
- `examples/` — strict headless and real visual CAGE programs.
- `opensource/cage/` — published CAGE-native lexer, Source Law, verifier, laws, compiler/runtime/backends and UI source.
- `reference/` — design/reference material used to document the strict V4 architecture.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm install
npm run build
```

`next.config.mjs` uses static export, so the deployable directory is `out/`.

## Cloudflare Pages

Recommended setup:

1. In Cloudflare, create **Workers & Pages → Create → Pages → Connect to Git**.
2. Choose the GitHub repository `sussybocca/CageDocs2`.
3. Production branch: `main`.
4. Build command: `npm run build`.
5. Build output directory: `out`.
6. Root directory: repository root.
7. Deploy once before attaching the custom hostname.

## Recommended hostname

Use **`cage.packarcade.win`** for CAGE.

Keep `school-git.packarcade.win` for the larger School-GIT platform. CAGE now has its own language identity, docs, examples, source code, Studio/runtime direction, and potentially its own future package ecosystem, so a dedicated first-level subdomain is the cleaner long-term design.

After the first successful Pages deployment, open the Cloudflare Pages project → **Custom domains** → **Set up a custom domain** → enter `cage.packarcade.win`. Because `packarcade.win` is already managed by the same Cloudflare account, Cloudflare can create/validate the DNS binding.

A useful future naming scheme is:

- `cage.packarcade.win` — docs and language home.
- `studio.cage.packarcade.win` — hosted CAGE Studio later.
- `api.cage.packarcade.win` — future public CAGE service/package API if one is ever needed.

Do **not** point the existing `school-git.packarcade.win` hostname at this docs project unless you actually intend to replace the School-GIT deployment.

## CAGE application authenticity

A CAGE application preview is the live scene emitted by the admitted running CAGE source. Headless source has no visual application preview. Studio must not generate a screenshot or source-code report and present it as the application.

## License

Repository content is published under the MIT license unless a file explicitly says otherwise.
