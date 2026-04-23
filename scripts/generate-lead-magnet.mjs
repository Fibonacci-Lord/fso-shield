/**
 * NISPOM Quick-Check PDF generator — the free 15-item lead magnet.
 *
 * Run: npm run build:pdf
 * Output: public/downloads/NISPOM-Quick-Check-15.pdf
 *
 * Uses pdf-lib with built-in Times + Helvetica. No external font files needed.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'downloads');
const OUTPUT_PATH = path.join(OUTPUT_DIR, 'NISPOM-Quick-Check-15.pdf');

/* ------------------------------------------------------------------ *
 *  Design tokens — match the site color system                       *
 * ------------------------------------------------------------------ */
const COLORS = {
  navy950: rgb(0.059, 0.114, 0.196), // #0F1D32
  navy900: rgb(0.102, 0.153, 0.267), // #1A2744
  navy700: rgb(0.169, 0.298, 0.490), // #2B4C7E
  navy500: rgb(0.38, 0.48, 0.62),
  navy200: rgb(0.725, 0.804, 0.890), // #B9CDE3
  navy100: rgb(0.910, 0.929, 0.957), // #E8EDF4
  navy50: rgb(0.957, 0.965, 0.980), // #F4F6FA
  gold500: rgb(0.839, 0.620, 0.180), // #D69E2E
  gold600: rgb(0.690, 0.494, 0.133), // #B07E22
  gold100: rgb(0.984, 0.953, 0.871), // #FBF3DE
  white: rgb(1, 1, 1),
  black: rgb(0, 0, 0),
};

const PAGE_WIDTH = 612; // 8.5"
const PAGE_HEIGHT = 792; // 11"
const MARGIN = 60;
const FOOTER_URL = 'Get the full 77-item checklist at fsoshield.com/templates';

/* ------------------------------------------------------------------ *
 *  The 15 items                                                      *
 * ------------------------------------------------------------------ */
const ITEMS = [
  {
    title: 'FSO appointed in writing and notification submitted to DCSA',
    ref: '32 CFR § 117.7',
    description:
      'A current FSO must be designated in writing by a Key Management Personnel, with the designation notice submitted to DCSA through NISS.',
    assessor:
      'Signed letter of appointment on company letterhead, dated and filed; a current NISS entry reflecting the appointed FSO.',
  },
  {
    title:
      'FSO has completed required CDSE training within 12 months of appointment',
    ref: '32 CFR § 117.7',
    description:
      'Every FSO must complete the CDSE NISP-required curriculum within one year of initial appointment. Possessing facilities carry additional course requirements.',
    assessor:
      'Training certificates for each required STEPP course, dated within 12 months of the FSO\u2019s appointment date.',
  },
  {
    title:
      'Key Management Personnel (KMP) changes reported to DCSA within required timeframe',
    ref: '32 CFR § 117.8',
    description:
      'Changes to KMPs that affect the Facility Clearance — departures, additions, role changes — must be reported to DCSA promptly via NISS.',
    assessor:
      'A KMP roster that matches current company leadership, with NISS change-report history reflecting every KMP transition.',
  },
  {
    title:
      'SF-312 Nondisclosure Agreements executed for all cleared personnel and filed properly',
    ref: '32 CFR § 117.11',
    description:
      'Every cleared employee must sign the SF-312 Nondisclosure Agreement before accessing classified information. The original signed forms are retained for the life of the clearance plus 50 years.',
    assessor:
      'A signed SF-312 on file for every currently cleared employee; signature dates precede the employee\u2019s initial classified access.',
  },
  {
    title: 'Initial security briefings delivered to all newly cleared employees',
    ref: '32 CFR § 117.11',
    description:
      'Every employee must receive an initial security briefing prior to first access to classified information, covering NISPOM obligations, reporting duties, and consequences of violations.',
    assessor:
      'A documented briefing record — date, briefer, employee signature — for every currently cleared employee.',
  },
  {
    title: 'Annual refresher briefings delivered and documented',
    ref: '32 CFR § 117.11',
    description:
      'Each cleared employee must receive a refresher briefing at least annually, addressing current threats, reporting obligations, and any regulatory changes.',
    assessor:
      'A training log showing every cleared employee received a refresher within the past 12 months.',
  },
  {
    title: 'Debriefings conducted for all departing cleared employees',
    ref: '32 CFR § 117.11',
    description:
      'When a cleared employee\u2019s access ends — voluntary departure, termination, or access removal — a security debriefing must be conducted and documented.',
    assessor:
      'A signed debriefing record on file for every employee whose access has been terminated in the past year.',
  },
  {
    title: 'Adverse information reporting procedures in place and followed',
    ref: '32 CFR § 117.8',
    description:
      'The FSO must report adverse information on cleared employees — arrests, substance issues, foreign contacts of concern — to DCSA through DISS.',
    assessor:
      'A written procedure, evidence of staff awareness, and any reports submitted in the past year (or a documented review if none were warranted).',
  },
  {
    title: 'Insider Threat Program established with designated ITPSO',
    ref: '32 CFR § 117.7',
    description:
      'Every cleared facility must have an Insider Threat Program led by a designated ITPSO, with written procedures covering detection, deterrence, and response.',
    assessor:
      'An ITP policy document, an ITPSO appointment letter, and records of ITP committee or working-group activity.',
  },
  {
    title: 'Insider Threat awareness training delivered to all cleared personnel',
    ref: '32 CFR § 117.7',
    description:
      'Every cleared employee must receive initial and annual insider threat awareness training covering indicators, reporting channels, and prevention.',
    assessor:
      'Training records showing 100% completion by cleared personnel in the past 12 months.',
  },
  {
    title: 'Self-inspection completed annually and documented',
    ref: '32 CFR § 117.7',
    description:
      'Every cleared facility must conduct a self-inspection at least annually, covering all applicable NISPOM requirements, with findings documented and tracked to closure.',
    assessor:
      'A completed self-inspection report from the past 12 months, signed by the FSO, with findings and corrective actions logged.',
  },
  {
    title:
      'Classified material stored in GSA-approved containers (if possessing)',
    ref: '32 CFR § 117.15',
    description:
      'Classified information at possessing facilities must be stored in GSA-approved security containers or in facilities that meet the NISPOM storage standards.',
    assessor:
      'GSA-approval labels visible on containers, combination records current, and SF-700 information on file for each container.',
  },
  {
    title:
      'Combination changes performed when required (personnel changes, compromise, etc.)',
    ref: '32 CFR § 117.15',
    description:
      'Container combinations must be changed upon initial use, when a person with access leaves or loses need-to-know, and whenever a compromise is suspected.',
    assessor:
      'A combination change log showing changes tied to personnel events, and a current SF-700 on file for each container.',
  },
  {
    title:
      'Visit authorization letters (VALs) processed through DISS for classified visits',
    ref: '32 CFR § 117.16',
    description:
      'Classified visits between cleared facilities require a VAL submitted through DISS in advance, certifying the visitor\u2019s clearance level and need-to-know.',
    assessor:
      'Recent VALs — outgoing and incoming — on file, and documented procedures for requesting and receiving visit authorizations.',
  },
  {
    title: 'Foreign travel reporting procedures established and communicated',
    ref: 'SEAD-3',
    description:
      'Under SEAD-3, cleared employees must report unofficial foreign travel to the FSO before departure, including itinerary, points of contact, and anticipated foreign national contact.',
    assessor:
      'A written foreign-travel reporting policy, evidence employees are aware of it, and travel reports on file from the past year.',
  },
];

const ITEMS_PER_PAGE = 3;

/* ------------------------------------------------------------------ *
 *  Text wrapping helper                                              *
 * ------------------------------------------------------------------ */
function wrapText(text, font, size, maxWidth) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    const width = font.widthOfTextAtSize(candidate, size);
    if (width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function drawWrappedText(page, text, opts) {
  const { font, size, color, x, y, maxWidth, lineHeight } = opts;
  const lines = wrapText(text, font, size, maxWidth);
  let currentY = y;
  for (const line of lines) {
    page.drawText(line, { x, y: currentY, size, font, color });
    currentY -= lineHeight;
  }
  return currentY + lineHeight; // baseline of last line
}

function heightOfWrappedText(text, font, size, maxWidth, lineHeight) {
  return wrapText(text, font, size, maxWidth).length * lineHeight;
}

/* ------------------------------------------------------------------ *
 *  Shield icon — SVG path on a 64-unit grid                          *
 * ------------------------------------------------------------------ */
const SHIELD_PATH =
  'M32 6 L56 16 V34 C56 46 45 55 32 60 C19 55 8 46 8 34 V16 Z';

function drawShield(page, x, y, size, { fonts }) {
  // pdf-lib drawSvgPath: y is the TOP of the bounding box, not the bottom.
  const scale = size / 64;
  page.drawSvgPath(SHIELD_PATH, {
    x,
    y: y + size,
    scale,
    color: COLORS.gold500,
  });
  // "FSO" text inside the shield — approximate vertical centering.
  const label = 'FSO';
  const labelSize = size * 0.3;
  const labelWidth = fonts.titleBold.widthOfTextAtSize(label, labelSize);
  page.drawText(label, {
    x: x + (size - labelWidth) / 2,
    y: y + size * 0.32,
    size: labelSize,
    font: fonts.titleBold,
    color: COLORS.navy950,
  });
}

/* ------------------------------------------------------------------ *
 *  Page footer                                                       *
 * ------------------------------------------------------------------ */
function drawFooter(page, fonts, pageNumber, totalPages) {
  const footerY = 32;
  const footerSize = 9;
  const width = fonts.body.widthOfTextAtSize(FOOTER_URL, footerSize);
  page.drawText(FOOTER_URL, {
    x: (PAGE_WIDTH - width) / 2,
    y: footerY,
    size: footerSize,
    font: fonts.body,
    color: COLORS.navy500,
  });
  // Page number
  if (pageNumber && totalPages) {
    const pageLabel = `${pageNumber} / ${totalPages}`;
    const pLabelWidth = fonts.body.widthOfTextAtSize(pageLabel, footerSize);
    page.drawText(pageLabel, {
      x: PAGE_WIDTH - MARGIN - pLabelWidth,
      y: footerY,
      size: footerSize,
      font: fonts.body,
      color: COLORS.navy200,
    });
  }
  // Thin gold rule above the footer
  page.drawRectangle({
    x: MARGIN,
    y: footerY + 18,
    width: PAGE_WIDTH - MARGIN * 2,
    height: 0.5,
    color: COLORS.gold500,
    opacity: 0.4,
  });
}

/* ------------------------------------------------------------------ *
 *  Cover page                                                        *
 * ------------------------------------------------------------------ */
function drawCoverPage(doc, fonts) {
  const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);

  // Deep ink background
  page.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    color: COLORS.navy950,
  });

  // Subtle gold glow top-right (faux radial)
  for (let i = 0; i < 6; i++) {
    page.drawCircle({
      x: PAGE_WIDTH - 80,
      y: PAGE_HEIGHT - 80,
      size: 80 + i * 30,
      color: COLORS.gold500,
      opacity: 0.015 * (6 - i),
    });
  }

  // Shield, centered
  const shieldSize = 100;
  const shieldX = (PAGE_WIDTH - shieldSize) / 2;
  const shieldY = PAGE_HEIGHT - 260;
  drawShield(page, shieldX, shieldY, shieldSize, { fonts });

  // Eyebrow — small caps
  const eyebrow = 'NISPOM  COMPLIANCE';
  const eyebrowSize = 11;
  const eyebrowWidth = fonts.bodyBold.widthOfTextAtSize(eyebrow, eyebrowSize);
  page.drawText(eyebrow, {
    x: (PAGE_WIDTH - eyebrowWidth) / 2,
    y: shieldY - 50,
    size: eyebrowSize,
    font: fonts.bodyBold,
    color: COLORS.gold500,
  });

  // Title
  const title = 'Quick-Check';
  const titleSize = 54;
  const titleWidth = fonts.title.widthOfTextAtSize(title, titleSize);
  page.drawText(title, {
    x: (PAGE_WIDTH - titleWidth) / 2,
    y: shieldY - 115,
    size: titleSize,
    font: fonts.title,
    color: COLORS.white,
  });

  // Subtitle — italic serif
  const subtitle = '15 Items DCSA Cites Most';
  const subtitleSize = 22;
  const subtitleWidth = fonts.titleItalic.widthOfTextAtSize(
    subtitle,
    subtitleSize
  );
  page.drawText(subtitle, {
    x: (PAGE_WIDTH - subtitleWidth) / 2,
    y: shieldY - 150,
    size: subtitleSize,
    font: fonts.titleItalic,
    color: COLORS.navy100,
  });

  // Thin gold rule
  page.drawRectangle({
    x: PAGE_WIDTH / 2 - 40,
    y: shieldY - 180,
    width: 80,
    height: 1.5,
    color: COLORS.gold500,
  });

  // Tagline
  const tagline = 'The free self-inspection starter from';
  const taglineSize = 12;
  const taglineWidth = fonts.body.widthOfTextAtSize(tagline, taglineSize);
  page.drawText(tagline, {
    x: (PAGE_WIDTH - taglineWidth) / 2,
    y: 200,
    size: taglineSize,
    font: fonts.body,
    color: COLORS.navy200,
  });

  // Brand wordmark
  const brand = 'F S O   S H I E L D';
  const brandSize = 20;
  const brandWidth = fonts.bodyBold.widthOfTextAtSize(brand, brandSize);
  page.drawText(brand, {
    x: (PAGE_WIDTH - brandWidth) / 2,
    y: 170,
    size: brandSize,
    font: fonts.bodyBold,
    color: COLORS.gold500,
  });

  // URL
  const url = 'fsoshield.com';
  const urlSize = 11;
  const urlWidth = fonts.body.widthOfTextAtSize(url, urlSize);
  page.drawText(url, {
    x: (PAGE_WIDTH - urlWidth) / 2,
    y: 60,
    size: urlSize,
    font: fonts.body,
    color: COLORS.navy200,
  });

  // Gold bottom stripe
  page.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_WIDTH,
    height: 10,
    color: COLORS.gold500,
  });
}

/* ------------------------------------------------------------------ *
 *  "How to use" page                                                 *
 * ------------------------------------------------------------------ */
function drawHowToPage(doc, fonts) {
  const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);

  // Eyebrow
  page.drawText('HOW  TO  USE  THIS  CHECKLIST', {
    x: MARGIN,
    y: PAGE_HEIGHT - MARGIN - 8,
    size: 10,
    font: fonts.bodyBold,
    color: COLORS.gold600,
  });

  // Heading
  page.drawText('Before your next DCSA assessment.', {
    x: MARGIN,
    y: PAGE_HEIGHT - MARGIN - 50,
    size: 30,
    font: fonts.title,
    color: COLORS.navy900,
  });

  // Gold left-border rule accent (under heading)
  page.drawRectangle({
    x: MARGIN,
    y: PAGE_HEIGHT - MARGIN - 70,
    width: 40,
    height: 3,
    color: COLORS.gold500,
  });

  // Body paragraphs
  const bodyWidth = PAGE_WIDTH - MARGIN * 2;
  const paragraphs = [
    'This is a 15-item starter checklist covering the NISPOM compliance areas DCSA cites most often during security vulnerability assessments. Think of it as the 20% of the checklist that catches 80% of the findings.',
    'For each item, confirm your facility is compliant, deficient, or not applicable. Use the "what the assessor looks for" note to understand the evidence DCSA will actually request during an assessment.',
    'If you find a gap, document the corrective action with a target close date. Most findings become non-findings when a remediation plan is already in progress.',
    'This list is not exhaustive. It is designed to catch the most common issues before a full self-inspection. The complete 77-item FSO Shield checklist — covering all 9 NISPOM sections, with a findings summary table, inspector certification page, and detailed assessor annotations — is available at fsoshield.com/templates.',
  ];

  let y = PAGE_HEIGHT - MARGIN - 110;
  for (const para of paragraphs) {
    y = drawWrappedText(page, para, {
      font: fonts.body,
      size: 11.5,
      color: COLORS.navy900,
      x: MARGIN,
      y,
      maxWidth: bodyWidth,
      lineHeight: 16,
    });
    y -= 18; // paragraph gap
  }

  // Callout box near bottom
  const calloutY = 140;
  page.drawRectangle({
    x: MARGIN,
    y: calloutY,
    width: PAGE_WIDTH - MARGIN * 2,
    height: 70,
    color: COLORS.gold100,
    borderColor: COLORS.gold500,
    borderWidth: 0.75,
  });
  page.drawText('A NOTE ON LEGAL STANDING', {
    x: MARGIN + 20,
    y: calloutY + 48,
    size: 9,
    font: fonts.bodyBold,
    color: COLORS.gold600,
  });
  drawWrappedText(
    page,
    'This checklist is a practitioner reference, not legal advice or a DCSA-issued assessment tool. Always consult 32 CFR Part 117 and your CSO for the authoritative requirements that apply to your facility.',
    {
      font: fonts.body,
      size: 10,
      color: COLORS.navy900,
      x: MARGIN + 20,
      y: calloutY + 30,
      maxWidth: PAGE_WIDTH - MARGIN * 2 - 40,
      lineHeight: 13,
    }
  );

  return page;
}

/* ------------------------------------------------------------------ *
 *  Checklist page — 3 items per page                                 *
 * ------------------------------------------------------------------ */
function drawChecklistPage(doc, fonts, items, pageIndex, pageCount) {
  const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);

  // Eyebrow at top
  page.drawText('THE  15  ITEMS', {
    x: MARGIN,
    y: PAGE_HEIGHT - MARGIN - 8,
    size: 10,
    font: fonts.bodyBold,
    color: COLORS.gold600,
  });

  // Section heading
  const heading =
    pageIndex === 0
      ? 'The findings DCSA cites most.'
      : 'The findings DCSA cites most (continued).';
  page.drawText(heading, {
    x: MARGIN,
    y: PAGE_HEIGHT - MARGIN - 45,
    size: 24,
    font: fonts.title,
    color: COLORS.navy900,
  });

  // Gold accent
  page.drawRectangle({
    x: MARGIN,
    y: PAGE_HEIGHT - MARGIN - 62,
    width: 40,
    height: 3,
    color: COLORS.gold500,
  });

  // Items
  const bodyWidth = PAGE_WIDTH - MARGIN * 2;
  const itemBodyWidth = bodyWidth - 32; // leave room for checkbox column
  let y = PAGE_HEIGHT - MARGIN - 110;

  items.forEach((item, idx) => {
    const globalNumber = pageIndex * ITEMS_PER_PAGE + idx + 1;

    // Checkbox
    page.drawRectangle({
      x: MARGIN,
      y: y - 14,
      width: 14,
      height: 14,
      borderColor: COLORS.navy700,
      borderWidth: 1.25,
      color: COLORS.white,
    });

    // Number + title
    page.drawText(`${globalNumber}.`, {
      x: MARGIN + 24,
      y: y - 2,
      size: 12,
      font: fonts.bodyBold,
      color: COLORS.gold600,
    });

    const numberOffset =
      MARGIN +
      24 +
      fonts.bodyBold.widthOfTextAtSize(`${globalNumber}.`, 12) +
      6;
    const titleMaxWidth = PAGE_WIDTH - MARGIN - numberOffset;
    const titleLines = wrapText(item.title, fonts.titleBold, 13, titleMaxWidth);
    let titleY = y;
    for (const line of titleLines) {
      page.drawText(line, {
        x: numberOffset,
        y: titleY - 2,
        size: 13,
        font: fonts.titleBold,
        color: COLORS.navy900,
      });
      titleY -= 16;
    }

    // NISPOM ref
    page.drawText(item.ref, {
      x: MARGIN + 32,
      y: titleY + 4,
      size: 9.5,
      font: fonts.bodyBold,
      color: COLORS.gold600,
    });
    let nextY = titleY - 12;

    // Description
    nextY = drawWrappedText(page, item.description, {
      font: fonts.body,
      size: 10.5,
      color: COLORS.navy900,
      x: MARGIN + 32,
      y: nextY,
      maxWidth: itemBodyWidth,
      lineHeight: 14,
    });

    // "What the assessor looks for" — italic
    nextY -= 10;
    page.drawText('What the assessor looks for:', {
      x: MARGIN + 32,
      y: nextY,
      size: 9.5,
      font: fonts.bodyBold,
      color: COLORS.navy700,
    });
    nextY -= 13;
    nextY = drawWrappedText(page, item.assessor, {
      font: fonts.italic,
      size: 10,
      color: COLORS.navy900,
      x: MARGIN + 32,
      y: nextY,
      maxWidth: itemBodyWidth,
      lineHeight: 13,
    });

    // Divider (not after last item on page)
    if (idx < items.length - 1) {
      nextY -= 18;
      page.drawRectangle({
        x: MARGIN,
        y: nextY,
        width: PAGE_WIDTH - MARGIN * 2,
        height: 0.5,
        color: COLORS.navy200,
      });
      nextY -= 18;
    }

    y = nextY;
  });

  return page;
}

/* ------------------------------------------------------------------ *
 *  CTA final page                                                    *
 * ------------------------------------------------------------------ */
function drawCTAPage(doc, fonts) {
  const page = doc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);

  // Deep ink background
  page.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    color: COLORS.navy950,
  });

  // Shield centered, small
  const shieldSize = 72;
  const shieldX = (PAGE_WIDTH - shieldSize) / 2;
  const shieldY = PAGE_HEIGHT - 220;
  drawShield(page, shieldX, shieldY, shieldSize, { fonts });

  // Eyebrow
  const eyebrow = 'READY  FOR  ALL  77?';
  const eyebrowSize = 11;
  const eyebrowWidth = fonts.bodyBold.widthOfTextAtSize(eyebrow, eyebrowSize);
  page.drawText(eyebrow, {
    x: (PAGE_WIDTH - eyebrowWidth) / 2,
    y: shieldY - 45,
    size: eyebrowSize,
    font: fonts.bodyBold,
    color: COLORS.gold500,
  });

  // Main heading
  const heading = 'Get the complete checklist.';
  const headingSize = 40;
  const headingWidth = fonts.title.widthOfTextAtSize(heading, headingSize);
  page.drawText(heading, {
    x: (PAGE_WIDTH - headingWidth) / 2,
    y: shieldY - 105,
    size: headingSize,
    font: fonts.title,
    color: COLORS.white,
  });

  // Description paragraph
  const desc =
    'This is 15 of 77. The full NISPOM Self-Inspection Checklist covers all 9 NISPOM sections, includes a findings summary table, an inspector certification page, and detailed assessor annotations for each item — everything you need to walk into a DCSA security vulnerability assessment prepared.';
  const descLines = wrapText(desc, fonts.body, 12.5, PAGE_WIDTH - 140);
  let descY = shieldY - 160;
  for (const line of descLines) {
    const w = fonts.body.widthOfTextAtSize(line, 12.5);
    page.drawText(line, {
      x: (PAGE_WIDTH - w) / 2,
      y: descY,
      size: 12.5,
      font: fonts.body,
      color: COLORS.navy100,
    });
    descY -= 18;
  }

  // Gold accent box — price + URL
  const boxWidth = 360;
  const boxHeight = 130;
  const boxX = (PAGE_WIDTH - boxWidth) / 2;
  const boxY = 180;

  page.drawRectangle({
    x: boxX,
    y: boxY,
    width: boxWidth,
    height: boxHeight,
    color: COLORS.white,
    opacity: 0.04,
    borderColor: COLORS.gold500,
    borderWidth: 1.5,
  });

  // Price
  const price = '$27';
  const priceSize = 42;
  const priceWidth = fonts.title.widthOfTextAtSize(price, priceSize);
  page.drawText(price, {
    x: boxX + (boxWidth - priceWidth) / 2,
    y: boxY + boxHeight - 58,
    size: priceSize,
    font: fonts.title,
    color: COLORS.gold500,
  });

  const priceNote = 'one-time purchase  ·  instant download';
  const priceNoteSize = 10;
  const priceNoteWidth = fonts.body.widthOfTextAtSize(
    priceNote,
    priceNoteSize
  );
  page.drawText(priceNote, {
    x: boxX + (boxWidth - priceNoteWidth) / 2,
    y: boxY + boxHeight - 80,
    size: priceNoteSize,
    font: fonts.body,
    color: COLORS.navy200,
  });

  // URL
  const url = 'fsoshield.com/templates';
  const urlSize = 14;
  const urlWidth = fonts.bodyBold.widthOfTextAtSize(url, urlSize);
  page.drawText(url, {
    x: boxX + (boxWidth - urlWidth) / 2,
    y: boxY + 30,
    size: urlSize,
    font: fonts.bodyBold,
    color: COLORS.white,
  });

  // URL underline
  page.drawRectangle({
    x: boxX + (boxWidth - urlWidth) / 2,
    y: boxY + 26,
    width: urlWidth,
    height: 1,
    color: COLORS.gold500,
  });

  // Gold bottom stripe
  page.drawRectangle({
    x: 0,
    y: 0,
    width: PAGE_WIDTH,
    height: 10,
    color: COLORS.gold500,
  });

  // Small closer line just above stripe
  const closer = 'Built by an FSO, for FSOs.';
  const closerSize = 10;
  const closerWidth = fonts.italic.widthOfTextAtSize(closer, closerSize);
  page.drawText(closer, {
    x: (PAGE_WIDTH - closerWidth) / 2,
    y: 40,
    size: closerSize,
    font: fonts.italic,
    color: COLORS.navy200,
  });
}

/* ------------------------------------------------------------------ *
 *  Main                                                              *
 * ------------------------------------------------------------------ */
async function main() {
  const doc = await PDFDocument.create();

  const fonts = {
    title: await doc.embedFont(StandardFonts.TimesRoman),
    titleBold: await doc.embedFont(StandardFonts.TimesRomanBold),
    titleItalic: await doc.embedFont(StandardFonts.TimesRomanItalic),
    body: await doc.embedFont(StandardFonts.Helvetica),
    bodyBold: await doc.embedFont(StandardFonts.HelveticaBold),
    italic: await doc.embedFont(StandardFonts.HelveticaOblique),
  };

  doc.setTitle('NISPOM Quick-Check: 15 Items DCSA Cites Most');
  doc.setAuthor('FSO Shield');
  doc.setSubject('Free NISPOM self-inspection starter checklist');
  doc.setKeywords([
    'NISPOM',
    'FSO',
    'DCSA',
    'self-inspection',
    '32 CFR Part 117',
    'industrial security',
  ]);
  doc.setProducer('FSO Shield');
  doc.setCreator('FSO Shield (pdf-lib)');

  // Build pages
  drawCoverPage(doc, fonts);
  drawHowToPage(doc, fonts);
  for (let i = 0; i * ITEMS_PER_PAGE < ITEMS.length; i++) {
    const chunk = ITEMS.slice(i * ITEMS_PER_PAGE, (i + 1) * ITEMS_PER_PAGE);
    drawChecklistPage(
      doc,
      fonts,
      chunk,
      i,
      Math.ceil(ITEMS.length / ITEMS_PER_PAGE)
    );
  }
  drawCTAPage(doc, fonts);

  // Add footers to every page except cover (index 0) and CTA (last)
  const totalPages = doc.getPageCount();
  const pages = doc.getPages();
  for (let i = 1; i < totalPages - 1; i++) {
    drawFooter(pages[i], fonts, i + 1, totalPages);
  }

  const bytes = await doc.save();
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, bytes);
  console.log(
    `✓ Wrote ${path.relative(process.cwd(), OUTPUT_PATH)} ` +
      `(${(bytes.length / 1024).toFixed(1)} KB, ${totalPages} pages)`
  );
}

main().catch((err) => {
  console.error('✗ PDF generation failed:', err);
  process.exit(1);
});
