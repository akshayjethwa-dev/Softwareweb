# 📝 Ashrey Systems - Content Management Guide

This document outlines the standard operating procedure for adding or editing content on the Ashrey Systems website. All content is managed visually through the Sanity Studio dashboard. **No code changes are required.**

---

## 🚀 Accessing the Studio
1. **Local Development:** Run `npm run dev` in the `studio` folder and open `http://localhost:3333`.
2. **Production:** (Add your deployed Sanity Studio URL here later, e.g., `admin.ashreysystems.com`).

---

## 📚 Standard Content Workflow
For almost every piece of content, the workflow is identical:
1. Open the Sanity Studio.
2. On the left sidebar, click the **Content Type** you want to update (e.g., Articles, Services).
3. Click the blue **+ Create** button in the top right (or click an existing item to edit).
4. Fill in the fields.
5. Click the green **Publish** button at the bottom right.
6. The live website will update immediately upon refreshing the page.

---

## 🧩 Content Types & Special Fields to Know

### 1. Services (`/services`)
* **How to add:** Click **Services** -> **Create**.
* **Special Fields:**
  * **Slug:** Always click the "Generate" button after typing your Title. This creates the URL (e.g., `/services/custom-apps`).
  * **Icon Name:** Type the exact name of a Lucide icon (e.g., `Users`, `Workflow`, `Cpu`, `MessageSquare`).
  * **Related FAQs:** You can select existing FAQs from your database to automatically attach them to the bottom of this specific service page.

### 2. Case Studies (`/case-studies`)
* **How to add:** Click **Case Studies** -> **Create**.
* **Special Fields:**
  * **Slug:** Click "Generate" after typing the Title.
  * **Cover Image:** Click upload to drop in your thumbnail.
  * **Impact:** Add these as individual bullet points; they will render with green checkmarks on the website.

### 3. Articles / Insights (`/insights` or `/blog`)
* **How to add:** Click **Article / Insight** -> **Create**.
* **Special Fields:**
  * **Slug:** Click "Generate".
  * **Publish Date:** *Crucial!* The website automatically sorts articles so the newest ones appear first based on this date.
  * **Content (Markdown):** You can use basic Markdown here (`##` for headings, `*` for bullets) to format the body of your blog post.

### 4. Pricing Plans (`/pricing` section)
* **How to add:** Click **Pricing Plan** -> **Create**.
* **Special Fields:**
  * **Highlight as Recommended?:** If you toggle this to `ON` (True), the website will automatically wrap this specific pricing tier in a glowing brand-colored border and highlight the button to make it stand out.

### 5. Testimonials
* **How to add:** Click **Testimonial** -> **Create**.
* **Special Fields:**
  * **Avatar Image:** Upload a square headshot of the client.

### 6. FAQs
* **How to add:** Click **FAQ** -> **Create**.
* **Note:** FAQs created here will appear in the global FAQ section. You can also link them directly to specific Services.