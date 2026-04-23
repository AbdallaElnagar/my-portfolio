# Portfolio Data

This folder contains all the editable content for your portfolio website. Update these files to customize your portfolio without touching the component code.

## 📝 How to Edit

### Personal Information
Edit `portfolioData.ts` → `personalInfo` object:
- `name`: Your full name
- `role`: Your job title
- `location`: Your city/country
- `tagline`: Short description
- `bio`: Longer about me text
- `email`: Contact email
- `phone`: Contact phone
- `social`: Social media links
- `resume`: Path to resume PDF

### Skills
Edit `portfolioData.ts` → `skills` array:
- Add/remove skill categories
- Update skill names, levels (1-100), and icons
- Categories: Frontend, Backend, DevOps, etc.

### Projects
Edit `portfolioData.ts` → `projects` array:
- `title`: Project name
- `shortDescription`: Brief description for cards
- `longDescription`: Detailed description
- `image`: Main project image URL
- `images`: Array of additional images
- `technologies`: Array of tech stack
- `category`: Project category
- `featured`: true/false for homepage display
- `liveUrl`: Live demo link
- `githubUrl`: GitHub repository link
- `highlights`: Array of key features

**Image Sources:**
- Use Unsplash: `https://images.unsplash.com/photo-XXXXX?w=800&q=80`
- Or upload your own images to `/public/images/`

### Experience
Edit `portfolioData.ts` → `experience` array:
- `company`: Company name
- `position`: Job title
- `location`: Work location
- `startDate`: Format: 'YYYY-MM'
- `endDate`: Format: 'YYYY-MM' or null for current
- `current`: true/false
- `description`: Job description
- `achievements`: Array of accomplishments
- `technologies`: Array of tech used

### Stats
Edit `portfolioData.ts` → `stats` array:
- Update the numbers to match your experience
- Add/remove stat items as needed

## 🎨 Tips

1. **Images**: Use high-quality images (min 800px wide)
2. **Descriptions**: Keep short descriptions under 150 characters
3. **Technologies**: Use consistent naming (e.g., "React" not "ReactJS")
4. **Links**: Always include https:// in URLs
5. **Dates**: Use YYYY-MM format for consistency

## 🔄 After Editing

1. Save the file
2. The changes will appear immediately (hot reload)
3. No need to restart the dev server

## 📸 Image Recommendations

**Project Images:**
- Size: 1200x800px or 16:9 ratio
- Format: JPG or PNG
- Quality: High (but optimized for web)

**Free Image Sources:**
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

## 🚀 Quick Start

```typescript
// Example: Adding a new project
{
  id: '7',
  title: 'My New Project',
  shortDescription: 'A brief description',
  longDescription: 'Detailed description here...',
  image: 'https://images.unsplash.com/photo-XXXXX?w=800&q=80',
  images: ['url1', 'url2'],
  technologies: ['React', 'Node.js', 'MongoDB'],
  category: 'Full Stack',
  featured: true,
  liveUrl: 'https://myproject.com',
  githubUrl: 'https://github.com/username/project',
  highlights: [
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ],
}
```

---

**Need help?** Check the existing data structure for examples!
