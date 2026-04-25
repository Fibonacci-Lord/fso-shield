---
title: "CMMC vs NISPOM: What FSOs Need to Know About Both Compliance Programs"
description: "The practical guide to how CMMC and NISPOM overlap, where they differ, and why FSOs at cleared contractors now need to manage both. Includes which controls are shared and where the gaps are."
pubDate: 2026-04-26
author: "Jean Baptiste"
keywords:
  - "cmmc vs nispom"
  - "cmmc nispom overlap"
  - "fso cmmc responsibilities"
  - "cui vs classified"
  - "dcsa cmmc"
category: "cmmc"
schema: "article"
---

Five years ago, if you were the FSO at a 50-person cleared contractor, your compliance world was a single rulebook: NISPOM. You managed personnel clearances, physical security, the Insider Threat Program, and occasional DCSA security reviews. That was the job.

Today, that same FSO at that same contractor is also managing CMMC. Some voluntarily. Most because a prime contractor sent over a teaming agreement with a DFARS 252.204-7021 clause and a request for their SPRS score.

CMMC and NISPOM are not the same program. They don't cover the same information. They don't have the same assessors. They don't even share an acronym vocabulary. But at small cleared contractors, they land on the same desk — and understanding how they fit together is increasingly part of the FSO role.

Here's the working breakdown.

## The fundamental difference: classified vs. controlled

The simplest way to hold the distinction is this: **NISPOM protects classified information. CMMC protects CUI.**

Classified information has three tiers — Confidential, Secret, Top Secret — and the protection requirements are defined by executive orders, DoD directives, and 32 CFR Part 117 (the modern NISPOM). You need a Facility Clearance (FCL) to handle it. You need personnel with security clearances to access it. You need to store it in GSA-approved containers, in approved areas, with approved destruction methods.

Controlled Unclassified Information is unclassified. It's sensitive, it's restricted, but it's not classified. Export-controlled technical data, Controlled Technical Information (CTI), Privacy Act information, law enforcement data — these are all CUI categories. You do not need an FCL to handle CUI. You do not need a clearance. You do need to follow the safeguarding requirements in DFARS 252.204-7012 and, increasingly, CMMC Level 2.

A contractor can have:

- An FCL and handle classified information only (no CUI) — pure NISPOM
- No FCL and handle CUI only — pure CMMC / DFARS
- An FCL and handle both classified and CUI — both programs apply

That last case is the one most cleared contractors are in. If you have an FCL and you're bidding DoD work, there's an overwhelming chance you're also touching CUI.

## What NISPOM covers

NISPOM (32 CFR Part 117) is the operating manual for the National Industrial Security Program. It governs:

- **Facility Clearances (FCL).** How a contractor gets, maintains, and updates an FCL
- **Personnel Security Clearances (PCL).** How individuals get cleared, requirements for continuous evaluation, reporting adverse information
- **Physical Security.** GSA containers, approved areas, SCIFs, access control for classified work
- **Information Security.** Handling, transmission, storage, and destruction of classified material
- **Insider Threat Program (ITP).** Documentation, training, referral and response procedures
- **Self-Inspections and DCSA security reviews.** Annual self-inspections, periodic DCSA assessments
- **Foreign Ownership, Control, or Influence (FOCI).** Procedures for mitigating FOCI concerns
- **Reporting Requirements.** 13 categories of events that must be reported to DCSA

The oversight body is the Defense Counterintelligence and Security Agency (DCSA). The assessment is the DCSA security vulnerability assessment, scheduled in advance through your Industrial Security Representative.

For the complete self-inspection picture, see our [NISPOM compliance checklist guide](/nispom-compliance/nispom-compliance-checklist/) and the [Complete DCSA Assessment Kit](/assessment-kit).

## What CMMC covers

The Cybersecurity Maturity Model Certification is a DoD-led framework for verifying that contractors implement the cybersecurity controls required to handle CUI. Three levels:

**Level 1 — Foundational.** 15 basic safeguarding controls from FAR 52.204-21. Self-assessment only. Applies to any contractor handling Federal Contract Information (FCI).

**Level 2 — Advanced.** All 110 controls from NIST SP 800-171 Rev 2. Self-assessment for most contracts; C3PAO assessment required for prioritized contracts. This is where most DoD contractors live.

**Level 3 — Expert.** All of Level 2 plus a subset of NIST SP 800-172 controls. Required for contracts involving CUI of particular sensitivity. Government-led assessment (DIBCAC).

The CMMC controls are overwhelmingly technical. Access control, multifactor authentication, audit logging, cryptography, incident response, boundary protection, vulnerability scanning, patch management. This is IT territory, not physical security territory.

The oversight body isn't a single agency. Self-assessments are submitted to the Supplier Performance Risk System (SPRS). C3PAO assessments are conducted by organizations accredited by The Cyber AB. Level 3 assessments are done by DIBCAC.

For the complete Level 2 picture, see our [CMMC Level 2 requirements article](/cmmc-for-fsos/cmmc-level-2-requirements/) and the [CMMC Level 2 Self-Assessment Workbook](/cmmc-workbook).

## Where the programs overlap

Despite being separate frameworks for separate information types, NISPOM and CMMC overlap in meaningful ways. The overlap matters because work you do for one often counts toward the other — if you can document it properly.

**Physical security.** NISPOM requires protection of classified material in approved containers and areas. CMMC requires physical protection of systems that process CUI (control family PE). If your facility has access control, visitor logs, and a clean-desk policy because of NISPOM, those controls also map to CMMC PE.3.1 through PE.3.6. Same locks, same procedures, different paperwork.

**Personnel security.** NISPOM governs clearance adjudication and adverse information reporting. CMMC includes personnel security controls (PS.3.1 and PS.3.2) covering screening of personnel before granting system access, and response when someone is terminated or reassigned. The NISPOM personnel security processes give you a solid base for CMMC PS. You still need to document CMMC-specific procedures, but you're not starting from zero.

**Insider Threat Program.** The NISPOM ITP (117.7(b)) and CMMC's implicit insider threat expectations (mostly through AC controls around least privilege, session monitoring, and access reviews) share DNA. An ITP that covers both classified and CUI users is more efficient than running two parallel programs.

**Incident response.** NISPOM requires reporting of certain events to DCSA. CMMC requires an incident response capability under control family IR and reporting of cyber incidents to the DoD under DFARS 252.204-7012. At most small contractors, a single IR plan serves both programs — you just need separate reporting paths.

**Awareness and training.** NISPOM requires annual security refresher briefings. CMMC requires security awareness training (AT.2.1 through AT.3.1). A unified training program can cover both, delivered once a year per employee. Bundle your NISPOM briefing with a CUI/cybersecurity module and you've satisfied both requirements in one sitting.

## Where the programs diverge

The overlap is useful but limited. The majority of CMMC work is not covered by NISPOM, and vice versa.

**CMMC is IT-heavy. NISPOM is operations-heavy.** Most NISPOM compliance is about procedures, documentation, and physical controls that an FSO can own. Most CMMC compliance is about technical implementation in systems — MFA, FIPS-validated cryptography, audit logging, endpoint protection, network segmentation. An FSO with a compliance background can manage CMMC, but they'll rely heavily on IT to implement.

**NISPOM doesn't cover unclassified data protection.** You can have a perfect NISPOM program and still fail CMMC, because NISPOM doesn't require you to encrypt email attachments containing CUI, enforce MFA on your file share, or log and review user activity on your laptops. Those are CMMC concerns.

**CMMC doesn't cover FCL administration or personnel clearances.** You can have a perfect CMMC program and still fail NISPOM, because CMMC doesn't require you to appoint an FSO, manage KMP lists, submit DD Form 254 paperwork, or run annual self-inspections to DCSA standards.

**Different assessors, different cadence.** DCSA shows up for NISPOM assessments periodically. C3PAOs show up (if required) once every three years for CMMC Level 2. The two almost never coincide.

**Different documents.** NISPOM wants a Standard Practice Procedures document, a self-inspection report, Insider Threat Program documentation, and evidence of briefings. CMMC wants a System Security Plan, a Plan of Action and Milestones, evidence per control, and a scored SPRS submission. Same activity (documenting your program), totally different artifacts.

## Why the FSO is inheriting CMMC

If you're an FSO at a small contractor wondering why CMMC landed on your desk, here's what's happening:

**Small contractors don't have a CISO.** Someone has to own cybersecurity compliance. The FSO already owns the NISPOM side, which makes them the default candidate — especially when compliance is seen as "process," distinct from operational IT.

**CMMC and NISPOM converge on the same target audience.** Both apply to cleared defense contractors. The set of people who already understand compliance frameworks, regulatory language, and how to read a DFARS clause is small. FSOs are in that set.

**CMMC questions from primes come through business development, and BD hands them to compliance.** When a prime asks "what's your SPRS score?" the answer flows through whoever handles compliance paperwork. At a 50-person shop, that's the FSO.

**It's not actually a bad fit.** CMMC is a regulatory program with a process orientation. An FSO who handles DCSA assessments, ITP documentation, and 13 reportable events already has the muscle memory for CMMC's evidence collection and POA&M management. The technical layer is where you partner with IT.

At some contractors, the FSO formally takes on CMMC as an additional duty. At others, the FSO coordinates with IT and a part-time consultant. At larger contractors (200+ employees), CMMC gets its own program manager and the FSO contributes on personnel security and physical protection controls. Whatever model you're in, CMMC is increasingly adjacent to the FSO role.

## Running both programs efficiently

If you're managing both — and if you're at a cleared contractor handling DoD CUI, you probably are — here's how to keep them from consuming your entire calendar:

**Start with the NISPOM Assessment Kit for your classified program and the CMMC Workbook for your CUI boundary.** These are two separate documentation lanes with two separate evidence sets. Trying to merge them into one binder creates confusion during assessments. Keep them parallel.

**Share infrastructure where it saves work.** One ITP that covers both classified and CUI users. One annual awareness training that bundles both programs. One visitor log procedure. One incident response plan with separate reporting paths.

**Keep assessors in their lanes.** When DCSA shows up, they don't care about your CMMC score. When a C3PAO shows up, they don't care about your FCL. Don't volunteer information from one program to an assessor in the other — it's noise at best and invites scope creep at worst.

**Map CMMC technical controls to IT ownership, not FSO ownership.** You can coordinate, document, and track. You should not be the one configuring group policies or implementing FIPS-validated cryptography. That's IT's job. Draw the line in writing.

**Budget for both.** NISPOM compliance is mostly labor. CMMC compliance is labor plus capital (FIPS-validated products, monitoring tools, potentially new IT infrastructure). When you build the annual compliance budget, list them separately.

## FAQs

### Can NISPOM documentation count toward CMMC evidence?

For some controls, yes. Your NISPOM access control procedures, personnel security files, and physical security documentation can support CMMC PE, PS, and AC controls. But the documents need to reference CUI (not just classified) and cover the CMMC-specific requirements. Don't assume — check each control.

### Does handling CUI require an FCL?

No. CUI is unclassified. You do not need a Facility Clearance to handle CUI. You need to implement the applicable safeguarding and cybersecurity requirements (DFARS 252.204-7012, CMMC Level 2 if required by contract).

### If I have both programs, which do I start with?

Start with whichever is on a closer deadline. If you have a DCSA assessment in six months and no CMMC contract yet, focus on NISPOM. If a prime is asking for your SPRS score this quarter, focus on CMMC. Both matter. Neither is optional.

### Can one person run both programs at a small contractor?

At contractors under 100 employees, yes — but plan the calendar carefully. Expect 10–20 hours a month for steady-state NISPOM maintenance, 10–15 hours a month for CMMC maintenance after initial implementation, and spikes around assessments. If it's more than 25% of the FSO's time, consider a fractional consultant for the CMMC technical layer.

### Do contractors who only have an FCL (no CUI) need CMMC?

Only if they hold contracts with CMMC or DFARS 252.204-7012 clauses. Many cleared contractors are FCL-only (classified information only, no CUI). But if any of their DoD contracts involve unclassified technical data, design documents, or program information — which most do — they're in CUI territory and CMMC applies.

## What to do this week

- Map each of your three most active DoD contracts to NISPOM, CMMC, or both
- Make a short list of controls where your NISPOM documentation could support CMMC evidence (start with physical security, personnel security, and incident response)
- Agree with your IT lead on ownership boundaries between the two programs
- If you don't have both programs running yet, start with the one closer to an assessment deadline
- [Get the CMMC Level 2 Self-Assessment Workbook](/cmmc-workbook) to begin self-assessment, and the [Complete DCSA Assessment Kit](/assessment-kit) to shore up the NISPOM side

Two programs, two rulebooks, one FSO. The workload is real but it's manageable — if you treat them as parallel tracks with shared infrastructure, not as one giant merged compliance problem.
