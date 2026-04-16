export interface Program {
  id: string;
  label: string;
  shortLabel: string;
  icon: string; // lucide icon name
  color: string;
  bg: string;
  description: string;
  longDescription: string;
  bullets: string[];
  tags: string[];
  interestOptions: string[];
  forWho: string;
  ctaLabel: string;
  requiresCV: boolean;
  requiresWebsite: boolean;
  requiresCompany: boolean;
  requiresInvestmentRange: boolean;
  requiresSectors: boolean;
  steps: { title: string; desc: string }[];
}

export const PROGRAMS: Program[] = [
  {
    id: 'partner',
    label: 'Search Partner Matching',
    shortLabel: 'Search Partner',
    icon: 'Handshake',
    color: '#3B82F6',
    bg: '#EFF6FF',
    description: 'Find a search partner, co-searcher, or collaborator to build an acquisition together.',
    longDescription: 'Looking for someone to search alongside? Whether you want a co-searcher for a traditional two-person search fund, a collaborator for a self-funded search, or a project partner for a specific deal, this program connects you with serious, aligned individuals.',
    bullets: ['Co-searcher for traditional search funds', 'Self-funded search partners', 'Project-based collaborators', 'Long-term acquisition teammates', 'Curated introductions based on fit and goals'],
    tags: ['Co-Searcher', 'Collaborator', 'Self-Funded', 'Traditional'],
    interestOptions: ['Traditional Search Fund Partner', 'Self-Funded Search Partner', 'Project Collaborator', 'Acquisition Teammate', 'Industry-Specific Partner', 'Geographic-Specific Partner'],
    forWho: 'Aspiring searchers, current searchers, and anyone looking to partner on an ETA journey.',
    ctaLabel: 'Find a Search Partner',
    requiresCV: false,
    requiresWebsite: false,
    requiresCompany: false,
    requiresInvestmentRange: false,
    requiresSectors: true,
    steps: [
      { title: 'Apply', desc: 'Tell us about your background, search thesis, timeline, and what you\'re looking for in a partner.' },
      { title: 'We review', desc: 'The team assesses seriousness, alignment, and complementary skills between applicants.' },
      { title: 'Curated introductions', desc: 'Where there is strong potential fit, we facilitate warm introductions with context for both sides.' },
    ],
  },
  {
    id: 'investor-searcher',
    label: 'Investor ↔ Searcher Matching',
    shortLabel: 'Investor ↔ Searcher',
    icon: 'TrendingUp',
    color: '#10B981',
    bg: '#ECFDF5',
    description: 'Connect searchers with investors, and investors with high-quality searchers to back.',
    longDescription: 'The investor–searcher relationship is the backbone of ETA. This program helps searchers find aligned capital partners, and helps investors discover serious, well-prepared searchers to back — whether for traditional search funds, self-funded searches, or independent sponsor deals.',
    bullets: ['Searchers seeking initial capital commitments', 'Investors looking for searchers to back', 'Follow-on capital for acquisition financing', 'Independent sponsor deal-by-deal introductions', 'Matched on thesis, geography, sector, and deal size'],
    tags: ['Searcher → Investor', 'Investor → Searcher', 'Capital', 'Search Fund'],
    interestOptions: ['I\'m a searcher looking for investors', 'I\'m an investor looking for searchers to back', 'Independent sponsor seeking deal-by-deal capital', 'Investor seeking co-investment opportunities', 'Follow-on capital for a specific acquisition'],
    forWho: 'Active and aspiring searchers, search fund investors, family offices, and independent sponsors.',
    ctaLabel: 'Connect with Investors or Searchers',
    requiresCV: false,
    requiresWebsite: false,
    requiresCompany: false,
    requiresInvestmentRange: true,
    requiresSectors: true,
    steps: [
      { title: 'Apply', desc: 'Tell us whether you\'re a searcher or investor, your thesis, preferred sectors, deal size, and geography.' },
      { title: 'We review and qualify', desc: 'We assess seriousness, track record, and alignment to ensure high-quality introductions on both sides.' },
      { title: 'Warm introductions', desc: 'Matched searchers and investors receive introductions with full context — background, thesis, and mutual fit.' },
    ],
  },
  {
    id: 'advisor-searcher',
    label: 'Advisor ↔ Searcher Matching',
    shortLabel: 'Advisor ↔ Searcher',
    icon: 'Compass',
    color: '#8B5CF6',
    bg: '#F5F3FF',
    description: 'Connect searchers with experienced advisors, mentors, and board-ready professionals.',
    longDescription: 'Every searcher benefits from experienced guidance. This program matches searchers with deal advisors, board members, industry experts, and seasoned ETA practitioners who can help with everything from deal sourcing to post-acquisition operations.',
    bullets: ['Deal advisors for sourcing and diligence', 'Board members and advisory board candidates', 'Industry-specific domain experts', 'Post-acquisition operational advisors', 'Experienced ETA practitioners as mentors'],
    tags: ['Deal Advisor', 'Board Member', 'Mentor', 'Domain Expert'],
    interestOptions: ['I\'m a searcher looking for advisors', 'I\'m an advisor looking to support searchers', 'Board member opportunity', 'Deal sourcing advisor', 'Due diligence advisor', 'Post-acquisition advisor', 'Industry-specific expertise'],
    forWho: 'Searchers at any stage, experienced professionals looking to advise, and domain experts interested in ETA.',
    ctaLabel: 'Find an Advisor or Searcher',
    requiresCV: false,
    requiresWebsite: false,
    requiresCompany: false,
    requiresInvestmentRange: false,
    requiresSectors: true,
    steps: [
      { title: 'Apply', desc: 'Tell us your background, what kind of advisory support you need (or can offer), and your areas of expertise.' },
      { title: 'We match on expertise', desc: 'The team reviews for complementary skills, relevant experience, and genuine alignment.' },
      { title: 'Facilitated introductions', desc: 'Matched advisors and searchers receive warm introductions with context on both sides.' },
    ],
  },
  {
    id: 'operator',
    label: 'Operator Matching',
    shortLabel: 'Operator',
    icon: 'Settings',
    color: '#F59E0B',
    bg: '#FFFBEB',
    description: 'Match operators with acquired companies, and searchers/investors with operational talent.',
    longDescription: 'Post-acquisition success depends on great operators. This program connects experienced operators looking to run or join acquired businesses with searchers and investors who need operational talent — whether as a CEO, COO, general manager, or operating partner.',
    bullets: ['Operators seeking acquired companies to run', 'Searchers/investors seeking operating partners', 'CEO and GM placements for portfolio companies', 'COO and operational leadership roles', 'Industry-specific operational expertise'],
    tags: ['CEO', 'COO', 'Operating Partner', 'General Manager'],
    interestOptions: ['I\'m an operator looking for a company to run', 'I\'m a searcher looking for an operator', 'I\'m an investor looking for operating talent', 'Operating partner for a portfolio company', 'Industry-specific operator', 'Interim management'],
    forWho: 'Experienced operators, searchers post-acquisition, investors with portfolio companies, and professionals looking to transition into operations.',
    ctaLabel: 'Find or Become an Operator',
    requiresCV: true,
    requiresWebsite: false,
    requiresCompany: false,
    requiresInvestmentRange: false,
    requiresSectors: true,
    steps: [
      { title: 'Apply', desc: 'Tell us about your operational experience, preferred industries, and what kind of opportunity you\'re looking for (or offering).' },
      { title: 'We assess fit', desc: 'The team reviews for relevant operational experience, leadership track record, and alignment with available opportunities.' },
      { title: 'Targeted introductions', desc: 'Matched operators and companies receive introductions with detailed context on both sides.' },
    ],
  },
  {
    id: 'mentor',
    label: 'Mentor Matching',
    shortLabel: 'Mentor',
    icon: 'GraduationCap',
    color: '#EC4899',
    bg: '#FDF2F8',
    description: 'Pair aspiring searchers and newcomers with experienced ETA practitioners for guidance.',
    longDescription: 'New to ETA? This program pairs aspiring searchers, students, and early-career professionals with experienced practitioners who have been through the search fund journey — as searchers, investors, operators, or advisors.',
    bullets: ['1-on-1 mentorship from ETA practitioners', 'Guidance on search fund formation', 'Career advice for ETA-adjacent roles', 'Industry and deal insights', 'Long-term mentoring relationships'],
    tags: ['Mentee', 'Mentor', '1-on-1', 'Guidance'],
    interestOptions: ['I\'m looking for a mentor', 'I\'m willing to mentor', 'Career guidance in ETA', 'Search fund formation advice', 'Deal sourcing mentorship', 'Post-acquisition mentorship'],
    forWho: 'Students, aspiring searchers, and newcomers to ETA seeking guidance from experienced practitioners.',
    ctaLabel: 'Find a Mentor',
    requiresCV: false,
    requiresWebsite: false,
    requiresCompany: false,
    requiresInvestmentRange: false,
    requiresSectors: false,
    steps: [
      { title: 'Apply', desc: 'Tell us where you are in your ETA journey, what guidance you need (or can offer), and your areas of interest.' },
      { title: 'We pair thoughtfully', desc: 'The team matches based on experience level, interests, and what each person can offer or learn.' },
      { title: 'Introduction and kickoff', desc: 'Matched mentors and mentees receive an introduction with suggested conversation starters and structure.' },
    ],
  },
  {
    id: 'coinvestor',
    label: 'Co-Investor Matching',
    shortLabel: 'Co-Investor',
    icon: 'Users',
    color: '#06B6D4',
    bg: '#ECFEFF',
    description: 'Connect investors seeking co-investment partners for ETA deals.',
    longDescription: 'Many ETA deals require multiple investors. This program connects investors looking to co-invest with other aligned investors — whether for initial search fund commitments, acquisition financing, or follow-on capital.',
    bullets: ['Co-investment in search fund commitments', 'Syndication for acquisition financing', 'Follow-on capital partnerships', 'Deal-by-deal co-investment', 'Aligned on thesis, sector, and deal size'],
    tags: ['Co-Invest', 'Syndicate', 'Capital', 'Deal'],
    interestOptions: ['Search fund co-investment', 'Acquisition financing syndication', 'Follow-on capital partnership', 'Deal-by-deal co-investment', 'Family office partnerships', 'Institutional co-investment'],
    forWho: 'Search fund investors, family offices, institutional investors, and independent sponsors.',
    ctaLabel: 'Find a Co-Investor',
    requiresCV: false,
    requiresWebsite: false,
    requiresCompany: true,
    requiresInvestmentRange: true,
    requiresSectors: true,
    steps: [
      { title: 'Apply', desc: 'Tell us about your investment thesis, preferred deal sizes, sectors, and what kind of co-investment partner you\'re seeking.' },
      { title: 'We qualify and match', desc: 'The team reviews for investment track record, thesis alignment, and deal-size compatibility.' },
      { title: 'Investor introductions', desc: 'Matched investors receive introductions with full context on investment approach and thesis.' },
    ],
  },
  {
    id: 'internship',
    label: 'Internship Matching',
    shortLabel: 'Internship',
    icon: 'Briefcase',
    color: '#6366F1',
    bg: '#EEF2FF',
    description: 'Connect students and early-career talent with ETA internships and roles.',
    longDescription: 'This program matches students and early-career professionals with ETA-related internships across search funds, acquired businesses, investors, advisory firms, and ETA ecosystem companies.',
    bullets: ['Search fund internships', 'Deal sourcing and diligence roles', 'Portfolio and operator internships', 'ETA ecosystem opportunities', 'Curated candidate introductions'],
    tags: ['For Candidates', 'For Firms', 'For Recruiters'],
    interestOptions: ['Search Fund Internship', 'Deal Sourcing / Diligence', 'Portfolio Operations', 'ETA Ecosystem Role', 'Advisory Firm', 'Other'],
    forWho: 'Students, recent graduates, and early-career professionals interested in ETA.',
    ctaLabel: 'Apply for an Internship',
    requiresCV: true,
    requiresWebsite: false,
    requiresCompany: false,
    requiresInvestmentRange: false,
    requiresSectors: true,
    steps: [
      { title: 'Apply', desc: 'Submit your CV, background, and preferred role types.' },
      { title: 'We review for fit', desc: 'The team reviews candidates and matches with available opportunities.' },
      { title: 'We connect', desc: 'Where there is alignment, we facilitate introductions between candidates and firms.' },
    ],
  },
  {
    id: 'service-provider',
    label: 'Service Provider Matching',
    shortLabel: 'Service Provider',
    icon: 'Scale',
    color: '#64748B',
    bg: '#F8FAFC',
    description: 'Connect lawyers, accountants, M&A advisors, and other service providers with the ETA community.',
    longDescription: 'ETA deals require specialist professional services — from M&A lawyers and tax advisors to due diligence providers and lenders. This program connects vetted service providers with searchers, investors, and operators who need their expertise.',
    bullets: ['M&A and corporate lawyers', 'Tax and accounting advisors', 'Due diligence providers', 'Lenders and debt providers', 'Insurance and compliance specialists'],
    tags: ['Legal', 'Accounting', 'M&A Advisory', 'Lending', 'Insurance'],
    interestOptions: ['M&A / Corporate Law', 'Tax Advisory', 'Accounting / Audit', 'Due Diligence Provider', 'Lending / Debt', 'Insurance', 'Business Brokers', 'Valuation Services', 'Other Professional Services'],
    forWho: 'Professional service providers with ETA experience, and searchers/investors seeking specialist support.',
    ctaLabel: 'Join as a Service Provider',
    requiresCV: false,
    requiresWebsite: true,
    requiresCompany: true,
    requiresInvestmentRange: false,
    requiresSectors: true,
    steps: [
      { title: 'Apply', desc: 'Tell us about your firm, areas of expertise, ETA experience, and the types of clients you serve.' },
      { title: 'We vet and qualify', desc: 'The team reviews for relevant ETA experience, reputation, and quality of service.' },
      { title: 'Listed and matched', desc: 'Qualified providers are matched with community members seeking their specific expertise.' },
    ],
  },
  {
    id: 'opportunity',
    label: 'Submit an Opportunity',
    shortLabel: 'Opportunity',
    icon: 'Building2',
    color: '#059669',
    bg: '#ECFDF5',
    description: 'Submit a role, internship, or talent need to recruit from the ETA community.',
    longDescription: 'If you are a searcher, investor, operator, acquired company, or ETA ecosystem firm looking to recruit talented students or community members, submit your opportunity here.',
    bullets: ['Internship and project roles', 'Full-time positions', 'Advisory and board roles', 'Operating roles at acquired companies', 'ETA ecosystem positions'],
    tags: ['Firms', 'Recruiters', 'Searchers'],
    interestOptions: ['Internship', 'Full-time Role', 'Project-based Work', 'Advisory / Board Role', 'Operating Role', 'Other'],
    forWho: 'Searchers, investors, operators, acquired companies, and ETA ecosystem firms.',
    ctaLabel: 'Submit an Opportunity',
    requiresCV: false,
    requiresWebsite: true,
    requiresCompany: true,
    requiresInvestmentRange: false,
    requiresSectors: true,
    steps: [
      { title: 'Submit', desc: 'Provide details about your company, the role, and what you\'re looking for in a candidate.' },
      { title: 'We review', desc: 'The team reviews opportunities for legitimacy, relevance, and quality.' },
      { title: 'Matched', desc: 'Qualified opportunities are matched with relevant candidates from the matching pool.' },
    ],
  },
];

export const SECTORS = [
  'Technology', 'Healthcare', 'Financial Services', 'Manufacturing', 'Business Services',
  'Consumer Products', 'Education', 'Construction', 'Food & Beverage', 'Logistics & Distribution',
  'Real Estate', 'Energy', 'Media & Entertainment', 'Retail', 'Agriculture',
  'Professional Services', 'Automotive', 'Telecoms', 'Defence', 'Sector Agnostic',
];

export const INVESTMENT_RANGES = [
  'Under £250K', '£250K – £500K', '£500K – £1M', '£1M – £3M', '£3M – £5M',
  '£5M – £10M', '£10M – £20M', '£20M+', 'Flexible / Deal-dependent',
];

export function getProgramById(id: string): Program | undefined {
  return PROGRAMS.find(p => p.id === id);
}

export function getMainPrograms(): Program[] {
  return PROGRAMS.filter(p => p.id !== 'opportunity');
}

export function getApplyPrograms(): Program[] {
  return PROGRAMS;
}
