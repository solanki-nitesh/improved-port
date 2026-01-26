<div align="center">
<a href="https://niteshsolanki.com"><img src="https://raw.githubusercontent.com/solanki-nitesh/improved-port/main/public/logo.png" width="60px"></a>
</div>

<div align="center">
<h1>niteshsolanki.com</h1>
<p>My personal portfolio website</p>
</div>

## About

**niteshsolanki.com** is a modern, responsive personal portfolio website showcasing my work, projects, blog posts, and professional journey. Built with Next.js and Sanity CMS, it features a clean design with dark/light theme support, smooth animations, and a fully integrated content management system.

### Website Features

- 🏠 **Home Page**: Personal introduction, GitHub contribution graph, work experience, story timeline, technologies stack, and featured projects
- 📖 **About Page**: Detailed bio, resume download, skills, and professional background
- 💼 **Projects Page**: Showcase of work projects and side projects with detailed descriptions
- 📝 **Blog**: Technical articles and personal stories with syntax highlighting and comments
- 📸 **Photos**: Photo gallery (under construction)
- 🎨 **Dark/Light Theme**: System preference detection with manual toggle
- 📱 **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- ⚡ **Performance**: Optimized with Next.js App Router, server-side rendering, and image optimization
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and structured data
- 📊 **Analytics**: Integrated with Umami for privacy-focused analytics

# Tech Stack

- [NextJS][nextjs] - UI framework
- [Vercel][vercel] - Hosting and Deployment
- [Sanity.io][sanity]: Headless CMS and Content Lake
- [TailwindCSS][tailwind] / CSS - Styling and UI
- [Umami][umami]: Analytics
- [Next Themes][nexttheme]: Color Theme
- [React Refractor][reactrefractor]: Syntax Highlighting

## Project Overview

| [Site][site]          | [Studio][studio]                 |
| --------------------- | -------------------------------- |
| ![Site][site-preview] | ![Sanity Studio][studio-preview] |

### Key Sections

- **Profile Section**: Animated introduction with GitHub contribution calendar
- **Work Experience**: Timeline of professional roles and achievements
- **Story Timeline**: Career journey and milestones
- **Technologies**: Stack of technologies and tools I work with
- **Work Projects**: Professional projects including IIoT platforms, mobile apps, and web applications
- **Side Projects**: Personal projects and open-source contributions
- **Blog Posts**: Technical writing and articles with code syntax highlighting
- **Contact**: Social links and ways to get in touch

## Run Project Locally

### Clone Repository

```bash
git clone https://github.com/solanki-nitesh/improved-port.git

cd improved-port

npm install
```

- Rename `.env.example` to `.env.local`

### Get Environment Variables

The minimal `env` variables required to boot this project locally includes:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` - Your Sanity dataset (usually `production`)
- `NEXT_PUBLIC_SANITY_API_VERSION` - API version in YYYY-MM-DD format
- `NEXT_PUBLIC_SANITY_ACCESS_TOKEN` - Your Sanity access token (optional)

To get these variables, set up your own Sanity instance:

1. Create a new Sanity project:
```bash
npm create sanity@latest -- --template clean --create-project "Your Project Name" --dataset production
```

2. Copy your `projectId` from `sanity.config.ts`

3. Update `.env.local` with your Sanity credentials

4. Run the development server:
```bash
npm run dev
```

Visit [http://localhost:3000][localhost] to see the project live.

To add content, visit [http://localhost:3000/studio][localhost-studio] to access Sanity Studio.

## Build

```bash
npm run build
```

### Important Files and Folders

| File(s)                                        | Description                                     |
| ---------------------------------------------- | ----------------------------------------------- |
| `sanity.config.ts`                             | Config file for Sanity Studio                   |
| `lib/sanity.client.ts`                         | Config file for Sanity CLI                      |
| `app/studio/[[...index]]/page.tsx`             | Where Sanity Studio is mounted                  |
| `schemas`                                      | Where Sanity Studio gets its content types from |
| `lib/sanity.query.ts`                          | Groq query for Sanity Schema data               |
| `app/components/pages/`                        | Page-specific components (Job, Projects, etc.) |
| `app/components/shared/`                       | Reusable UI components                          |
| `app/components/global/`                       | Global components (Navbar, Footer, Theme)       |
| `app/data/`                                    | Static data files (work projects, social links) |

## Features & Highlights

- ✨ **Smooth Animations**: Framer Motion powered page transitions and scroll animations
- 🎯 **Type Safety**: Full TypeScript implementation
- 📝 **Content Management**: Sanity CMS for easy content updates
- 🔄 **ISR (Incremental Static Regeneration)**: Fast page loads with on-demand revalidation
- 💬 **Comments**: Giscus integration for blog post discussions
- 🎨 **Custom Fonts**: Incognito and GitLab Mono font families
- 📱 **Mobile Menu**: Responsive navigation with mobile-optimized menu
- 🎁 **Easter Eggs**: Hidden interactive elements
- 📊 **GitHub Integration**: Live contribution graph display

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Nitesh Solanki**

- Website: [niteshsolanki.com][site]
- GitHub: [@solanki-nitesh][github]

<!-- Link Refs -->

[nextjs]: https://nextjs.org
[vercel]: https://vercel.com
[sanity]: https://sanity.io
[tailwind]: https://tailwindcss.com
[umami]: https://umami.is
[nexttheme]: https://github.com/pacocoursey/next-themes
[reactrefractor]: https://github.com/rexxars/react-refractor
[site]: https://niteshsolanki.com
[studio]: https://niteshsolanki.com/studio
[studio-preview]: https://raw.githubusercontent.com/solanki-nitesh/improved-port/main/public/studio.png
[site-preview]: https://raw.githubusercontent.com/solanki-nitesh/improved-port/main/public/site.png
[localhost]: http://localhost:3000
[localhost-studio]: http://localhost:3000/studio
[github]: https://github.com/solanki-nitesh
