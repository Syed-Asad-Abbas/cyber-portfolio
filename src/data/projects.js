import { images } from './images.js';

const shot = (key, alt, caption) => ({ ...images[key], alt, caption });

/** Content order controls previews and previous/next navigation. Empty links stay hidden. */
export const projects = [
  {
    id: 'xiv',
    slug: 'xiv-fashion-store',
    title: 'XIV Fashion Store',
    category: 'Shopify theme development',
    shortDescription: 'An editorial storefront, built for discovery.',
    description:
      'A custom Shopify Online Store 2.0 theme built on Dawn, bringing a fashion-led visual direction to collections, product pages, and the shopping journey.',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    role: 'Shopify theme development',
    engineering: 'Custom sections, dynamic collections, and responsive product layouts.',
    published: true,
    featured: true,
    order: 1,
    status: 'Portfolio project',
    theme: 'stone',
    githubUrl: 'https://github.com/Syed-Asad-Abbas/Fashion-Store/tree/devloper',
    liveUrl: '',
    thumbnail: shot(
      'xiv-hero',
      'XIV fashion storefront with editorial typography and a summer collection',
      'The custom storefront homepage.',
    ),
    images: [
      shot(
        'xiv-collection',
        'XIV product collection with category filters',
        'Collection discovery and product presentation.',
      ),
      shot(
        'xiv-mobile',
        'XIV product grid and storefront content in a narrow layout',
        'A closer look at the collection layout.',
      ),
    ],
    caseStudy: {
      overview:
        'The project brings a distinct fashion identity into Shopify’s theme architecture. It combines brand styling with configurable sections and a responsive shopping interface.',
      problem:
        'A fashion storefront needs space for its visual identity while keeping products and collections easy to find. The work centered on adapting Dawn into a more deliberate browsing experience.',
      objectives: [
        'Translate the visual direction into a responsive Shopify theme.',
        'Support dynamic collections and customizable sections.',
        'Give product discovery a consistent visual language.',
      ],
      implementation: [
        {
          title: 'A custom layer on Dawn',
          text: 'Built on the Dawn framework using Liquid, HTML, CSS, and JavaScript, with custom Online Store 2.0 sections and brand styling.',
        },
        {
          title: 'Collection-led discovery',
          text: 'Configured dynamic collections and refined product detail layouts to carry the storefront’s visual system through the shopping journey.',
        },
      ],
      results: [
        'A custom Online Store 2.0 storefront with reusable theme sections.',
        'Responsive collection and product presentation.',
      ],
    },
  },
  {
    id: 'configurator',
    slug: 'shopify-product-configurator',
    title: 'Product Configurator',
    category: 'Custom Shopify experience',
    shortDescription: 'Complex choices. One clear checkout.',
    description:
      'A multi-step product configuration experience with variant selection, dynamic pricing, and a live order summary connected to Shopify checkout.',
    technologies: ['Liquid', 'JavaScript', 'AJAX API', 'CSS'],
    role: 'Shopify frontend development',
    engineering: 'Variant logic, live totals, and AJAX checkout workflows.',
    published: true,
    featured: false,
    order: 2,
    status: 'Portfolio project',
    theme: 'lavender',
    githubUrl: 'https://github.com/Syed-Asad-Abbas/shopify-Home-Bundle-Builder/tree/devloper',
    liveUrl: '',
    thumbnail: shot(
      'configurator-hero',
      'Security product configurator with cameras, variant controls and a live order summary',
      'Product selection with a live order summary.',
    ),
    images: [
      shot(
        'configurator-plan',
        'Configurator plan selection and updated order summary',
        'Plan selection within the guided flow.',
      ),
      shot(
        'configurator-sensors',
        'Configurator showing sensor options and the configured bundle',
        'Additional products share the same order summary.',
      ),
    ],
    caseStudy: {
      overview:
        'A single-page configurator turns several product decisions into a guided flow. Shoppers can choose products and variants while reviewing their configuration alongside the controls.',
      problem:
        'Configuring a multi-product order introduces interdependent choices. The selected variants, quantities, discounts, and final price need to remain understandable throughout the journey.',
      objectives: [
        'Break customization into manageable steps.',
        'Keep pricing and selected items visible as choices change.',
        'Carry the configured products into Shopify checkout.',
      ],
      implementation: [
        {
          title: 'Guided customization',
          text: 'Developed a multi-step interface with product selection, variant controls, and a live summary panel using Liquid, JavaScript, and CSS.',
        },
        {
          title: 'Pricing and checkout',
          text: 'Implemented dynamic pricing, variant calculation, and discount updates. AJAX workflows pass configured items into the Shopify checkout journey.',
        },
      ],
      results: [
        'A connected flow from product configuration to checkout.',
        'A live summary that reflects selected products and pricing.',
      ],
    },
  },
  {
    id: 'lookbook',
    slug: 'shoppable-lookbook',
    title: 'Shoppable Lookbook',
    category: 'Shopify interactive feature',
    shortDescription: 'From inspiration to the shopping bag.',
    description:
      'An interactive photo gallery that connects editorial imagery to products through hotspots, quick-view details, variant selection, and AJAX cart additions.',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'AJAX Cart'],
    role: 'Interactive storefront development',
    engineering: 'Product hotspots, quick-view modals, and no-reload cart additions.',
    published: true,
    featured: false,
    order: 3,
    status: 'Feature showcase',
    theme: 'sand',
    githubUrl: 'https://github.com/Syed-Asad-Abbas/shopify-practice/tree/Testing-Dawn-Theme',
    liveUrl: '',
    thumbnail: shot(
      'lookbook-hero',
      'Fashion lookbook with a product quick-view modal and color and size selectors',
      'Product quick view inside the lookbook.',
    ),
    images: [
      shot(
        'lookbook-page',
        'Full storefront page with an editorial shoppable photo gallery',
        'The photo gallery in its storefront context.',
      ),
      shot(
        'lookbook-cart',
        'Shopping cart with products selected from the lookbook',
        'The connected cart experience.',
      ),
    ],
    caseStudy: {
      overview:
        'This feature showcase focuses on the shoppable-gallery work described in the XIV project: product discovery that starts with imagery and continues through a quick-view interaction.',
      problem:
        'Editorial photography can inspire a purchase, but shoppers still need a clear path to the relevant product, variant, and cart. The gallery bridges those steps within the browsing experience.',
      objectives: [
        'Connect gallery images to relevant products.',
        'Expose color and size choices through quick view.',
        'Add selected variants to the cart without a page reload.',
      ],
      implementation: [
        {
          title: 'Image to product',
          text: 'Interactive hotspots connect the photo gallery to product quick-view modals, keeping product details close to the visual that prompted interest.',
        },
        {
          title: 'Variant to cart',
          text: 'Variant selection and AJAX cart additions support a continuous shopping flow from the gallery.',
        },
      ],
      results: [
        'A shoppable gallery with product-level interactions.',
        'Variant selection and cart additions within the browsing flow.',
      ],
    },
  },
  {
    id: 'phishing',
    slug: 'multimodal-phishing-detection',
    title: 'Multimodal Phishing Detection',
    category: 'Full-stack · Machine learning',
    shortDescription: 'Making web threats easier to understand.',
    description:
      'A full-stack web analysis platform that connects a React interface with Express and Flask services for URL and DOM analysis and machine learning classification.',
    technologies: ['React', 'Node.js', 'Flask', 'Python', 'LightGBM'],
    role: 'Full-stack development & ML integration',
    engineering: 'React dashboards, analysis APIs, and machine learning integration.',
    published: true,
    featured: false,
    order: 5,
    status: 'Portfolio project',
    theme: 'ink',
    githubUrl: 'https://github.com/Syed-Asad-Abbas/Multimodal-Phishing-Detection-System',
    liveUrl: '',
    thumbnail: shot(
      'phishing-hero',
      'Phishing detection platform homepage introducing explainable AI',
      'The platform’s public-facing interface.',
    ),
    images: [
      shot(
        'phishing-scan',
        'URL analysis screen with a scan result and classification indicators',
        'The URL analysis and results interface.',
      ),
      shot(
        'phishing-dashboard',
        'Admin analytics dashboard with activity and model summary panels',
        'The administrative analytics interface.',
      ),
      shot(
        'phishing-architecture',
        'Diagram showing the platform’s multimodal analysis architecture',
        'The supplied system architecture overview.',
      ),
    ],
    caseStudy: {
      overview:
        'Listed in the résumé as the Multimodal Web Intelligence & Analytics Platform, this project combines a responsive web application with automated extraction and machine learning classification services.',
      problem:
        'Web analysis spans multiple inputs and processing steps. The application brings those services into an interface where a user can submit a URL and review the returned analysis.',
      objectives: [
        'Connect a React frontend to Express and Flask services.',
        'Process URL and DOM payloads through extraction pipelines.',
        'Present classification outputs through an understandable web interface.',
      ],
      implementation: [
        {
          title: 'Frontend and service integration',
          text: 'Developed a responsive React frontend backed by an Express/Flask microservice architecture and REST APIs.',
        },
        {
          title: 'Analysis pipeline',
          text: 'Integrated heuristic extraction and machine learning classification endpoints. The project stack includes Python, ResNet-50, and LightGBM.',
        },
      ],
      results: [
        'An integrated web interface for submitting and reviewing analysis.',
        'Connected extraction and classification services with user and admin views.',
      ],
    },
  },
  {
    id: 'luminara',
    slug: 'luminara',
    title: 'Luminara',
    category: 'Full-stack · AI commerce',
    shortDescription: 'A more personal way to discover skincare.',
    description:
      'A skincare storefront demo combining product discovery, a guided preference quiz, and an AI shopping concierge with a connected cart interface.',
    technologies: ['Next.js', 'Express', 'MongoDB Atlas', 'OpenAI APIs', 'RAG'],
    role: 'Full-stack development & AI integration',
    engineering: 'Semantic product search, conversational recommendations, and cart interactions.',
    published: true,
    featured: true,
    order: 4,
    status: 'Portfolio demo',
    theme: 'sand',
    githubUrl: 'https://github.com/Syed-Asad-Abbas/Luminara',
    liveUrl: 'https://luminara1.vercel.app/',
    thumbnail: shot(
      'luminara-hero',
      'Luminara skincare storefront homepage with its AI concierge launcher',
      'The Luminara storefront introduction.',
    ),
    images: [
      shot(
        'luminara-collection',
        'Luminara product collection with skincare bundles, cleansers and moisturizers',
        'Product discovery through the collection.',
      ),
      shot(
        'luminara-product',
        'Luminara cleanser detail view with image gallery and cart actions',
        'A closer look at product details.',
      ),
      shot(
        'luminara-quiz',
        'Luminara AI concierge presenting the first question of a preference quiz',
        'A guided starting point for the conversation.',
      ),
      shot(
        'luminara-concierge',
        'Luminara AI concierge displaying a conversation and product recommendations',
        'Conversational product discovery.',
      ),
      shot(
        'luminara-cart',
        'Luminara cart drawer with quantity controls and an order summary',
        'A cart drawer alongside the storefront.',
      ),
      shot(
        'luminara-checkout',
        'Luminara demo checkout interface with order summary and shipping fields',
        'The checkout interface in the portfolio demo.',
      ),
    ],
    caseStudy: {
      overview:
        'Luminara is the skincare storefront for my RAG-powered e-commerce concierge project. The supplied screens show a product catalog, detailed product views, a guided quiz, chat recommendations, and cart and checkout interfaces.',
      problem:
        'Product discovery can begin with a shopper’s preferences rather than an exact product name. This project explores how a conversational interface can connect those preferences to a browsable catalog.',
      objectives: [
        'Pair an editorial storefront with conversational product discovery.',
        'Use catalog retrieval to support relevant recommendations.',
        'Keep recommended products connected to the cart experience.',
      ],
      implementation: [
        {
          title: 'Storefront and shopping flow',
          text: 'A Next.js interface presents the catalog, product details, and shopping controls. The screenshot gallery follows the experience from browsing to the demo checkout interface.',
        },
        {
          title: 'Retrieval and conversation',
          text: 'An Express service connects MongoDB Atlas retrieval with LLM tool calling. The project documentation describes semantic search with a keyword fallback and product cards inside the conversation.',
        },
        {
          title: 'Guided discovery',
          text: 'The concierge includes a preference quiz and a conversational recommendation view, giving shoppers another entry point into the product catalog.',
        },
      ],
      results: [
        'A portfolio demo spanning storefront presentation and an AI-assisted discovery flow.',
        'Product recommendations presented alongside cart interactions.',
      ],
    },
  },
];
