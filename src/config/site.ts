export const site = {
  name: 'BN Material',
  tagline: 'Science. Innovation. Impact.',
  supportingLine: 'Materials intelligence, engineered for discovery.',
  url: 'https://bnmaterial.com',
  sisterSite: 'https://bhijan.com.np',
  founder: 'Bhijan Neupane',
  affiliation:
    'Materials Science and Nanotechnology Laboratory, Faculty of Technology, Nepal Academy of Science and Technology (NAST), Nepal',
  contactEmail: 'info@bnmaterial.com',
  emailConfirmed: false,
};
export const topics = [
  {
    slug: 'physical-metallurgy',
    title: 'Physical Metallurgy',
    summary: 'Structure, phase transformations, and microstructure-aware design.',
  },
  {
    slug: 'mechanical-behavior',
    title: 'Mechanical Behavior',
    summary: 'Deformation, fracture, fatigue, and the mechanics of real materials.',
  },
  {
    slug: 'defects-diffusion',
    title: 'Defects & Diffusion',
    summary: 'Point defects, interfaces, transport, and kinetic pathways.',
  },
  {
    slug: 'functional-materials',
    title: 'Functional Materials',
    summary: 'Electronic, optical, catalytic, and energy-relevant response.',
  },
  {
    slug: 'processing-manufacturing',
    title: 'Processing & Manufacturing',
    summary: 'How process histories shape structure, properties, and performance.',
  },
  {
    slug: 'computational-mse',
    title: 'Computational MSE',
    summary: 'Atomistic models, electronic structure, and reproducible computation.',
  },
];
export const products = [
  {
    slug: 'bn-spectra-studio-pro',
    name: 'BN Spectra Studio Pro',
    status: 'Private beta',
    category: 'Spectral analysis',
    summary:
      'A focused workspace for experimental spectra, comparison, annotation, and publication-oriented figures.',
    features: [
      'Experimental spectral-data import',
      'XRD, FT-IR, UV–Vis and FT-Raman visualization',
      'Peak detection and annotation controls',
      'Multi-spectrum plotting',
      'Exportable data and figures',
    ],
    planned: ['Batch-oriented analysis architecture', 'Expanded computational-spectrum workflows'],
    accent: 'cyan',
  },
  {
    slug: 'sem-auto-analysis-tool',
    name: 'SEM Auto Analysis Tool',
    status: 'In development',
    category: 'Image analysis',
    summary:
      'A developing environment for calibrated particle segmentation and morphology workflows.',
    features: [],
    planned: [
      'SEM image import and scale calibration',
      'Particle segmentation and manual correction',
      'Size, shape, agglomeration, and porosity-area estimates',
      'Batch processing and annotated export',
      'CSV/Excel-compatible data and report generation',
    ],
    accent: 'emerald',
  },
  {
    slug: 'thermo-analyzer-studio',
    name: 'Thermo Analyzer Studio',
    status: 'In development',
    category: 'Thermal analysis',
    summary:
      'A developing thermal-analysis workspace for interpretable TGA, DTG, DSC, and DTA workflows.',
    features: [],
    planned: [
      'TGA import and DTG computation',
      'DSC/DTA visualization and baseline controls',
      'Mass-loss stages, onset, peak, endpoint, and residue analysis',
      'Multi-sample comparison',
      'Plot, table, and report generation',
    ],
    accent: 'amber',
  },
];
