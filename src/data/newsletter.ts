export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  company?: string;
}

export interface NewsletterIssue {
  title: string;
  /** Short 1-line summary of the issue. */
  summary?: string;
  /** Publication date. */
  date: Date;
  /** Optional link to a public archive of this issue (e.g. a Kit archive URL). */
  url?: string;
}

/**
 * Current public subscriber count. Set to `null` to hide the number from
 * marketing copy (the subheadline will read "Join security professionals…").
 * Update this by hand or wire to your Kit API later.
 */
export const SUBSCRIBER_COUNT: number | null = null;

/** Newsletter testimonials. Empty array hides the social-proof section. */
export const TESTIMONIALS: Testimonial[] = [];

/** Recent newsletter issues — shown in the "Recent Issues" section. */
export const RECENT_ISSUES: NewsletterIssue[] = [];
