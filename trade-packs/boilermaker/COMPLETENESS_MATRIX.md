# Boilermaker Trade Completeness Matrix

**MAF stage:** MAF-02-07  
**Trade Pack:** ZA-BOILERMAKER-001  
**Mode:** BROWNFIELD — Existing Asset First  
**Status:** PARTIAL — audit baseline established  
**Rule:** Successful ingestion is not evidence of trade completeness.

## Baseline evidence inspected

- Existing repository: `marcdiedricks/mzansi-boilermaker`
- Controlled master source: `00_BOILERMAKER_MASTER_CONTROL.md`
- Existing curriculum reconciliation files R01–R03
- Existing learner-facing repository file inventory
- Current pilot Trade Pack in `mzansi-artisan-core`

The existing master control records the current qualification baseline as National Occupational Certificate: Boilermaker, SAQA 123381, curriculum 651302-000-01-00, NQF 4, 540 credits. This inherited baseline must still pass MAF source-authority re-verification before authoritative Factory release.

## Authoritative target recorded in existing controlled master

- Knowledge Modules: **14** modules / **162 credits**
- Practical Skill Modules: **9** modules / **183 credits**
- Work Experience Modules: **5** modules / **195 credits**
- Total: **540 credits**

## Brownfield inventory finding

The existing repository contains substantial reusable infrastructure and learner content. The current file inventory visibly includes learner pages for KM-01, KM-02, KM-03 and KM-04, including multiple lesson pages. No learner-facing KM-05 through KM-14 pages were identified in the inspected repository inventory. Practical Skill and Work Experience components are represented in the controlled curriculum baseline, but complete learner-facing PM/WM companion coverage has not yet been demonstrated by this audit.

This is an inventory finding only. It does not yet judge the educational quality or authoritative currency of each existing lesson.

## Completeness matrix — baseline

| Requirement | Target | Existing evidence | Verification | Reconciliation | Current completion |
|---|---:|---|---|---|---|
| Trade identity | 1 controlled identity | Master control + Trade Pack | Re-verification required | UPDATE/KEEP pending | PARTIAL |
| Current qualification identity | SAQA 123381 baseline | Master control | Re-verification required | UPDATE/KEEP pending | PARTIAL |
| Legacy separation | SAQA 93626 separated | Explicit master-control rule | Audit required across content | KEEP/UPDATE | PARTIAL |
| Knowledge modules | 14 | KM-01 to KM-04 learner assets visibly present | Per-module audit required | MIGRATE/UPDATE/GAP | PARTIAL |
| KM-01 | Required | Existing module + lesson assets | Content/source audit required | MIGRATE/UPDATE | PARTIAL |
| KM-02 | Required | Existing module + lesson assets | Content/source audit required | MIGRATE/UPDATE | PARTIAL |
| KM-03 | Required | Existing module + lesson assets | Content/source audit required | MIGRATE/UPDATE | PARTIAL |
| KM-04 | Required | Extensive existing module/lesson assets | Reconciliation already partly documented; re-verification required | MIGRATE/UPDATE | PARTIAL |
| KM-05 to KM-14 | 10 modules | No learner-facing pages demonstrated in inspected inventory | Required | GAP unless other assets are discovered | MISSING/UNKNOWN |
| Practical Skill modules | 9 / 183 credits | Curriculum baseline exists | Learner-support coverage not yet demonstrated | DISCOVER/MIGRATE/GAP | UNKNOWN |
| Work Experience modules | 5 / 195 credits | Curriculum baseline exists | Learner-support coverage not yet demonstrated | DISCOVER/MIGRATE/GAP | UNKNOWN |
| Assessment/formal pathway | Required | Master-control boundaries exist; quizzes in existing lessons | Full mapping audit required | MIGRATE/UPDATE/GAP | PARTIAL |
| Safety | Required | Safety rules + lesson safety controls exist | Module-by-module audit required | MIGRATE/UPDATE/GAP | PARTIAL |
| RPL/ARPL journey | Applicable | Master-control boundaries/evidence features exist | Journey coverage audit required | MIGRATE/UPDATE/GAP | PARTIAL |
| Learner progress/state | Product requirement | Existing PWA infrastructure | Proven legacy asset; Core migration required | MIGRATE | PARTIAL |
| Evidence handling | Product requirement | Existing evidence/attachment/review infrastructure | Proven legacy asset; Core migration required | MIGRATE | PARTIAL |
| Offline operation | Product requirement | Existing PWA infrastructure + new Core/Trade Pack offline test PASS | Further full-product testing required | KEEP/MIGRATE | PARTIAL |
| Learning checks | Product requirement | Present in existing lesson assets | Whole-curriculum coverage audit required | MIGRATE/UPDATE/GAP | PARTIAL |
| Visual learning/media | Product requirement where suitable | Existing lesson video controls/assets | Link relevance/currency audit required | MIGRATE/UPDATE/GAP | PARTIAL |
| Terminology/localisation | Product requirement | Some existing treatment; complete pack not established | Audit required | MIGRATE/GAP | PARTIAL |
| Multilingual coverage | Scoped requirement | Not demonstrated as complete | Audit required | GAP/PHASED | PARTIAL |
| Technical acceptance | Required | MAF-02-05 offline Core integration PASS | Full Companion acceptance not yet run | CONTINUE TESTING | PARTIAL |

## Current conclusion

**BOILERMAKER IS NOT COMPLETE.**

The existing product is a valuable brownfield asset with substantial reusable work, but the current evidence does not establish complete coverage of the occupational target or the complete Artisan Journey Companion product scope.

No percentage-complete figure is assigned yet because that would create false precision before each required curriculum component has been mapped and verified.

## Next controlled audit

The next step is **not to write new lessons**.

MAF must first perform a module-level reconciliation of the existing Knowledge Module assets against the 14-module target, beginning with the material already present. Each item will be marked:

**KEEP / MIGRATE / UPDATE / REJECT / GAP**

Only after this mapping may MAF research or build missing content.

> **PRESERVE THE WORK. REVERIFY THE TRUTH. MEASURE THE WHOLE. BUILD ONLY THE GAPS.**
