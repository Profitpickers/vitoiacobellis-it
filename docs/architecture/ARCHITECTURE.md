# Architecture

## Purpose

This document describes the MVP architecture for the Facilitatore Tagaro platform.

The current architecture is documentation-first and implementation-free. It defines the intended structure of the MVP experience without creating code, HTML, backend services, CRM systems, dashboards, automation, or Supabase integrations.

## Repository Structure

The repository is organized around planning, product definition, architecture, business concepts, future ideas, decisions, assets, and operations.

```text
repository
+-- README.md
+-- PROJECT_STATUS.md
+-- ROADMAP.md
+-- CHANGELOG.md
+-- docs
    +-- context
    |   +-- AI_PROJECT_CONTEXT.md
    +-- prd
    |   +-- PRD.md
    |   +-- BUSINESS_FACILITATION_PLATFORM_PRD_TEMPLATE.md
    +-- architecture
    |   +-- ARCHITECTURE.md
    +-- roadmap
    |   +-- ROADMAP.md
    +-- future-ideas
    |   +-- FUTURE_IDEAS.md
    |   +-- BUSINESS_FACILITATION_OS.md
    +-- decisions
    |   +-- DECISIONS_LOG.md
    +-- assets
    |   +-- ASSET_INVENTORY.md
    +-- business
    |   +-- OPPORTUNITY_BACKLOG.md
    |   +-- RELATIONSHIP_CAPITAL_SYSTEM.md
    +-- operations
        +-- NEXT_STEPS.md
```

## Content Structure

The MVP content should be structured around credibility, clarity, commercial context, and contact facilitation.

```text
MVP Content
+-- Identity
|   +-- Vito Iacobellis
|   +-- Sales & Business Development Facilitator
|   +-- Connecting Producers, Distributors and Growth Opportunities
+-- Business Context
|   +-- Masseria Tagaro S.r.l.
|   +-- Locorotondo, Puglia, Italy
|   +-- International winery positioning
+-- Audience
|   +-- Buyers
|   +-- Distributors
|   +-- Importers
|   +-- Ho.Re.Ca.
|   +-- Commercial partners
+-- Trust & Credibility
|   +-- Clear role
|   +-- Professional language
|   +-- Business resources
|   +-- Direct contact path
+-- Calls To Action
    +-- Watch presentation
    +-- Download resources
    +-- Contact via WhatsApp
    +-- Request a conversation
```

## Landing Page Structure

The MVP landing page is a future implementation target described conceptually here. No landing page is created in this phase.

```text
Landing Page
+-- Hero / Introduction
|   +-- Name
|   +-- Role
|   +-- Tagline
|   +-- Primary contact action
+-- Business Context
|   +-- Tagaro overview
|   +-- Location
|   +-- Commercial positioning
+-- Audience Section
|   +-- Buyers
|   +-- Distributors
|   +-- Importers
|   +-- Ho.Re.Ca.
|   +-- Commercial partners
+-- Video Presentation
+-- Resource Center
+-- Contact / Conversation Request
+-- Footer / Basic SEO Content
```

## Digital Business Card Structure

The digital business card should provide a compact and credible identity reference for direct sharing.

```text
Digital Business Card
+-- Identity
|   +-- Vito Iacobellis
|   +-- Sales & Business Development Facilitator
|   +-- Domain: vitoiacobellis.it
+-- Positioning
|   +-- Connecting Producers, Distributors and Growth Opportunities
+-- Business Context
|   +-- Facilitation for Masseria Tagaro S.r.l.
+-- Contact Actions
|   +-- WhatsApp
|   +-- Request a conversation
+-- Supporting Links
    +-- Video presentation
    +-- Business resources
```

## Resource Center Structure

The resource center should help qualified visitors review business materials before making contact.

```text
Resource Center
+-- Company Resources
|   +-- Company profile
|   +-- Brand overview
|   +-- Commercial presentation
+-- Product Resources
|   +-- Catalog
|   +-- Product sheets
|   +-- Certifications
+-- Market Resources
|   +-- Distributor materials
|   +-- Importer materials
|   +-- Ho.Re.Ca. materials
+-- Contact Prompt
    +-- Request details or conversation
```

## Video Center Structure

The video center should provide a simple presentation area that supports clarity and trust.

```text
Video Center
+-- Main Presentation
|   +-- Facilitator introduction
|   +-- Tagaro introduction
|   +-- Commercial opportunity explanation
+-- Supporting Videos
|   +-- Product or winery context
|   +-- Market-specific messages
|   +-- Partner-oriented explanations
+-- Follow-Up Actions
    +-- Download resources
    +-- Contact via WhatsApp
    +-- Request a conversation
```

## Future Dashboard Placeholder

A dashboard is not part of the MVP.

The future dashboard concept may eventually support internal visibility into contacts, resources, opportunities, follow-ups, or relationship activity. This is only a placeholder for later planning.

```text
Future Dashboard
+-- Not in MVP
+-- No implementation
+-- No admin interface
+-- No analytics layer
+-- Requires future approval
```

## Future CRM Placeholder

A CRM is not part of the MVP.

Any future CRM concept should be evaluated only after the MVP has validated the need for structured relationship tracking.

```text
Future CRM
+-- Not in MVP
+-- No contact database
+-- No pipeline management
+-- No lead scoring
+-- No automation
+-- Requires future approval
```

## Future Supabase Placeholder

Supabase is not part of the MVP.

Supabase may be considered only in a future phase if the project requires a database, authentication, file storage, backend functions, or structured operational workflows.

```text
Future Supabase
+-- Not in MVP
+-- No database
+-- No authentication
+-- No storage integration
+-- No backend functions
+-- Requires future approval
```

## MVP Architecture Summary

The MVP architecture is intentionally simple:

```text
Documentation
    |
    v
Product Requirements
    |
    v
Conceptual Architecture
    |
    v
Future Implementation Decision
```

At this stage, the architecture defines what the platform should become, not how it is technically implemented.

## Represented Brands Structure

The MVP focuses on Masseria Tagaro S.r.l. as the first represented brand and commercial context.

Future versions may support additional represented brands, producers, manufacturers, distributors, service providers, or commercial partners.

```text
Represented Brands
+-- Current MVP
|   +-- Masseria Tagaro S.r.l.
|   +-- Winery context
|   +-- Commercial facilitation
+-- Future Expansion
    +-- Additional producers
    +-- Additional manufacturers
    +-- Additional distributors
    +-- Additional service providers
    +-- Additional commercial partners
```

The represented brands structure should remain flexible, but no multi-brand management system is part of the MVP.

## Future Referral Layer

A future referral layer may help organize introductions, commercial referrals, and relationship-based opportunity paths.

This layer is not part of the MVP and should remain exploratory until there is a clear operational need.

```text
Future Referral Layer
+-- Referral source
+-- Introduced contact
+-- Represented brand
+-- Commercial opportunity
+-- Follow-up status
+-- Relationship notes
```

The referral layer should support ethical and transparent business facilitation if introduced in a later phase.

## Asset Flow

The MVP asset flow should describe how business materials are prepared, organized, and made available to qualified visitors.

```text
Asset Flow
+-- Collect assets
|   +-- Company profile
|   +-- Product catalog
|   +-- Video material
|   +-- Certifications
+-- Review assets
|   +-- Accuracy
|   +-- Commercial relevance
|   +-- Language quality
+-- Organize assets
|   +-- Resource center
|   +-- Video center
|   +-- Contact follow-up materials
+-- Share assets
    +-- Public page
    +-- Direct contact
    +-- Conversation request follow-up
```

The asset flow should remain simple, manual, and documentation-led during the MVP phase.

## Scalability Principle

The platform should be designed so that the first Tagaro MVP can later inform a reusable business facilitation framework.

The scalability principle is:

```text
Start simple
    |
    v
Validate real business need
    |
    v
Document repeatable patterns
    |
    v
Expand only when justified
```

Future scalability should come from clear structure, reusable documentation, and validated business workflows rather than premature technical complexity.
