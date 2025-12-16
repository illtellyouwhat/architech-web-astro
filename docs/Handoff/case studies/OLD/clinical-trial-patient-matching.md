---
title: "Vextras: AI-Powered Clinical Trial Patient Matching"
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

## Problem

Vextras, a software agency, was working with a healthcare client conducting clinical trials. The client faced a critical bottleneck in matching patients to appropriate clinical trials. Each trial had 50+ complex eligibility criteria, and manually reviewing patient records to determine trial eligibility was:

- Extremely time-consuming (60+ minutes per patient record)
- Prone to human error when evaluating complex nested criteria
- Limited to processing approximately 30 patient records per week

This capacity limitation was preventing the organization from scaling their clinical trial recruitment efforts and delaying critical research timelines.

## Solution

### Technical Approach

We designed an AI-powered patient matching system in the early LLM era that automated the eligibility evaluation process while maintaining high accuracy. The system used a multi-stage approach to ensure reliability:

**1. Document Processing Pipeline**

- Automated extraction of patient data from medical records
- Structured data transformation for LLM processing
- Handling of various medical document formats

**2. Dual-LLM Verification Architecture**

- Primary LLM evaluated patient eligibility against trial criteria
- Secondary LLM independently verified the primary assessment
- Flagged discrepancies for human review
- Achieved 99% reduction in hallucinations through cross-validation

**3. RAG (Retrieval Augmented Generation) Implementation**

- Built vector database of trial eligibility criteria
- Semantic search for relevant criteria retrieval
- Grounded LLM responses in specific trial documentation

**4. Complex Criteria Evaluation**

- Handled nested Boolean logic (AND/OR conditions)
- Temporal reasoning for time-based eligibility requirements
- Multi-criteria scoring and ranking system

**5. Human-in-the-Loop Quality Control**

- Confidence scoring for each eligibility determination
- Automatic flagging of low-confidence matches for review
- Audit trail for all matching decisions
- Feedback loop to improve model accuracy over time

## Impact

- **6-7x Capacity Increase:** System processed 200+ patient records per week compared to 30 manually
- **60+ Minutes Saved Per Record:** Reduced evaluation time from over an hour to minutes per patient
- **99% Hallucination Reduction:** Dual-LLM verification architecture virtually eliminated false positives
- **Improved Match Quality:** Systematic evaluation of all 50+ criteria ensured no eligibility factors were overlooked
- **Accelerated Trial Recruitment:** Faster patient matching enabled the organization to fill trial slots more quickly
- **Scalable Infrastructure:** System designed to handle increasing patient volumes as trial programs expanded

## Technical Highlights

- Built in early LLM era, pioneering RAG architecture for healthcare applications
- Dual-LLM verification system to ensure accuracy and reduce hallucinations
- Vector database implementation for semantic search across trial criteria
- Custom prompt engineering for complex medical criteria evaluation
- HIPAA-compliant data handling and encryption
- Confidence scoring algorithm to flag uncertain matches for human review
- Audit logging for regulatory compliance and quality assurance
- Modular architecture allowing easy addition of new trials and criteria
