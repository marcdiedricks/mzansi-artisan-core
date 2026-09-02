# MAF Trade Completeness Gate

**Version:** MAF-TCG-0.1  
**Status:** ACTIVE — mandatory factory gate

## Purpose

Successful ingestion does **not** mean a trade, Trade Pack, or Artisan Companion is complete.

Before MAF expands, freezes, pilots, or describes an artisan product as complete, it must measure the existing assets against the verified authoritative occupational requirements for that trade.

## Mandatory sequence

**DISCOVER EXISTING → INGEST → AUDIT → VERIFY → MEASURE COMPLETENESS → IDENTIFY GAPS → BUILD ONLY THE GAPS → TEST → FREEZE**

## Completeness dimensions

### 1. Occupational completeness
Does the Trade Pack cover the complete verified occupational/qualification structure, including all applicable knowledge, practical skill, workplace experience, assessment and formal pathway requirements?

### 2. Product completeness
Does each required component have the necessary learner-facing material, learning checks, safety treatment, media/resource handling, journey mapping, terminology/localisation treatment and provenance?

### 3. Technical completeness
Does the resulting Artisan Companion function correctly on the target devices and conditions, including offline operation, progress/state persistence, evidence handling, installation/PWA behaviour and required acceptance tests?

## Reconciliation statuses

Every discovered requirement or existing asset must receive one of these statuses:

- **KEEP** — existing material is suitable and verified for reuse.
- **MIGRATE** — suitable existing material must be converted into the current Trade Pack structure.
- **UPDATE** — useful material exists but requires correction or currency work.
- **REJECT** — material must not be used.
- **GAP** — required material is absent and must be researched/built.

## Completeness Matrix

For every trade, maintain at minimum:

| Requirement | Authoritative requirement | Existing asset | Verification | Reconciliation | Completion |
|---|---|---|---|---|---|
| Trade identity | Required | Yes/No | Pending/Verified/Failed | KEEP/MIGRATE/UPDATE/REJECT/GAP | Complete/Partial/Missing |
| Qualification/governance | Required | Yes/No | Pending/Verified/Failed | status | state |
| Knowledge components | Required | Yes/No | Pending/Verified/Failed | status | state |
| Practical skill components | Required | Yes/No | Pending/Verified/Failed | status | state |
| Workplace experience | Required | Yes/No | Pending/Verified/Failed | status | state |
| Assessment/formal pathway | Required | Yes/No | Pending/Verified/Failed | status | state |
| Safety coverage | Required | Yes/No | Pending/Verified/Failed | status | state |
| Learner journey | Required | Yes/No | Pending/Verified/Failed | status | state |
| Learning content/checks | Required | Yes/No | Pending/Verified/Failed | status | state |
| Media/resources | As applicable | Yes/No | Pending/Verified/Failed | status | state |
| Terminology/languages | As scoped | Yes/No | Pending/Verified/Failed | status | state |
| Offline/technical acceptance | Required | Yes/No | Tested/Failed | status | state |

## Completion rule

MAF must never infer completeness from the number of files, lessons, modules or existing features.

The target is established by the **verified authoritative occupational structure and the approved product scope**.

A trade remains incomplete while any mandatory requirement is:
- unverified,
- missing,
- outdated,
- rejected without replacement,
- or failing required technical acceptance.

## Factory statuses

**INGESTED → AUDITED → PARTIAL → GAPS IDENTIFIED → COMPLETING → VERIFIED → COMPLETE → PILOT FROZEN**

`COMPLETE` may only be assigned after all three completeness dimensions pass their mandatory gates.

## Boilermaker current position

The current Boilermaker Trade Pack is a **brownfield pilot**. Its successful Core ingestion and offline loading prove the architecture, not trade completeness.

It must remain non-complete until the Boilermaker Completeness Matrix is populated against the verified authoritative occupational structure and all mandatory gaps are resolved.

## Factory principle

> **PRESERVE THE WORK. REVERIFY THE TRUTH. MEASURE THE WHOLE. BUILD ONLY THE GAPS.**
