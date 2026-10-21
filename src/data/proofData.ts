import { CaseStudyItem, ResourceArticle } from '../types';

/**
 * Proof-led structure:
 * No invented numbers, testimonials, client logos, ratings or case studies.
 * Proof components render only when their data arrays contain real entries; otherwise hide them completely.
 */
export const caseStudies: CaseStudyItem[] = [];

/**
 * Resources / Articles list:
 * Hidden from navigation until 3 real articles exist.
 */
export const resourceArticles: ResourceArticle[] = [];
