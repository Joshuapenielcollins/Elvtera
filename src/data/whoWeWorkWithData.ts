export interface BusinessSector {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  challenge: string;
  howElvteraHelps: string[];
  fitCriteria: string[];
  sampleIntentSignals: string[];
  targetGeos: string[];
  keyPersonas: string[];
  geoStrategy: string;
  recommendedSolutionSlug: string;
  recommendedSolutionTitle: string;
}

export const businessSectors: BusinessSector[] = [
  {
    slug: "agencies",
    title: "Agencies",
    tagline: "Marketing, creative, and performance agencies",
    summary:
      "For agencies needing predictable high-ticket retainer clients instead of relying on unpredictable word-of-mouth.",
    challenge:
      "Agencies frequently experience feast-or-famine cycles. Founders get tied up in client delivery and outreach stops, causing sudden pipeline drought.",
    howElvteraHelps: [
      "We source companies hiring marketing staff or increasing marketing budgets.",
      "Outbound multi-channel sequences position your agency as an expert partner.",
      "We book discovery calls directly with VP/CMO level decision-makers.",
    ],
    fitCriteria: [
      "Retainer contracts of $3,000+/month",
      "Proven case results in at least one industry category",
      "Capacity to onboard at least 2 to 3 new retainer clients per quarter",
    ],
    sampleIntentSignals: [
      "Company hiring Head of Growth or Paid Media Manager",
      "Recent brand repositioning or website overhaul announcement",
    ],
    targetGeos: [
      "United States (New York, San Francisco, Austin, Chicago)",
      "United Kingdom (London, Manchester, Bristol)",
      "Canada (Toronto, Vancouver, Montreal)",
      "Australia (Sydney, Melbourne)",
    ],
    keyPersonas: [
      "Chief Marketing Officer (CMO)",
      "VP of Growth & Acquisition",
      "Director of Brand Marketing",
      "Head of Digital Strategy",
    ],
    geoStrategy:
      "Timezone-aligned multi-channel cadences targeting rapid-growth consumer and B2B brands across North American and European creative hubs.",
    recommendedSolutionSlug: "/solutions/client-acquisition",
    recommendedSolutionTitle: "Client Acquisition (Flagship)",
  },
  {
    slug: "it-services",
    title: "IT Services",
    tagline: "Managed services, system integrators, and infrastructure providers",
    summary:
      "For IT firms that provide mission-critical cloud, network, and infrastructure support to mid-market companies.",
    challenge:
      "IT buyers rarely respond to generic cold pitches unless they have an active migration, security compliance deadline, or provider dissatisfaction.",
    howElvteraHelps: [
      "We track technology stack shifts and vendor transition indicators.",
      "Outreach focuses on business continuity, compliance, and reduced overhead.",
      "We screen for companies with at least 50 to 500 workstations or cloud nodes.",
    ],
    fitCriteria: [
      "Annual contract values of $10,000+",
      "Established managed services offering with SLA guarantees",
      "Sales engineer or technical closer ready for discovery meetings",
    ],
    sampleIntentSignals: [
      "Company opening new regional facilities or data center migration",
      "Hiring for IT Security, Compliance, or DevOps leadership",
    ],
    targetGeos: [
      "United States (East Coast, Silicon Valley, Texas, Mid-Atlantic)",
      "United Kingdom & Ireland (London, Dublin, Edinburgh)",
      "DACH Region & Nordics (Frankfurt, Munich, Stockholm, Zurich)",
      "UAE & GCC (Dubai, Abu Dhabi tech corridors)",
    ],
    keyPersonas: [
      "Chief Information Officer (CIO)",
      "Chief Technology Officer (CTO)",
      "VP of Information Technology",
      "Head of Infrastructure & Security (CISO)",
    ],
    geoStrategy:
      "Localized compliance messaging addressing regional data sovereignty (GDPR, SOC2, HIPAA) and corporate digital transformation benchmarks.",
    recommendedSolutionSlug: "/solutions/client-acquisition",
    recommendedSolutionTitle: "Client Acquisition (Flagship)",
  },
  {
    slug: "consultancies",
    title: "Consultancies",
    tagline: "Management, operational, and strategy consultancies",
    summary:
      "For advisory firms solving complex organizational, operational, and financial problems for enterprise executives.",
    challenge:
      "High fees make broad outbound inefficient. You must speak directly to executive leadership when a specific strategic trigger occurs.",
    howElvteraHelps: [
      "We monitor executive leadership turnover and restructuring filings.",
      "Direct, non-salesy executive communications written for C-suite peers.",
      "Rigorous qualification ensures meetings only happen with budget owners.",
    ],
    fitCriteria: [
      "Advisory engagements of $15,000+",
      "Clear specialization in operational, financial, or strategic improvement",
      "Executive partner available to conduct discovery conversations",
    ],
    sampleIntentSignals: [
      "Newly appointed CEO, COO, or CFO within first 90 days",
      "Merger, acquisition, or capital reorganization announcement",
    ],
    targetGeos: [
      "United States (New York, Boston, Washington D.C., Chicago)",
      "United Kingdom (City of London, Canary Wharf)",
      "Western Europe (Paris, Frankfurt, Amsterdam, Geneva)",
      "Middle East (Riyadh, Dubai financial centers)",
    ],
    keyPersonas: [
      "Chief Executive Officer (CEO)",
      "Chief Operating Officer (COO)",
      "Managing Director / General Partner",
      "VP of Corporate Strategy",
    ],
    geoStrategy:
      "Sophisticated peer-to-peer correspondence timed around fiscal year planning, restructuring filings, and boardroom leadership transitions.",
    recommendedSolutionSlug: "/solutions/client-acquisition",
    recommendedSolutionTitle: "Client Acquisition (Flagship)",
  },
  {
    slug: "recruitment",
    title: "Recruitment & Staffing",
    tagline: "Executive search, specialized staffing, and talent firms",
    summary:
      "For recruitment agencies needing direct relationships with hiring managers before requisitions get posted publicly.",
    challenge:
      "Public job postings attract hundreds of recruiters simultaneously. Outbound must identify companies before the search mandate becomes crowded.",
    howElvteraHelps: [
      "We track team growth patterns, department funding, and hard-to-fill role notices.",
      "Direct outreach positions your firm as having vetted talent immediately available.",
      "We book calls directly with Department VPs and Talent Directors.",
    ],
    fitCriteria: [
      "Average placement fee of $8,000+",
      "Clear niche in engineering, executive, finance, or healthcare talent",
      "Ability to source candidates promptly once client signs terms",
    ],
    sampleIntentSignals: [
      "Company opening new division or securing venture capital",
      "Roles unfilled on company careers page for greater than 60 days",
    ],
    targetGeos: [
      "United States (Major Metropolitan Hiring Centers)",
      "United Kingdom & Europe (London, Berlin, Dublin)",
      "Singapore & APAC Regional Headquarters",
    ],
    keyPersonas: [
      "Chief People Officer (CPO)",
      "VP of Human Resources",
      "Head of Talent Acquisition",
      "Department VP (Engineering / Product / Sales)",
    ],
    geoStrategy:
      "Monitoring labor market velocity across regional tech and commercial hubs to capture exclusive talent search mandates.",
    recommendedSolutionSlug: "/solutions/client-acquisition",
    recommendedSolutionTitle: "Client Acquisition (Flagship)",
  },
  {
    slug: "saas",
    title: "B2B SaaS",
    tagline: "Enterprise software, vertical platforms, and cloud products",
    summary:
      "For high-ticket SaaS companies that need qualified product demos with decision-makers, not tire-kickers.",
    challenge:
      "Cold outbound for software is saturated with template emails. Prospects ignore generic feature lists unless the pitch solves a painful current bottleneck.",
    howElvteraHelps: [
      "We track competitor tool installations, renewal windows, and technology shifts.",
      "Outreach is customized around specific workflow friction points.",
      "We screen for seat count, budget authorization, and purchase timeframe.",
    ],
    fitCriteria: [
      "Annual recurring revenue (ARR) per customer of $10,000+",
      "Sales-assisted or enterprise demo closing model",
      "Internal Account Executive ready to run structured demos",
    ],
    sampleIntentSignals: [
      "Company hiring for roles associated with your software use-case",
      "Executive quote in industry press mentioning operational bottleneck",
    ],
    targetGeos: [
      "United States (Silicon Valley, Austin, New York, Seattle, Boston)",
      "Europe (London, Amsterdam, Berlin, Paris)",
      "Canada (Toronto, Waterloo tech corridor)",
    ],
    keyPersonas: [
      "VP of Sales / Chief Revenue Officer (CRO)",
      "Head of Operations / RevOps",
      "VP of Product / Engineering",
      "Chief Information Security Officer (CISO)",
    ],
    geoStrategy:
      "Targeted account-based outreach synchronized with corporate fiscal cycles, funding events, and software vendor renewal periods.",
    recommendedSolutionSlug: "/solutions/client-acquisition",
    recommendedSolutionTitle: "Client Acquisition (Flagship)",
  },
  {
    slug: "training-companies",
    title: "Corporate Training & Education",
    tagline: "Executive coaching, leadership programs, and team upskilling",
    summary:
      "For commercial education providers delivering enterprise training, leadership cohorts, and specialized technical certifications.",
    challenge:
      "Corporate training budgets are distributed across different department heads. Outreach must reach the specific leader feeling productivity or skill gaps.",
    howElvteraHelps: [
      "We monitor rapid headcount expansion where team training is urgently needed.",
      "Sequences speak directly to retention, performance metrics, and manager readiness.",
      "Calls are scheduled with CLOs, HR Directors, and operational division heads.",
    ],
    fitCriteria: [
      "Cohort engagement values of $10,000+",
      "Documented curriculum and demonstrated enterprise client feedback",
      "Program delivery capacity for cohorts of 10 to 100+ participants",
    ],
    sampleIntentSignals: [
      "Company promoted 10+ first-time managers in the last quarter",
      "Corporate restructuring or digital transformation initiative announced",
    ],
    targetGeos: [
      "United States (National Enterprise Accounts)",
      "United Kingdom & Western Europe",
      "Australia & New Zealand",
    ],
    keyPersonas: [
      "Chief Learning Officer (CLO)",
      "VP of Talent Development",
      "Head of People & Culture",
      "VP of Sales Enablement",
    ],
    geoStrategy:
      "Aligning campaigns with annual workforce development budget cycles and Q1/Q3 corporate team kickoff preparation windows.",
    recommendedSolutionSlug: "/solutions/client-acquisition",
    recommendedSolutionTitle: "Client Acquisition (Flagship)",
  },
  {
    slug: "manufacturers",
    title: "Contract Manufacturers & Industrial",
    tagline: "Custom fabrication, precision components, and contract production",
    summary:
      "For industrial companies seeking steady B2B supply agreements with original equipment manufacturers (OEMs).",
    challenge:
      "Industrial buyers value reliability and compliance over flashy marketing. Outreach must demonstrate technical capability and certifications immediately.",
    howElvteraHelps: [
      "We identify OEMs experiencing supply chain disruption or expanding product lines.",
      "Outreach highlights capacity, quality certifications, and delivery timetables.",
      "We book technical discovery calls with procurement and engineering directors.",
    ],
    fitCriteria: [
      "Annual supply contract values of $25,000+",
      "Established production capacity and standard quality certifications",
      "Technical sales engineer available for specification reviews",
    ],
    sampleIntentSignals: [
      "OEM announcing new product line or manufacturing facility",
      "Supplier reshoring or regional diversification initiative reported",
    ],
    targetGeos: [
      "United States (Midwest, Texas, Southeast Industrial Corridors)",
      "Germany, Austria, Switzerland (DACH Industrial Base)",
      "United Kingdom Industrial Regions",
    ],
    keyPersonas: [
      "Director of Procurement & Supply Chain",
      "Chief Operating Officer (COO)",
      "VP of Engineering",
      "Plant General Manager",
    ],
    geoStrategy:
      "Regionalized industrial messaging focusing on domestic supply reliability, reshoring incentives, and delivery turnaround times.",
    recommendedSolutionSlug: "/solutions/client-acquisition",
    recommendedSolutionTitle: "Client Acquisition (Flagship)",
  },
  {
    slug: "finance-firms",
    title: "Financial Services & Advisory",
    tagline: "Wealth management, corporate finance, and commercial lending",
    summary:
      "For specialized commercial finance firms looking to connect with business owners seeking capital, debt facilities, or M&A guidance.",
    challenge:
      "Financial decisions require high trust and strict regulatory compliance. Outbound messaging must be conservative, authoritative, and perfectly timed.",
    howElvteraHelps: [
      "We detect liquidity events, founder succession indicators, and debt maturities.",
      "Discreet, compliance-approved communication tailored to high-net-worth operators.",
      "Qualified discovery meetings placed with principals and partners.",
    ],
    fitCriteria: [
      "Deal advisory fees or transaction values of $20,000+",
      "Licensed and established financial advisory infrastructure",
      "Senior partner available for confidential strategy discussions",
    ],
    sampleIntentSignals: [
      "Company owner approaching retirement with no internal successor",
      "Filing indicating debt maturity or capital refinancing requirement",
    ],
    targetGeos: [
      "United States (New York, Charlotte, Chicago, Dallas, Miami)",
      "United Kingdom (City of London Financial Hub)",
      "Switzerland (Zurich, Geneva)",
      "UAE (DIFC, ADGM financial districts)",
    ],
    keyPersonas: [
      "Chief Financial Officer (CFO)",
      "Managing Partner / Founder",
      "Director of Treasury & Capital Markets",
      "Majority Business Owner",
    ],
    geoStrategy:
      "Strictly compliant, confidential executive messaging mapped to regional regulatory standards (SEC, FINRA, FCA) and capital allocation windows.",
    recommendedSolutionSlug: "/solutions/client-acquisition",
    recommendedSolutionTitle: "Client Acquisition (Flagship)",
  },
  {
    slug: "healthcare",
    title: "Healthcare Networks & MedTech",
    tagline: "Clinic networks, medical equipment, and healthcare service providers",
    summary:
      "For healthcare B2B providers offering clinic management, clinical staffing, medical devices, or specialized patient infrastructure.",
    challenge:
      "Healthcare executives are insulated by administrative gatekeepers and procurement committees. Outreach requires precise title mapping and clinical relevance.",
    howElvteraHelps: [
      "We track clinic network acquisitions, hospital expansions, and regulatory shifts.",
      "Outreach addresses patient volume, operational efficiency, and clinician overhead.",
      "We book meetings directly with practice administrators and medical directors.",
    ],
    fitCriteria: [
      "Engagement contract values of $15,000+",
      "Regulatory compliant healthcare offering (HIPAA, NHS, or local health authority)",
      "Clinical sales specialist available for discovery presentations",
    ],
    sampleIntentSignals: [
      "Healthcare network adding new outpatient facilities or specialty clinics",
      "Hiring Clinical Director or Practice Administrator",
    ],
    targetGeos: [
      "United States (Regional Hospital Networks & Healthcare Groups)",
      "United Kingdom (Private Clinic Networks & Trust Healthcare)",
      "Canada (Provincial Health Corridors)",
    ],
    keyPersonas: [
      "Chief Medical Officer (CMO)",
      "Practice Administrator / Managing Director",
      "VP of Clinical Operations",
      "Director of Procurement & Medical Supplies",
    ],
    geoStrategy:
      "Compliant, clinical-first messaging addressing regional healthcare provider shortages, patient throughput, and facility expansion.",
    recommendedSolutionSlug: "/solutions/client-acquisition",
    recommendedSolutionTitle: "Client Acquisition (Flagship)",
  },
  {
    slug: "e-commerce",
    title: "B2B E-commerce & Wholesale",
    tagline: "Wholesale brands, commercial suppliers, and distribution platforms",
    summary:
      "For brands and commercial suppliers seeking long-term distribution and stocking contracts with retail chains and corporate accounts.",
    challenge:
      "Wholesale buyers receive hundreds of product sheets. Outbound must highlight margin structure, inventory reliability, and turnover metrics immediately.",
    howElvteraHelps: [
      "We track retail store openings, catalog expansion, and new merchant onboarding.",
      "Outbound communicates margins, MOQ flexibility, and proven sell-through data.",
      "We book calls directly with Category Managers and Corporate Buyers.",
    ],
    fitCriteria: [
      "Minimum order value (MOV) of $5,000+ per purchase order",
      "Established supply chain and reliable inventory fulfillment capability",
      "Commercial sales manager ready to present wholesale terms",
    ],
    sampleIntentSignals: [
      "Retailer expanding into relevant product category or opening new stores",
      "E-commerce merchant hiring Category Director or Wholesale Manager",
    ],
    targetGeos: [
      "United States (National Retail & Regional Distribution Hubs)",
      "United Kingdom & European Retail Corridors",
      "Australia (East Coast Commercial Centers)",
    ],
    keyPersonas: [
      "Senior Category Buyer",
      "Head of Wholesale & Merchandising",
      "VP of Procurement & Merchandising",
      "Director of Retail Partnerships",
    ],
    geoStrategy:
      "Targeting regional retail buyers and corporate wholesale accounts timed to seasonal buying seasons and catalog planning cycles.",
    recommendedSolutionSlug: "/solutions/client-acquisition",
    recommendedSolutionTitle: "Client Acquisition (Flagship)",
  },
];
