# VISUAL LEARNING REFERENCE LIBRARY STANDARD

Status: REQUIRED CORE MODULE  
Applies to: ALL Mzansi Artisan trade builds  
Mode: OFFLINE-FIRST PWA + OPTIONAL ONLINE VISUAL SUPPORT

## Purpose

Every Mzansi Artisan trade build must include a lightweight visual-learning reference library.

The PWA remains fully usable offline. Video or other online visual resources are supplementary only and are opened only when the learner has internet access.

## Required architecture

Each trade repository must contain a controlled visual-learning reference file, preferably:

`<TRADE>_VISUAL_LEARNING_LIBRARY.md`

The file must map visual resources to the relevant curriculum lesson or module.

Each entry should record:

- trade
- module
- lesson/topic
- resource title
- provider/channel
- URL
- learning purpose
- language
- safety classification
- date checked
- status: ACTIVE / REPLACE / RETIRED

## Governing rules

1. Offline lesson content must remain complete without the video.
2. Online visual resources are optional reinforcement only.
3. Do not cache external video files into the PWA.
4. Do not make learner progress dependent on watching a video.
5. Links must be vetted for relevance, availability and curriculum fit.
6. Prefer low-data, clear and appropriate-language resources where practical.
7. For hazardous trade content, use visual resources for theory, recognition, safety awareness, drawings, inspection, quality or process overview only.
8. Do not use the visual library to provide unsupervised operational instruction for hazardous work.
9. Video content must never replace formal practical training, supervision, assessment or workplace authorisation.
10. The visual-learning library is part of the reusable Mzansi Artisan Core and must be included in every future trade build and audit.

## Integration rule

Every trade build checklist must include:

CURRICULUM CONTENT  
→ OFFLINE LESSON  
→ KNOWLEDGE CHECK  
→ SAFETY BOUNDARY  
→ VISUAL LEARNING REFERENCE  
→ OFFLINE VERIFICATION  
→ FREEZE

A trade is not considered fully content-complete until its visual-learning reference layer has been created or explicitly marked as no suitable vetted resource available.
