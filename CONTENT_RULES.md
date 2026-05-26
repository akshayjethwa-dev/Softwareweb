# Ashrey Systems: Page-Level Content Rules

## The Golden Rule: Intent Separation
Every page on this website has a single, unique job. If content appears fully on the Home page and also fully on an internal page, users have no reason to click deeper, and search engines get confused about which page to rank. 

**Never duplicate full intent across multiple pages.**

---

## 1. Homepage Rules (The "Preview-First" Logic)
The Homepage is a high-speed routing engine. Its job is to build immediate trust and route the user to the correct deeper page or directly to a conversion.

* **Previews Only:** The homepage may only include summaries and previews of content. Never render a full content library (e.g., all case studies, all services) on the homepage.
* **Strict Limits:** Component limits must be enforced. Show a maximum of **2 to 4 featured items** per content type (e.g., 2 Case Studies, 3 Process steps, 3 FAQs).
* **Mandatory "View All" CTAs:** Every preview section on the homepage must end with a clear internal link to its dedicated full page (e.g., `showViewAll={true}`).
* **One Primary Conversion Endpoint:** The homepage must end with a single, clear path to conversion (e.g., the Sticky Mobile CTA or the Preview Contact strip). Do not put the full, multi-field Lead Capture form on the homepage.

---

## 2. Internal Page Rules (The "Deep-Dive" Logic)
Internal pages exist to answer specific objections, provide deep technical details, and exhaustively list offerings. 

* **Unique SEO & Intros:** Every internal page must have its own `<SEO />` component, a unique `<h1>` tag, and a unique introductory paragraph that explicitly states the page's purpose. Do not reuse the homepage introduction.
* **Full Data Rendering:** Internal pages do not use limits. They map and render the entire array of data for their specific category (e.g., all pricing plans, all services, the full 6-step process).
* **Specific Intent Mapping:**
  * `/services` = All offerings, use cases, and detailed service links.
  * `/case-studies` = Exhaustive proof, data, and outcomes.
  * `/pricing` = All plans, models, and cost-specific FAQs.
  * `/faq` = General objections, timelines, and answers.
  * `/process` = Full delivery method and expectations.
  * `/tech-stack` = Technical confidence and delivery capability.
  * `/contact` = The actual conversion endpoint (Full Lead Form).

---

## 3. CMS (Sanity) Editor Guidelines
When uploading new content to Sanity CMS in the future:
* **Order matters:** Ensure the most impressive Case Studies and the most common Services are ordered first, as the frontend will automatically slice the top 2-3 items for the Homepage.
* **Don't force Home:** Do not try to write "Homepage versions" of content. Write the complete version in the CMS, and trust the frontend components (like `MiniProcess` or `FeaturedProof`) to extract and summarize what they need for the homepage.