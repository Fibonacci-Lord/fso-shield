/**
 * "What's inside" details for each product, keyed by the product's collection
 * ID (the filename without .md). Shown on /templates as expandable sections
 * under each product card.
 *
 * Keep bullets to 3–5 items. Each bullet is one concrete thing the buyer
 * gets — specific enough to build confidence without clicking through to
 * Lemon Squeezy.
 */

export const productInsides: Record<string, string[]> = {
  'nispom-self-inspection-checklist': [
    '77 items across 9 NISPOM sections',
    'Each item includes the specific NISPOM reference (e.g., §117.15)',
    '"What the assessor looks for" annotation on every item',
    'Findings Summary table and corrective-action tracker',
    'Facility information cover page with CAGE code field',
  ],
  'insider-threat-program-template-kit': [
    'ITP program policy aligned to NISPOM 117.7(b) and SEAD-3',
    'Referral form for receiving insider threat concerns',
    'Annual ITP self-assessment form with findings tracker',
    'Referral/activity log for tracking dispositions',
    'ITPSO designation letter template',
  ],
  'standard-practice-procedures-template': [
    '12-section SPP with NISPOM references on every page',
    'Fill-in fields marked with brackets for facility customization',
    'KMP table, reporting requirements table, training schedule',
    'Covers possessing and non-possessing facility requirements',
    'FSO and ITPSO designation letter templates included',
  ],
  'security-briefing-slide-decks': [
    'Four .pptx decks: Initial, Annual Refresher, Foreign Travel, ITP Awareness',
    'Speaker notes on every slide',
    'Customizable facility placeholders',
    'Navy/gold professional theme',
    'SEAD-3 self-reporting scenarios built into each deck',
  ],
  'complete-dcsa-assessment-kit': [
    'All 4 NISPOM products — checklist, ITP kit, SPP template, briefing decks',
    '77-item Self-Inspection Checklist with assessor annotations',
    'Complete ITP documentation package (policy, forms, log)',
    '12-section Standard Practice Procedures template',
    'Four ready-to-deliver security briefing decks',
  ],
  'cmmc-level-2-workbook': [
    'All 110 NIST SP 800-171 Rev 2 controls, fully documented',
    'Evidence guidance per control — in plain English',
    'SPRS score calculator and scoring summary table',
    '15-row POA&M tracker for documenting gaps',
    '32-item evidence collection checklist and assessment certification page',
  ],
};
