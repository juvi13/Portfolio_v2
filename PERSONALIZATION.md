# Personalizing Your Glassfolio Website

This guide will walk you through the files you need to edit to personalize your portfolio.

## 1. Site Title & Metadata

This is what appears in the browser tab.

- **File**: `src/app/layout.tsx`
- **What to change**: In the `metadata` object, update the `title` and `description` to your liking.

```javascript
export const metadata: Metadata = {
  title: 'Your Name | Portfolio', // Change 'Glassfolio'
  description: 'Your personal portfolio description.',
};
```

## 2. Header Logo and Site Name

- **File**: `src/components/layout/header.tsx`
- **What to change**:
    - Replace `<Code2 />` with your desired icon from `lucide-react` or your own custom SVG logo.
    - Change the text "Glassfolio" to your name or brand.

```javascript
// Before
<Link href="/" className="...">
  <Code2 className="h-6 w-6" />
  Glassfolio
</Link>

// After
<Link href="/" className="...">
  <YourIcon className="h-6 w-6" />
  Your Name
</Link>
```

## 3. Profile Picture, Name, and Tagline

This is for the main hero section on the homepage.

- **File**: `src/components/sections/hero.tsx`
- **What to change**:
    - Update the hardcoded name "John Doe".
    - Update the tagline "Creative Frontend Developer & UI/UX Enthusiast".
    - To change the image, see the next step.

- **File**: `src/lib/placeholder-images.json`
- **What to change**:
    - Find the object with `id: "profile-picture"`.
    - Replace the `imageUrl` with a direct link to your own profile picture. A service like Imgur is a good place to host it.

```json
// src/lib/placeholder-images.json
{
  "id": "profile-picture",
  "description": "Your profile picture.",
  "imageUrl": "https://your-image-url.com/profile.jpg", // <-- CHANGE THIS
  "imageHint": "person face"
}
```

## 4. About Me Section

- **File**: `src/components/sections/about.tsx`
- **What to change**: Edit the `<p>` tags to write your own biography. You can also change the floating icon next to the title from `<Code2 />` to something else.

## 5. Skills

- **File**: `src/lib/data.ts`
- **What to change**: Modify the `skills` array. You can add, remove, or edit skills. You can find more icons on the `lucide-react` website.

## 6. Projects Section

- **File**: `src/components/sections/projects.tsx`
- **What to change**: Edit the `projects` array with your own work. Update the `title`, `description`, `tags`, and `liveUrl`. The `imageId` corresponds to an entry in `src/lib/placeholder-images.json` if you want to use a custom placeholder.

```javascript
const projects = [
  {
    title: "Your Project Title",
    description: "A short and compelling description of your project.",
    tags: ["React", "Tailwind", "Firebase"],
    liveUrl: "https://your-live-project-url.com",
    imageId: "project-1", // You can reuse or add new image placeholders
  },
  // ... more projects
];
```

- **File**: `src/lib/placeholder-images.json`
- **What to change**: You can add new image objects for your projects and reference them by their `id` in `projects.tsx`.

## 7. Work Experience

- **File**: `src/components/sections/experience.tsx`
- **What to change**: Edit the `experiences` array with your own professional history.

## 8. Qualifications & Certifications

- **File**: `src/components/sections/qualifications.tsx`
- **What to change**: Update the `education` and `certifications` arrays with your credentials.

## 9. Contact Information & Social Links

- **File**: `src/components/contact-dialog.tsx`
    - **What to change**: In the `mailtoLink`, change the email address `contact@glassfolio.com` to your own.

- **File**: `src/components/layout/footer.tsx`
    - **What to change**: Update the `href` for each social media link (`twitter.com`, `github.com`, `linkedin.com`, and the `mailto:` link) to point to your profiles.

- **File**: `src/components/sections/contact.tsx`
    - **What to change**: You can change the "Get in Touch" prompt if you'd like.

Happy customizing!
