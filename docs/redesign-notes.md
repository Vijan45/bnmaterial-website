# BN Material interface reconstruction

## Design direction

The new interface replaces the previous overlapping neon theme with a coherent materials-intelligence system. The visual language combines editorial spacing, instrument-grade data panels, geometric material structures, precise typography, and restrained motion.

Key changes:

- warm technical surfaces with an optional dark mode
- a new geometric BN lattice-cell identity
- interactive materials-field canvas in the homepage hero
- responsive domain atlas with twelve distinct scientific icons
- high-detail conceptual software workspaces for spectroscopy, microscopy, and thermal analysis
- consistent page architecture for research, information, software, contact, and legal routes
- subtle scroll reveals, card spotlights, tilt response, progress indication, and accessible reduced-motion behavior

## Materials-engineering coverage

The information architecture includes twelve connected domains:

1. Crystal Engineering & Self-Healing Materials
2. Computational Materials & Molecular Dynamics
3. Semiconductors & Heterojunctions
4. Solar Cells & Energy Conversion
5. Biomaterials & Anticancer Platforms
6. Ceramics & High-Temperature Materials
7. Polymers, Composites & Soft Matter
8. Nanomaterials & Two-Dimensional Materials
9. Metallurgy & Structural Materials
10. Catalysis & Environmental Materials
11. Characterization & Materials Informatics
12. Manufacturing & Process Engineering

## Brand assets

- `public/brand/bn-material-logo.svg`
- `public/brand/bn-monogram-mono.svg`
- `public/favicon.svg`
- `public/og.png`

## Rebuilt surfaces

- global header, mega navigation, mobile menu, theme control, and footer
- homepage
- materials-domain index and all domain detail pages
- software catalogue and all product detail pages
- research and general information routes
- contact experience
- 404 page

## Scientific and accessibility boundaries

- Conceptual interface graphics are identified as concepts and are not presented as experimental data.
- Product status, current capability, and planned capability remain separated.
- Motion respects `prefers-reduced-motion`.
- Keyboard focus, semantic navigation, responsive layout, and high-contrast states are preserved.

## Validation

Run the full project checks before deployment:

```sh
pnpm install
pnpm lint
pnpm format:check
pnpm typecheck
pnpm test
pnpm test:e2e
pnpm build
pnpm check:links
```
