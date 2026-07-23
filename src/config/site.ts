export const site = {
  name: 'BN Material',
  tagline: 'Materials engineering across scales.',
  supportingLine: 'Research, computation, characterization, and scientific software.',
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
    slug: 'crystal-engineering-self-healing',
    title: 'Crystal Engineering & Self-Healing Materials',
    shortTitle: 'Crystal engineering',
    summary:
      'Defect-aware crystal design, responsive lattices, crack closure, phase selection, and autonomous repair mechanisms.',
    methods: ['Crystal growth', 'Defect chemistry', 'In situ analysis', 'Healing kinetics'],
    visual: 'crystal',
    accent: 'cyan',
  },
  {
    slug: 'computational-materials-molecular-dynamics',
    title: 'Computational Materials & Molecular Dynamics',
    shortTitle: 'Computational materials',
    summary:
      'Electronic structure, atomistic simulation, molecular trajectories, multiscale modeling, and data-driven prediction.',
    methods: ['DFT', 'Molecular dynamics', 'Monte Carlo', 'Multiscale models'],
    visual: 'molecular',
    accent: 'violet',
  },
  {
    slug: 'semiconductors-heterojunctions',
    title: 'Semiconductors & Heterojunctions',
    shortTitle: 'Semiconductors',
    summary:
      'Band alignment, interfaces, carrier transport, doping, junction processing, and optoelectronic device physics.',
    methods: ['Band engineering', 'Thin films', 'Junction analysis', 'Charge transport'],
    visual: 'junction',
    accent: 'blue',
  },
  {
    slug: 'solar-cells-energy-conversion',
    title: 'Solar Cells & Energy Conversion',
    shortTitle: 'Solar & energy',
    summary:
      'Photovoltaic absorbers, charge extraction, stability, catalytic energy conversion, and device-scale performance.',
    methods: ['Photovoltaics', 'Photoelectrochemistry', 'Impedance', 'Stability testing'],
    visual: 'solar',
    accent: 'amber',
  },
  {
    slug: 'biomaterials-anticancer-platforms',
    title: 'Biomaterials & Anticancer Platforms',
    shortTitle: 'Biomaterials',
    summary:
      'Biointerfaces, drug-delivery materials, anticancer nanoplatforms, toxicity-aware design, and therapeutic response.',
    methods: ['Drug delivery', 'Biointerfaces', 'Cytotoxicity', 'Targeted systems'],
    visual: 'bio',
    accent: 'rose',
  },
  {
    slug: 'ceramics-high-temperature-materials',
    title: 'Ceramics & High-Temperature Materials',
    shortTitle: 'Ceramics',
    summary:
      'Sintering, phase evolution, thermal shock, refractory behavior, dielectric response, and extreme-environment stability.',
    methods: ['Sintering', 'Phase analysis', 'Thermal shock', 'Refractories'],
    visual: 'ceramic',
    accent: 'orange',
  },
  {
    slug: 'polymers-composites-soft-matter',
    title: 'Polymers, Composites & Soft Matter',
    shortTitle: 'Polymers & composites',
    summary:
      'Macromolecular architecture, interfaces, viscoelasticity, reinforcement, functional composites, and adaptive soft matter.',
    methods: ['Polymer physics', 'Rheology', 'Composites', 'Interface design'],
    visual: 'polymer',
    accent: 'lime',
  },
  {
    slug: 'nanomaterials-two-dimensional-materials',
    title: 'Nanomaterials & Two-Dimensional Materials',
    shortTitle: 'Nano & 2D materials',
    summary:
      'Size-dependent properties, quantum confinement, nanosheets, surface chemistry, and hierarchical nanostructures.',
    methods: ['Nanostructures', '2D materials', 'Surface science', 'Quantum effects'],
    visual: 'nano',
    accent: 'teal',
  },
  {
    slug: 'metallurgy-structural-materials',
    title: 'Metallurgy & Structural Materials',
    shortTitle: 'Metallurgy',
    summary:
      'Phase transformations, microstructure control, deformation, fracture, fatigue, corrosion, and structural reliability.',
    methods: ['Physical metallurgy', 'Fracture', 'Fatigue', 'Corrosion'],
    visual: 'grain',
    accent: 'steel',
  },
  {
    slug: 'catalysis-environmental-materials',
    title: 'Catalysis & Environmental Materials',
    shortTitle: 'Catalysis & environment',
    summary:
      'Adsorption, reaction pathways, porous materials, photocatalysis, remediation, carbon management, and circular materials.',
    methods: ['Adsorption', 'Catalysis', 'Porous solids', 'Environmental systems'],
    visual: 'catalysis',
    accent: 'green',
  },
  {
    slug: 'characterization-materials-informatics',
    title: 'Characterization & Materials Informatics',
    shortTitle: 'Characterization',
    summary:
      'Spectroscopy, diffraction, microscopy, thermal analysis, quantitative imaging, automation, and reproducible data systems.',
    methods: ['XRD', 'Spectroscopy', 'Microscopy', 'Materials data'],
    visual: 'signal',
    accent: 'indigo',
  },
  {
    slug: 'manufacturing-process-engineering',
    title: 'Manufacturing & Process Engineering',
    shortTitle: 'Processing',
    summary:
      'Synthesis routes, additive manufacturing, coating, heat treatment, scale-up, process control, and quality-by-design.',
    methods: ['Synthesis', 'Additive manufacturing', 'Coatings', 'Process control'],
    visual: 'process',
    accent: 'red',
  },
];

export const products = [
  {
    slug: 'bn-spectra-studio-pro',
    name: 'BN Spectra Studio Pro',
    status: 'Private beta',
    category: 'Spectral analysis',
    summary:
      'An integrated environment for experimental spectra, comparison, annotation, materials interpretation, and publication-ready figures.',
    features: [
      'XRD, FT-IR, UV–Vis, Raman, and multi-spectrum workflows',
      'Interactive peak detection, assignment, labeling, and comparison',
      'Publication-grade figures with reproducible export settings',
      'Structured project files, tables, and report-oriented output',
    ],
    planned: [
      'Batch automation',
      'Expanded computational-spectrum workflows',
      'Instrument-aware import',
    ],
    accent: 'cyan',
    visual: 'spectra',
  },
  {
    slug: 'sem-auto-analysis-tool',
    name: 'SEM Auto Analysis Tool',
    status: 'In development',
    category: 'Microscopy & image analysis',
    summary:
      'A calibrated environment for particle segmentation, morphology statistics, porosity mapping, and traceable image analysis.',
    features: [
      'Scale calibration and image-quality checks',
      'Particle segmentation with manual scientific correction',
      'Size, shape, agglomeration, and porosity-area metrics',
      'Batch processing, annotated export, and structured data tables',
    ],
    planned: [
      'Model-assisted segmentation',
      'Uncertainty reporting',
      'Cross-image comparative dashboards',
    ],
    accent: 'emerald',
    visual: 'micrograph',
  },
  {
    slug: 'thermo-analyzer-studio',
    name: 'Thermo Analyzer Studio',
    status: 'In development',
    category: 'Thermal analysis',
    summary:
      'A transparent workspace for TGA, DTG, DSC, and DTA interpretation, comparison, kinetics, and reporting.',
    features: [
      'TGA import, derivative computation, and stage detection',
      'DSC/DTA visualization with baseline and event controls',
      'Onset, peak, endpoint, residue, and mass-loss analysis',
      'Multi-sample comparison and report-ready output',
    ],
    planned: ['Kinetic model library', 'Instrument templates', 'Automated quality-control checks'],
    accent: 'amber',
    visual: 'thermal',
  },
];

export const engineeringScales = [
  ['Electronic', 'Band structure, bonding, charge, and reactivity'],
  ['Atomic', 'Defects, diffusion, ordering, and local chemistry'],
  ['Nano', 'Interfaces, confinement, surface area, and morphology'],
  ['Micro', 'Grains, phases, pores, cracks, and reinforcement'],
  ['Macro', 'Strength, transport, reliability, and degradation'],
  ['System', 'Manufacturing, devices, sustainability, and deployment'],
];
