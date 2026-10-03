// Skills accept a label string or { label: 'Skill name', icon: 'window' }.
// Reorder categories/skills here; use keys from components/ui/Icon.jsx for optional icons.
export const skillCategories = [
  {
    id: 'shopify',
    label: 'Shopify & commerce',
    description: 'Storefronts that go beyond the default.',
    icon: 'bag',
    skills: [
      'Liquid',
      'Online Store 2.0',
      'Dawn theme',
      'Custom sections & blocks',
      'Shopify CLI',
      'AJAX Cart API',
      'Storefront & Admin APIs',
      'GraphQL',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend development',
    description: 'From a design file to the final interaction.',
    icon: 'window',
    skills: [
      'JavaScript (ES6+)',
      'React',
      'HTML & CSS',
      'Vite',
      'Responsive design',
      'Figma to code',
    ],
  },
  {
    id: 'backend',
    label: 'Backend & data',
    description: 'The systems behind the experience.',
    icon: 'layers',
    skills: [
      'Node.js',
      'Express',
      'Python',
      'Flask',
      'REST APIs',
      'JWT authentication',
      'MongoDB',
      'PostgreSQL',
      'MySQL',
    ],
  },
  {
    id: 'tools',
    label: 'Tools & exploration',
    description: 'A practical toolkit. A curious mindset.',
    icon: 'spark',
    skills: ['Git & GitHub', 'Postman', 'Figma', 'OpenAI APIs', 'RAG & vector search', 'n8n'],
  },
];
