# MZANSI ARTISAN FACTORY — TRADE MASTER REGISTER

**Status:** ACTIVE CENTRAL CONTROL  
**Created:** 2026-09-23  
**Purpose:** Permanent continuity register for all Mzansi Artisan trade PWAs.

## GOVERNING RULE

Every trade remains a separate product, repository and PWA.

The Factory does **not** absorb or rebuild working trade apps.

The Factory is the central control room that records where each trade is, which repository and Master Control govern it, what has already passed, and the **next real gate only**.

## BUILD GOVERNANCE

- **Mzansi Build Intelligence = HOW WE BUILD**
- **Mzansi Build Foundry = WHAT WE REUSE**
- **Mzansi Artisan Factory = CENTRAL TRADE CONTROL**
- **Individual trade repository = ACTUAL PRODUCT**

## MANDATORY CONTINUITY SEQUENCE

Before any trade is resumed:

**FACTORY REGISTER → TRADE REPOSITORY → TRADE MASTER CONTROL → CURRENT STATUS → NEXT REAL GATE ONLY**

After a meaningful milestone, update exactly:
1. the trade's own Master Control; and
2. this Factory Trade Master Register.

Never rely on chat memory alone for build state.

## NO-REBUILD RULE

**EXISTING BUILD → AUDIT → IDENTIFY ONLY REAL GAPS → COMPLETE ONE GATE AT A TIME → TEST → VERIFY → FREEZE → STOP**

Do not:
- rebuild verified working capability;
- repeat passed tests without evidence of a defect/change;
- add features merely because they are possible;
- deploy to Netlify unless a real milestone change requires it;
- merge multiple trade products into one giant application.

## CURRENT CONTROLLED TRADE REGISTER

| Trade | Product / Repository | Trade Master Control | Current trade status | Factory continuity status | Next real action |
|---|---|---|---|---|---|
| Boilermaker | `marcdiedricks/mzansi-boilermaker` | Existing trade Master Control | **COMPLETED / FROZEN** | REGISTERED | STOP unless verified defect/source change/new approved scope |
| Welder | `marcdiedricks/mzansi-welder` | Existing trade Master Control | **COMPLETED / FROZEN** | REGISTERED | STOP unless verified defect/source change/new approved scope |
| Diesel Mechanic | `marcdiedricks/diesel-mechanic-companion` | `00_DIESEL_MECHANIC_MASTER_CONTROL.md` | **COMPLETED / FROZEN — 2026-09-23** | REGISTERED | STOP unless verified defect/source change/new approved scope |
| SparkyPrep / Electrician | `marcdiedricks/mzansi-electrician` | `00_ELECTRICIAN_MASTER_CONTROL.md` | **COMPLETED / FROZEN** | REGISTERED | STOP unless verified defect/source change/new approved scope |
| Fitter & Turner | `marcdiedricks/fitt-turn-companion-za` | No controlled Mzansi Master Control found yet | **EXISTING + DEPLOYED — NOT YET FACTORY-AUDITED** | DISCOVERED | Next candidate: audit existing build against authoritative SA qualification + Build Intelligence + Foundry; build only real gaps |
| Automotive / Motor Mechanic | `marcdiedricks/autotech-companion` | No controlled Mzansi Master Control found yet | **EXISTING + DEPLOYED — NOT YET FACTORY-AUDITED** | DISCOVERED | Audit after Fitter & Turner unless priority changes |
| Plumber | No matching GitHub repository or Netlify trade project found in current inventory | — | NOT FOUND IN CURRENT GITHUB/NETLIFY INVENTORY | UNREGISTERED | Re-check only if another known name/source is supplied |
| Solar | No matching GitHub repository or Netlify trade project found in current inventory | — | NOT FOUND IN CURRENT GITHUB/NETLIFY INVENTORY | UNREGISTERED | Re-check only if another known name/source is supplied |
| Other trade products | Separate repositories | Must have trade-specific Master Control | NOT YET REGISTERED HERE | DISCOVER EXISTING FIRST | Register one at a time before further build work |

## CURRENT COMPLETED TRADE COUNT

**4 trades completed/frozen:**
1. Boilermaker
2. Welder
3. SparkyPrep / Electrician
4. Diesel Mechanic

These four must not be sent back into closeout unless a real reopen reason exists.

## VERIFIED DIESEL MECHANIC RECORD

- Repository: `marcdiedricks/diesel-mechanic-companion`
- Live PWA: https://mzansi-diesel-mechanic.netlify.app
- Qualification control: Occupational Certificate: Diesel Mechanic
- SAQA ID: 117237
- Curriculum code: 653306-000-01-00
- NQF Level: 4
- Credits: 544
- Final status: **FROZEN**
- Freeze date: 2026-09-23
- Reopen only for verified defect, material source/qualification change, approved new scope, or platform/runtime breakage.

## CONTINUITY CHECKLIST FOR EVERY FUTURE SESSION

When the user says "continue [trade]":

1. Open this Factory Trade Master Register.
2. Confirm the named trade.
3. Open the exact existing repository.
4. Read that trade's Master Control.
5. Check whether it is already frozen.
6. If frozen, STOP unless there is a valid reopen reason.
7. If active, identify **one real outstanding gate only**.
8. Complete/test/verify that gate.
9. Update the trade Master Control.
10. Update this Factory register.
11. Freeze when all mandatory gates pass.
12. STOP.

## FACTORY COMPLETENESS CONTROL

This register works together with:

`factory/TRADE_COMPLETENESS_GATE.md`

The Factory must not declare a trade complete merely because an app exists or has many modules. Completion must be backed by the verified authoritative occupational structure, product completeness, technical acceptance and the trade's own controlled Master Control.

## PERMANENT PRINCIPLE

> **SEPARATE PRODUCTS. CENTRAL CONTROL. ONE SOURCE OF STATUS. NO LOST CONTINUITY.**
