# Boilermaker Knowledge Module Reconciliation

**MAF stage:** MAF-02-08  
**Trade Pack:** ZA-BOILERMAKER-001  
**Mode:** BROWNFIELD — Existing Asset First  
**Status:** AUDIT BASELINE — no new lessons created

## Purpose

Classify the existing Boilermaker Knowledge Module work against the controlled 14-module / 69-lesson planning baseline before any new content is built.

This reconciliation uses the existing Boilermaker repository, its controlled Master Control, R01 and R02 reconciliation records, and the current MAF Trade Pack. It preserves existing work but does not automatically treat inherited content as currently authoritative.

## Controlled knowledge target

Existing R01/R02 established this finite first-pass learner map:

| Module | Target lessons |
|---|---:|
| KM-01 | 4 |
| KM-02 | 2 |
| KM-03 | 4 |
| KM-04 | 9 |
| KM-05 | 5 |
| KM-06 | 10 |
| KM-07 | 4 |
| KM-08 | 3 |
| KM-09 | 3 |
| KM-10 | 5 |
| KM-11 | 5 |
| KM-12 | 5 |
| KM-13 | 4 |
| KM-14 | 6 |
| **TOTAL** | **69** |

The count is a planning baseline and remains subordinate to authoritative curriculum verification.

## Brownfield reconciliation

| Module | Existing learner assets found | Existing reconciliation evidence | MAF classification | Reason / next treatment |
|---|---|---|---|---|
| KM-01 | Yes — module page + four lesson pages | R01 maps four official KTs and four target lessons | **MIGRATE + UPDATE/VERIFY** | Strong reusable asset set. Audit each of four lessons against KT/IAC/source/safety/media requirements before KEEP can be assigned. |
| KM-02 | Yes — module page + two lesson pages | R01 maps two official KTs and two target lessons | **MIGRATE + UPDATE/VERIFY** | Correct target density now exists as learner assets; verify that previously identified safety-topic gaps were actually resolved. |
| KM-03 | Yes — module page + four lesson pages | R01 maps four official KTs and four target lessons | **MIGRATE + UPDATE/VERIFY** | Strong reuse candidate. Verify tools, machines, CNC and materials coverage and all media/safety boundaries. |
| KM-04 | Yes — substantial legacy A–J plus reconciled lesson assets | R01 found A–J did not map cleanly and established nine-KT architecture; R03 exists | **MIGRATE + UPDATE/VERIFY** | Do not discard legacy work. Reuse within the official nine-topic structure. Pilot Lesson 1 already migrated to UTP but remains re-verification-required. |
| KM-05 | No learner-facing module/lesson assets demonstrated in inspected repository | R02 defines five target lessons | **GAP — AFTER DISCOVERY CONFIRMATION** | Search other legacy sources/knowledge bases before researching or writing. |
| KM-06 | No learner-facing module/lesson assets demonstrated | R02 defines ten target lessons | **GAP — AFTER DISCOVERY CONFIRMATION** | High-hazard module. Existing assets must be searched first; any future learning remains theory/recognition and requires strict safety verification. |
| KM-07 | No learner-facing module/lesson assets demonstrated | R02 defines four target lessons from one dense KT | **GAP — AFTER DISCOVERY CONFIRMATION** | Search legacy sources before build. Preserve four-slice learner architecture unless authoritative verification changes it. |
| KM-08 | No learner-facing module/lesson assets demonstrated | R02 defines three target lessons | **GAP — AFTER DISCOVERY CONFIRMATION** | Search existing knowledge assets before new research. |
| KM-09 | No learner-facing module/lesson assets demonstrated | R02 defines three target lessons | **GAP — AFTER DISCOVERY CONFIRMATION** | Search existing knowledge assets before new research. |
| KM-10 | No learner-facing module/lesson assets demonstrated | R02 defines five target lessons | **GAP — AFTER DISCOVERY CONFIRMATION** | Search existing assets; retain ordinary-Android accessibility emphasis. |
| KM-11 | No learner-facing module/lesson assets demonstrated | R02 defines five target lessons and records source-code inconsistency risk | **GAP + AUTHORITY REVERIFY** | Do not build until source inconsistency is resolved/recorded under Factory provenance rules. |
| KM-12 | No learner-facing module/lesson assets demonstrated | R02 defines five target lessons and records source-code inconsistency risk | **GAP + AUTHORITY REVERIFY** | Same source-integrity control as KM-11. |
| KM-13 | No learner-facing module/lesson assets demonstrated | R02 defines four target lessons and records source-code inconsistency risk | **GAP + AUTHORITY REVERIFY** | Same source-integrity control as KM-11/KM-12. |
| KM-14 | No learner-facing module/lesson assets demonstrated | R02 defines six target lessons | **GAP — AFTER DISCOVERY CONFIRMATION** | High-risk lifting/slinging content. Search existing assets first; future lessons remain theory/recognition only. |

## Key finding

The brownfield repository is **not an empty or failed build**. It already contains a meaningful learner-facing foundation for KM-01 through KM-04, and R01/R02 have already done valuable curriculum architecture work for all 14 KMs.

However, R02 itself explicitly states that it establishes the architecture and **does not create the KM-05 to KM-14 learner lessons**. Therefore MAF must not confuse a complete curriculum map with complete learner content.

## Current Knowledge Component state

- **Architecture mapped:** KM-01 to KM-14 — 14/14
- **Planned learner architecture:** 69 first-pass lessons
- **Learner-facing assets visibly demonstrated in repository:** KM-01 to KM-04
- **KM-05 to KM-14 learner content:** not demonstrated in the inspected repository
- **Authoritative MAF re-verification:** still required
- **Knowledge component status:** **PARTIAL**

No percentage-complete claim is made because individual lesson verification has not yet been completed and other existing asset sources have not yet been exhausted.

## Mandatory next gate

Before any KM-05 to KM-14 content is researched or written:

1. Search the wider existing Mzansi Artisan legacy asset set for Boilermaker material outside this repository, including prior knowledge bases/documents if available.
2. Audit KM-01 to KM-04 lesson files against the controlled R01/R03 mappings.
3. Re-verify the current authoritative curriculum/source baseline.
4. Only then convert confirmed gaps into Factory research/build tasks.

## Control principle

> **A curriculum map tells us what must exist. An asset audit tells us what already exists. Verification tells us what may be trusted. Only the difference becomes new work.**
