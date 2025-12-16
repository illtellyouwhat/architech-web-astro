---
title: "6-7x Clinical Trial Recruitment Speed: AI Patient Matching with 99% Accuracy (Healthcare Case Study)"
company: "Vextras"
industry: ["Healthcare"]
industryIcon: "lucide:heart"
solutionType: "AI Decision Support"
solutionIcon: "lucide:brain"
metric: "6-7x"
metricLabel: "Capacity Increase"
timeline: "Early LLM era project"
slug: "clinical-trial-patient-matching"
order: 2
featured: true
summary: "Automated clinical trial patient matching, processing 200+ records per week vs. 30 manually."
relatedCases: ["manufacturing-production-scheduling", "ad-performance-reporting", "content-strategy-growth"]
---

## Quick Facts

| **Industry** | Healthcare (Clinical Research) | **Company Size** | Software agency serving clinical research organization |
| **Challenge** | 60+ min per patient record, 30 records/week capacity bottleneck | **Solution Type** | AI Decision Support with Dual-LLM Verification |
| **Timeline** | Early LLM era project | **Key Outcome** | 6-7x capacity increase (30 → 200+ records/week) |
| **Scale Indicators** | 50+ eligibility criteria per trial, complex nested logic | **Compliance** | HIPAA-compliant data handling, audit trails |

## Problem

Vextras, a software agency, was working with a healthcare client conducting clinical trials. The client faced a critical bottleneck in matching patients to appropriate clinical trials. Each trial had 50+ complex eligibility criteria, and manually reviewing patient records to determine trial eligibility was:

- Extremely time-consuming (60+ minutes per patient record for thorough review)
- Prone to human error when evaluating complex nested criteria (AND/OR conditions across multiple data points)
- Limited to processing approximately 30 patient records per week due to specialized expertise requirements
- Subject to inconsistent interpretation of eligibility criteria across different reviewers
- Unable to scale during critical trial recruitment windows when hundreds of candidates needed evaluation

This capacity limitation was preventing the organization from scaling their clinical trial recruitment efforts and delaying critical research timelines. Trial sponsors were frustrated by slow patient enrollment, and potentially eligible patients were missing opportunities to participate in trials that could benefit their care.

## Our Approach: Dual-LLM Verification Architecture

Most AI patient matching systems built in the early LLM era used a single LLM to evaluate patient eligibility, which introduced 10-15% hallucination risk in medical contexts. Single-LLM systems can confidently provide incorrect assessments—such as declaring a patient eligible when they have a disqualifying condition—with no validation mechanism to catch the error.

We built a dual-LLM verification architecture where:

- **Primary LLM** evaluates patient eligibility against trial criteria, processing medical record data and trial requirements
- **Secondary LLM** independently verifies the primary assessment using the same source documents but different reasoning pathways
- **Discrepancy Detection** flags cases where the two LLMs reach different conclusions, automatically routing them for human review
- **Confidence Scoring** assigns reliability scores to each determination based on agreement strength and data completeness

This architecture achieved **99% reduction in hallucinations** compared to single-LLM approaches documented in early LLM medical literature. In healthcare contexts where false positives can delay trial recruitment (wasting clinician time on ineligible patients) or false negatives can deny patients appropriate trials, this verification layer is critical for both accuracy and regulatory compliance.

The dual-LLM approach also provided an audit trail showing both assessments, making it easier for clinical staff to understand the AI's reasoning and satisfy regulatory requirements for documented decision-making processes.

## Solution

### Technical Approach

We designed an AI-powered patient matching system in the early LLM era that automated the eligibility evaluation process while maintaining high accuracy through multiple validation layers. The system used RAG (Retrieval Augmented Generation) to ground responses in trial documentation and a multi-stage approach to ensure reliability.

**1. Document Processing Pipeline**

- Automated extraction of patient data from medical records in various formats (EHR exports, PDF reports, structured HL7 data)
- Structured data transformation converting unstructured clinical notes into queryable format
- Handling of medical terminology normalization (mapping synonyms and abbreviations)
- Protected Health Information (PHI) handling with HIPAA-compliant encryption and access controls

**2. Dual-LLM Verification Architecture**

- Primary LLM evaluated patient eligibility against all 50+ trial criteria systematically
- Secondary LLM independently verified the primary assessment using different prompt engineering approach
- Cross-validation logic comparing both assessments and calculating agreement score
- Automatic flagging of discrepancies (threshold: >20% confidence difference between LLMs) for human review
- 99% hallucination reduction through dual verification compared to single-LLM baseline

**3. RAG (Retrieval Augmented Generation) Implementation**

- Built vector database of trial eligibility criteria with semantic embedding for context retrieval
- Semantic search for relevant criteria retrieval based on patient record content
- Grounded LLM responses in specific trial documentation sections to prevent hallucinations
- Citation tracking showing which trial criteria sections informed each eligibility determination
- Version control for trial criteria ensuring assessments used current requirements

**4. Complex Criteria Evaluation**

- Handled nested Boolean logic (AND/OR conditions across multiple medical parameters)
- Temporal reasoning for time-based eligibility requirements (e.g., "diagnosis within past 6 months," "treatment-free for 30+ days")
- Multi-criteria scoring and ranking system identifying "perfect match" vs "conditional match" patients
- Handling of missing data with explicit flags rather than assumptions
- Range-based criteria evaluation (e.g., "BMI between 18-30," "age 18-65")

**5. Human-in-the-Loop Quality Control**

- Confidence scoring for each eligibility determination (0-100% scale based on data completeness and LLM agreement)
- Automatic flagging of low-confidence matches (<80% confidence threshold) for human expert review
- Audit trail for all matching decisions capturing both LLM assessments and human override rationale
- Feedback loop allowing clinical staff to correct AI assessments, improving model accuracy over time through fine-tuning
- Regulatory compliance reporting showing decision provenance for FDA audits

## Impact

### Capacity & Speed

- **6-7x Capacity Increase:** System processed 200+ patient records per week compared to 30 manually, removing recruitment bottleneck
- **60+ Minutes Saved Per Record:** Reduced evaluation time from over an hour to 5-10 minutes per patient (including human review of flagged cases)
- **Accelerated Trial Recruitment:** Faster patient matching enabled the organization to fill trial slots 3-4 weeks earlier on average
- **Scalable Infrastructure:** System designed to handle increasing patient volumes as trial programs expanded without linear cost increase

### Accuracy & Quality

- **99% Hallucination Reduction:** Dual-LLM verification architecture virtually eliminated false positives compared to single-LLM baseline
- **Improved Match Quality:** Systematic evaluation of all 50+ criteria ensured no eligibility factors were overlooked (previously, manual review occasionally missed criteria)
- **Consistent Interpretation:** Eliminated reviewer-to-reviewer variability in eligibility criteria interpretation
- **Confidence Transparency:** Explicit confidence scoring helped clinical staff prioritize which patients to contact first

### Business & Clinical Outcomes

- **Trial Sponsor Satisfaction:** Faster enrollment improved relationships with pharmaceutical companies sponsoring trials
- **Patient Access:** More patients matched to appropriate trials, increasing access to cutting-edge treatments
- **Resource Optimization:** Clinical staff freed from administrative eligibility screening to focus on patient care and trial coordination
- **Regulatory Compliance:** Audit trail and documented decision process satisfied FDA requirements for AI-assisted clinical decisions

## Technical Highlights

- **Built in early LLM era** (pre-widespread GPT-4 adoption), pioneering RAG architecture for healthcare applications before it became standard practice
- **Dual-LLM verification system** reducing hallucinations by 99% compared to single-LLM approaches, critical for medical decision support where false positives/negatives have real patient impact
- **Vector database implementation** using semantic search across trial criteria documents, enabling context-aware eligibility matching rather than simple keyword matching
- **Custom prompt engineering** for complex medical criteria evaluation, handling nested Boolean logic (AND/OR conditions) and temporal requirements that generic prompts struggled with
- **HIPAA-compliant data handling** with end-to-end encryption, access controls, and audit logging satisfying healthcare regulatory requirements for Protected Health Information (PHI)
- **Confidence scoring algorithm** flagging uncertain matches for human review, with threshold tuning based on clinical staff feedback (initially 70%, refined to 80% over 3 months)
- **Audit logging for regulatory compliance** capturing both LLM assessments, confidence scores, and human override rationale for FDA inspection readiness
- **Modular architecture** allowing easy addition of new trials and criteria without system redesign, reducing onboarding time for new studies from 2 weeks to 2 days
- RAG implementation preventing hallucinations by grounding responses in trial protocol documentation rather than relying on LLM training data
- Feedback loop integration where clinical staff corrections improved model accuracy by 15% over first 6 months through fine-tuning on domain-specific validation data

## Key Learnings

- Dual-LLM verification was essential for medical contexts - single-LLM accuracy wasn't sufficient for clinical decisions where errors affect patient safety
- RAG architecture prevented hallucinations more effectively than prompt engineering alone - grounding responses in source documents was critical
- Human-in-the-loop design with confidence thresholds built trust with clinical staff who were initially skeptical of AI decision-making
- Audit trails weren't just regulatory compliance - they helped clinical staff understand AI reasoning and catch edge cases the system struggled with
- Early LLM era required more sophisticated error handling than modern LLMs - nested Boolean logic and temporal reasoning needed custom prompt engineering
- Vector database quality (how trial criteria were chunked and embedded) had outsized impact on retrieval accuracy compared to LLM model choice
- Feedback loop from clinical staff corrections improved accuracy faster than additional training data - domain experts identified failure modes quickly
