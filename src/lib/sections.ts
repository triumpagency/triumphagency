import { lazy, type ComponentType, type LazyExoticComponent } from "react";

export type SectionDef = {
  slug: string;
  label: string;
  title: string;
  description: string;
  blurb: string;
  group: "Agency" | "Work" | "Proof" | "Resources" | "Start";
  Component: LazyExoticComponent<ComponentType>;
};

/**
 * Single source of truth for every standalone section page.
 * Each component is code-split so visitors only download the section they open.
 */
export const sections: SectionDef[] = [
  {
    slug: "about",
    label: "About",
    title: "About Triumph Agency",
    description:
      "Who we are: a premium Shopify and web development agency building high-performance stores that convert.",
    blurb: "Our story, values and the team behind the builds.",
    group: "Agency",
    Component: lazy(() => import("@/components/AboutSection")),
  },
  {
    slug: "platforms",
    label: "Platforms",
    title: "Platforms We Leverage",
    description:
      "Shopify, WordPress, Wix and GoDaddy expertise for high-performance digital experiences.",
    blurb: "The industry-leading platforms we specialise in.",
    group: "Agency",
    Component: lazy(() => import("@/components/PlatformsSection")),
  },
  {
    slug: "why-us",
    label: "Why Us",
    title: "Why Choose Triumph Agency",
    description:
      "Conversion-first design, technical depth and measurable growth for ambitious eCommerce brands.",
    blurb: "What makes working with us different.",
    group: "Agency",
    Component: lazy(() => import("@/components/WhyChooseSection")),
  },
  {
    slug: "skills",
    label: "Skills",
    title: "Our Skills & Capabilities",
    description:
      "Design, development, performance engineering and conversion optimisation capabilities.",
    blurb: "The disciplines we bring to every project.",
    group: "Agency",
    Component: lazy(() => import("@/components/SkillsSection")),
  },
  {
    slug: "work",
    label: "Work",
    title: "Selected Work",
    description:
      "A selection of Shopify stores, redesigns and eCommerce websites delivered by Triumph Agency.",
    blurb: "A curated look at recent client builds.",
    group: "Work",
    Component: lazy(() => import("@/components/ProjectsSection")),
  },
  {
    slug: "top-projects",
    label: "Top Projects",
    title: "Our Top Projects",
    description:
      "Six flagship Shopify projects with industry, services delivered and outcomes.",
    blurb: "Six flagship builds with full detail.",
    group: "Work",
    Component: lazy(() => import("@/components/TopProjectsSection")),
  },
  {
    slug: "highly-converting",
    label: "Conversions",
    title: "Highly Converting Websites",
    description:
      "Mobile-first, fast-loading websites engineered around proven conversion optimisation principles.",
    blurb: "Sites built around conversion strategy.",
    group: "Work",
    Component: lazy(() => import("@/components/HighlyConvertingWebsitesSection")),
  },
  {
    slug: "previous-projects",
    label: "Archive",
    title: "Previous Projects",
    description:
      "An extensive archive of Shopify stores, landing pages and eCommerce redesigns.",
    blurb: "The wider portfolio archive.",
    group: "Work",
    Component: lazy(() => import("@/components/PreviousProjectsSection")),
  },
  {
    slug: "case-studies",
    label: "Case Studies",
    title: "Shopify Case Studies",
    description:
      "In-depth Shopify case studies covering strategy, execution and revenue impact.",
    blurb: "Deep dives into strategy and impact.",
    group: "Proof",
    Component: lazy(() => import("@/components/CaseStudySection")),
  },
  {
    slug: "results",
    label: "Results",
    title: "Revenue & Conversion Results",
    description:
      "Measurable business growth: conversion rate lifts, revenue gains and speed improvements.",
    blurb: "The numbers behind our work.",
    group: "Proof",
    Component: lazy(() => import("@/components/ResultsSection")),
  },
  {
    slug: "before-after",
    label: "Before & After",
    title: "Before & After Store Redesigns",
    description:
      "See what changes in a Shopify redesign and why those changes drive revenue.",
    blurb: "Redesigns compared side by side.",
    group: "Proof",
    Component: lazy(() => import("@/components/BeforeAfterSection")),
  },
  {
    slug: "testimonials",
    label: "Testimonials",
    title: "Client Testimonials",
    description: "What founders and eCommerce teams say about working with Triumph Agency.",
    blurb: "Words from the people we build for.",
    group: "Proof",
    Component: lazy(() => import("@/components/TestimonialsSection")),
  },
  {
    slug: "process",
    label: "Process",
    title: "Our 6-Step Process",
    description:
      "From discovery to launch: the six-step Triumph Agency Shopify project process.",
    blurb: "How a project runs, step by step.",
    group: "Resources",
    Component: lazy(() => import("@/components/ProcessSection")),
  },
  {
    slug: "guarantees",
    label: "Guarantees",
    title: "Our Guarantees",
    description:
      "Clear commitments on quality, communication and delivery for every engagement.",
    blurb: "The commitments we stand behind.",
    group: "Resources",
    Component: lazy(() => import("@/components/GuaranteeSection")),
  },
  {
    slug: "blog",
    label: "Blog",
    title: "Shopify Insights & Blog",
    description:
      "Practical Shopify growth, design and optimisation insights from our team.",
    blurb: "Ideas on Shopify growth and design.",
    group: "Resources",
    Component: lazy(() => import("@/components/BlogSection")),
  },
  {
    slug: "faq",
    label: "FAQ",
    title: "Frequently Asked Questions",
    description:
      "Answers on pricing, timelines, scope, support and how we work with Shopify brands.",
    blurb: "Everything clients ask before starting.",
    group: "Resources",
    Component: lazy(() => import("@/components/FaqSection")),
  },
  {
    slug: "book",
    label: "Book a Call",
    title: "Book a Free Shopify Strategy Call",
    description:
      "Book a free strategy call with Triumph Agency and get a plan for your store.",
    blurb: "Grab a free strategy session.",
    group: "Start",
    Component: lazy(() => import("@/components/BookingSection")),
  },
  {
    slug: "contact",
    label: "Contact",
    title: "Contact Triumph Agency",
    description: "Get in touch with Triumph Agency about your Shopify or web project.",
    blurb: "Start the conversation.",
    group: "Start",
    Component: lazy(() => import("@/components/ContactSection")),
  },
];

export const sectionGroups = ["Agency", "Work", "Proof", "Resources", "Start"] as const;

export const getSection = (slug?: string) => sections.find((s) => s.slug === slug);

/** Compact set shown directly in the sticky navigation bar. */
export const primaryNavSlugs = [
  "about",
  "platforms",
  "top-projects",
  "case-studies",
  "results",
  "process",
  "blog",
  "faq",
  "contact",
];
