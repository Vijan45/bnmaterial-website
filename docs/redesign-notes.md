# BN Material root redesign

## Design direction

The redesign replaces the previous narrow orbital/spectra visual language with a restrained materials-atlas system. Motion is tied to recognizable materials phenomena and remains inside defined interface frames.

### Scientific animation set

- defect-mediated crack closure in a conceptual self-healing crystal lattice
- molecular-dynamics trajectories and thermal particle motion
- heterojunction band alignment and carrier transfer
- photovoltaic photon capture and charge extraction
- polymer-chain stretching and viscoelastic response
- grain nucleation and microstructural evolution

All motion respects `prefers-reduced-motion`.

## Materials-engineering coverage

The information architecture now includes twelve connected domains:

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

## Brand system

The new BN Material identity uses a faceted hexagonal lattice, node markers, and an integrated BN monogram. Updated assets include:

- `public/brand/bn-material-logo.svg`
- `public/brand/bn-monogram-mono.svg`
- `public/favicon.svg`
- `public/social-preview.svg`
- `public/og.png`

## Pages rebuilt

- global header, mega navigation, mobile navigation, and footer
- homepage
- research and general information pages
- all topic index and detail pages
- software catalogue and product detail pages
- contact page
- 404 page

## Validation completed in the editing environment

- TypeScript validation for `src/config/site.ts`
- JavaScript syntax validation for all inline scripts
- CSS brace and structure validation
- XML parsing for all SVG brand assets
- frontmatter-fence checks for Astro pages

A full Astro build could not be executed in the editing sandbox because the package registry was unavailable. Run the standard project checks in GitHub Actions or a network-enabled local environment before production deployment.
