# Nikhil's Portfolio

A modern, responsive portfolio website built with Next.js, featuring dark/light mode and smooth animations.

## 🚀 Features

- ⚡️ Built with Next.js 14
- 🎨 Dark/Light mode with system preference
- ✨ Smooth animations with Framer Motion and GSAP
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🚀 Optimized for performance

## 🛠️ Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/NikhilKSharma29/Nextjs-DWs-portfolio.git
   cd Nextjs-DWs-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   - Copy `.env.example` to `.env.local`
   - Update the environment variables as needed

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** with your browser to see the result.

## 🏗 Build for Production

```bash
npm run build
# or
yarn build
```

## 🚀 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FNikhilKSharma29%2FNextjs-DWs-portfolio&project-name=my-portfolio&repository-name=my-portfolio)

1. Push your code to a GitHub repository
2. Import your project on Vercel
3. Vercel will detect it's a Next.js app and set up the right settings
4. Your app will be deployed!

### Manual Deployment

1. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

## 📦 Environment Variables

Copy `vercel-env.example` to `.env.local` and update the values:

```bash
NEXT_PUBLIC_SITE_URL=https://your-vercel-app-url.vercel.app
# Add other environment variables as needed
```

## 🛠 Built With

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [GSAP](https://greensock.com/gsap/) - JavaScript animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icons for React

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

To write content in a README.md file, you use Markdown syntax, which is a lightweight markup language. Here’s a quick guide on how to write and update your README.md file for your project:

🪄 Steps to Add Content to README.md
Open or Create the File

If you don’t have a README.md yet, create one in the root of your project.

You can use any text editor (VS Code, Notepad++, etc.).

Use Markdown to Structure It
Here's a breakdown of how markdown works and how you can use it.

✍️ Example of Markdown Content
markdown
Copy
Edit

# 🚀 My Portfolio Project

This is a full-stack developer portfolio built with **Next.js**, **React Hook Form**, **Tailwind CSS**, and **Node.js**.

---

## 🧩 Contact Form Implementation

This project features a fully validated contact form with toast notifications and loading indicators.

### ✅ Form Validation Flow

- **Validation Library:** `react-hook-form` + `zod`
- Fields:
  - `name` - required
  - `email` - required, must be a valid email
  - `message` - required
  - `lastName` - optional

### ⚠️ Error Handling

- Inline field error messages (shown near inputs)
- API error responses are shown as toast alerts
- Server failures handled with fallback messages

### 🔔 Toast + Loading

- Success = green toast using `react-hot-toast`
- Errors = red toast
- While submitting:
  - Submit button shows “Sending...”
  - Button is disabled to prevent spam

---
