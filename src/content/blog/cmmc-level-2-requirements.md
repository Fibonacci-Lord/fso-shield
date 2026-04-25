---
title: "CMMC Level 2 Requirements: What Every DoD Contractor Needs to Know in 2026"
description: "Complete breakdown of CMMC Level 2 certification — the 110 controls, self-assessment vs. C3PAO, SPRS scoring, timelines, costs, and how to prepare. Written for contractors, not consultants."
pubDate: 2026-04-25
author: "Jean Baptiste"
keywords:
  - "cmmc level 2"
  - "cmmc requirements"
  - "nist 800-171"
  - "cmmc self-assessment"
  - "sprs score"
  - "cmmc 2026"
category: "cmmc"
schema: "article"
---

If you hold a DoD contract that touches Controlled Unclassified Information, CMMC Level 2 is coming for you. If it hasn't already.

Most contractors I talk to are in one of two buckets. Bucket one: they know CMMC is real but haven't mapped it to any specific contract yet. Bucket two: a prime called last month and said "we need your SPRS score by Q3 or we're dropping you from the teaming agreement."

This is the article I wish someone had handed me when CMMC Level 2 started showing up in contract clauses. It's not the official DoD summary, and it's not a sales pitch for a $50K consulting engagement. It's the working breakdown — what's required, what it actually costs, what trips everyone up, and how to start this week.

## What CMMC Level 2 actually requires

CMMC Level 2 is the middle tier of the three-level Cybersecurity Maturity Model Certification framework. It applies to any contractor that handles Controlled Unclassified Information under a DoD contract — which, depending on who you ask, is somewhere between 60,000 and 80,000 companies.

The substance of Level 2 is simple to state and hard to do: you must implement all 110 security controls in NIST SP 800-171 Rev 2. Every one of them, across 14 control families, within the boundary of your systems that touch CUI.

"Implement" is the load-bearing word. You can't just write a policy saying you'll implement a control. You need to actually do it, document that you're doing it, and be able to produce evidence that you're doing it. The assessor — whether that's you, in a self-assessment, or a C3PAO in a third-party assessment — will want to see the evidence.

The 14 control families are:

- **AC** — Access Control (22 controls)
- **AT** — Awareness and Training (3 controls)
- **AU** — Audit and Accountability (9 controls)
- **CM** — Configuration Management (9 controls)
- **IA** — Identification and Authentication (11 controls)
- **IR** — Incident Response (3 controls)
- **MA** — Maintenance (6 controls)
- **MP** — Media Protection (9 controls)
- **PE** — Physical Protection (6 controls)
- **PS** — Personnel Security (2 controls)
- **RA** — Risk Assessment (3 controls)
- **CA** — Security Assessment (4 controls)
- **SC** — System and Communications Protection (16 controls)
- **SI** — System and Information Integrity (7 controls)

Not every family carries equal weight. The heavy families — AC, IA, SC, and SI — are where most organizations get stuck, and they're also where assessors look hardest.

## How the SPRS score works

The Supplier Performance Risk System (SPRS) is the DoD's vendor-risk database. Contractors self-report their NIST SP 800-171 implementation status as a numeric score, and prime contractors (plus contracting officers) use that score to evaluate whether to award work.

The scoring rule is punitive by design. You start at 110 points — one per implemented control — and subtract points for every control you haven't fully implemented. The deductions aren't uniform: some controls are worth 1 point, some 3, and a small set are worth 5. The maximum possible score is 110. Anything below zero is common.

A negative score isn't a bug in the math. It's the DoD's way of saying "you have serious gaps, and we want contracting officers to see how serious." I've seen contractors submit scores of -80, -120, even lower. If you're at -80, you have work to do, but you're not in unique territory.

Your SPRS score lives in SPRS and gets refreshed when you update it. Primes will often ask for it in teaming agreements or RFQ responses. Some contracts require a floor — an SPRS score of at least X to remain eligible. That floor is creeping up.

## Self-assessment vs. C3PAO

CMMC Level 2 comes in two flavors:

**Self-assessment.** You run the assessment yourself, document your implementation status, calculate your SPRS score, and submit it. This is the path for contracts that don't require third-party certification.

**C3PAO assessment.** A Certified Third-Party Assessment Organization runs the assessment for you. They come in, verify each control, issue findings, and certify your result. This is required for contracts the DoD designates as high-priority — which includes most programs that handle significant CUI.

How do you know which you need? Read the contract. The CMMC requirement will be spelled out in a DFARS clause — typically 252.204-7021 when C3PAO is required. If your contract is silent, you're probably in the self-assessment lane. If it's not silent, take the language at face value.

Here's the tactical point most contractors miss: **even if you're in the self-assessment lane, prepare as if C3PAO is coming.** The framework is the same. The documentation requirements are the same. The evidence expectations are the same. The only thing that changes is who runs the assessment. If you rely on the latitude of self-assessment to cut corners, you'll fail the first time a contract pulls you into the C3PAO lane — and you won't get 90 days of warning.

## What it actually costs

The honest answer: it depends on where you're starting from. But here are the buckets I see:

**DIY with structured tools — $147 to $500.** A self-assessment workbook ([the one I build](/cmmc-workbook) is $147), a couple of NIST publications, and maybe a POA&M template. Realistic if you have internal IT capacity, a security-minded FSO or IT manager, and willingness to invest 80–200 labor hours over a few months.

**Managed services or a boutique consulting firm — $15,000 to $50,000.** Includes a gap assessment, remediation recommendations, sometimes documentation drafting. The firm doesn't implement the controls for you — they tell you what to implement and help you plan it. You still do the work.

**Full-service big-firm engagement — $75,000 to $250,000.** Soup-to-nuts: gap assessment, implementation support, policy drafting, staff training, and dress rehearsal before a C3PAO. Reasonable for a 500-person contractor with material CUI exposure and no internal security staff. Gross overkill for a 40-person shop.

**C3PAO assessment fees — $30,000 to $100,000.** Separate from the above. This is what you pay the certifying body to assess you. Pricing varies by scope (size of your CUI boundary), organizational complexity, and geographic location. Get quotes from at least three C3PAOs before you commit.

**The cost nobody quotes: internal labor.** Whoever drives your CMMC effort — usually an IT manager or an FSO — is going to spend somewhere between 100 and 600 hours on this. Burden that at your fully-loaded rate and it dwarfs everything on the list above. Plan for it.

**The cost of not getting certified.** This isn't a finding. It's losing your contracts. If you can't demonstrate Level 2 compliance when a prime asks, they have to drop you from the teaming arrangement. Primes have already started doing this. The pipeline risk is the real cost.

## The timeline (realistic, not marketing)

Nobody's CMMC timeline matches the marketing slides. Here's what actually happens:

**Week 1–4 — Boundary and scoping.** Figure out where your CUI lives. Which systems, which users, which physical locations, which vendors. This is harder than it sounds. Most contractors have CUI in more places than they think (email attachments, file shares, laptops of people who quit three years ago).

**Week 4–12 — Initial self-assessment.** Walk every control, document current state, identify gaps. With a structured workbook, 4–6 weeks part-time. With a spreadsheet and good intentions, 3–6 months.

**Month 3–9 — Remediation.** Close the gaps. This is where timelines blow up. Some controls are quick wins (turn on audit logging, enforce MFA). Others require capital investment (FIPS-validated cryptography, dedicated CUI environments). Ten weeks if your gaps are small, nine months if you're rebuilding your IT stack.

**Month 6–12 — Documentation and SSP.** Finalize your System Security Plan, write or update policies, collect evidence for every control. Runs in parallel with remediation but can't finish until remediation does.

**Month 8–12 — C3PAO scheduling (if required).** C3PAOs are booked out. Two to four months of lead time is typical. Schedule as soon as your remediation is on a credible track.

**Month 10–18 — C3PAO assessment and certification.** The assessment itself is 1–3 weeks on-site, plus a few weeks of pre-assessment prep and post-assessment remediation of findings. Plan for 90 days from kickoff to certificate.

Most small contractors hit 6–12 months end-to-end. Most mid-size contractors hit 12–18. Contractors who try to do it in 90 days don't.

## The five controls that trip up everyone

Certain controls show up in findings again and again. If you get these five right, you're halfway home.

**3.5.3 — Multifactor authentication for network access to privileged accounts.** And, under a related control, for non-privileged accounts. MFA is the number-one gap. "We have MFA on email" isn't enough. You need MFA on network access, remote access, and privileged actions. Token, smart card, or app-based — not SMS.

**3.13.11 — FIPS-validated cryptography.** "We use AES-256" is not the same as "we use a FIPS-validated module." You need cryptography that's been tested under FIPS 140-2 or 140-3. Check the NIST CMVP database for every cryptographic product in your CUI boundary. If it's not on the list, it doesn't count.

**3.12.4 — System Security Plan.** You must have a written SSP describing how you implement every control. No SSP means a full deduction on this control, and it casts doubt on every other control because the assessor has nothing to verify against. Write the SSP early; revise it throughout.

**3.1.12 through 3.1.14 — Remote access.** Three tightly-related controls covering remote session monitoring, cryptographic protection, and routing through managed access control points. If your remote access is "VPN, and that's it," you're partially implemented at best. You need session monitoring (or the ability to), cryptographic protection end-to-end, and an access-control gateway — not just direct VPN to every subnet.

**3.3.1 — Audit logging.** Collecting logs is not the same as reviewing them. Control 3.3.1 requires you to create and retain records sufficient to enable tracking of unauthorized activity. Most contractors collect logs. Few review them. Even fewer document that they review them. The assessor will ask for your log review cadence, the responsible role, and the evidence that reviews happened.

## How to start this week

If you're reading this and feeling behind, here's the week-one plan:

1. **Define your CUI boundary.** Which systems touch CUI? Which users handle it? Which locations store it? Draw a picture. Get it in front of the IT lead and the FSO (if those are different people).

2. **Inventory what you already have.** You probably have more implemented than you think. Group policies, MDM, MFA, firewall rules, acceptable-use policies, incident response plan, SF-312s — all of these map to NIST controls.

3. **Download a structured workbook.** You can build one from the NIST document, but unless you're charging $200/hour, buy one. Every hour you spend formatting a spreadsheet is an hour you're not implementing controls. The [CMMC Level 2 Self-Assessment Workbook](/cmmc-workbook) covers all 110 controls, evidence guidance, assessor insights, a POA&M tracker, and a SPRS score calculator for $147.

4. **Work through the first three families.** Access Control (AC), Awareness and Training (AT), and Audit and Accountability (AU). AC is huge but inventory-heavy; AT is small but easy to document; AU forces you to look at logging cold. Starting here tells you a lot about where the rest of your program stands.

5. **Identify your top 10 gaps and open POA&M entries.** A Plan of Action and Milestones entry for every unimplemented control gives you a paper trail and forces you to commit to a fix date. This is required anyway if you're going to submit a partial score.

6. **Submit (or update) your SPRS score.** Even a bad score is better than no score. Primes can't work with you if they can't see where you stand. An honest -80 with a credible POA&M is more fundable than a vague "we're working on it."

## FAQs

### Is CMMC Level 2 a hard requirement right now, or is it still being rolled out?

The DoD finalized the CMMC 2.0 rule in late 2024, and contract clauses began appearing in 2025. The rollout is phased, meaning not every new contract has a CMMC clause yet — but the number is growing every quarter. If your contracts don't have a clause today, expect one on the next recompete or option year.

### Can I self-assess to Level 2 and still bid on prioritized contracts?

No. Prioritized contracts require a C3PAO assessment. Self-assessment is only sufficient for contracts where the DoD has not designated C3PAO certification. Read your contracts carefully.

### What happens if my SPRS score is negative?

You're still eligible to bid on most contracts — the DoD does not have a universal SPRS floor. However, individual contracts may impose a minimum score, and prime contractors frequently do. A negative score signals to the contracting officer and to primes that you have material gaps.

### Do I need to reassess every year?

Self-assessments should be refreshed at least annually, and whenever there's a material change to your system, your CUI boundary, or the threat landscape. C3PAO certifications are valid for three years.

### How does CMMC Level 2 interact with NISPOM if I'm also a cleared contractor?

NISPOM protects classified information. CMMC protects CUI, which is unclassified but sensitive. You can (and often do) need both — they apply to different information categories. Our [CMMC vs. NISPOM article](/cmmc-for-fsos/cmmc-vs-nispom/) goes deep on how the programs overlap and diverge.

### I'm the FSO. Does CMMC land on my desk, or on IT?

At small contractors (under 100 employees), the FSO and IT manager are often the same person, or they split the role informally. At mid-size contractors, CMMC typically sits with IT with FSO support on personnel security and physical protection controls. At large contractors, there's a dedicated CMMC program manager. Figure out ownership before the clock starts — if nobody owns it, nothing moves.

## What to do this week

- Read your three most active DoD contracts and check for CMMC clauses (DFARS 252.204-7012, 7019, 7020, 7021)
- Write down which systems touch CUI. Include email, file shares, laptops, and anything with VPN access
- Assign an owner — the person who drives CMMC Level 2 to completion. Not a committee; one name
- Pull up your current SPRS score (or submit your first one, even if it's low)
- [Get the CMMC Level 2 Self-Assessment Workbook](/cmmc-workbook) and work the first three control families this week

Level 2 is not a weekend project. But it's also not unknowable — it's 110 controls, documented, in plain English, with evidence you can produce. Start with the boundary, buy a workbook, and start closing gaps. The contractors who get ahead of this keep their contracts. The ones who don't, don't.
