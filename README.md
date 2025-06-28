# 🎮 GTA VI Fan Concept Website

![GTA VI Banner](https://i.imgur.com/yYHjDRJ.png)

A sleek, animated, and responsive concept landing page for Grand Theft Auto VI. Built using **React + Vite**, styled with **Tailwind CSS**, and animated with **GSAP**, this project is a modern tribute to the long-awaited next installment in the GTA series.

🔗 **Live Demo:** [https://gta-vi-self.vercel.app](https://gta-vi-self.vercel.app)

---

## 🚀 Tech Stack

| Tech           | Description                                      |
|----------------|--------------------------------------------------|
| React (Vite)   | Fast, modern React framework for web development |
| Tailwind CSS   | Utility-first CSS framework                      |
| GSAP (GreenSock)| High-performance animation library              |
| Vercel         | Hosting & deployment platform                    |

---

## 📁 Project Structure

```text
gta-vi/
├── public/
│ └── assets/ # Static files like images, videos
│ └── hero-video.mp4
│ └── gta-logo.png
│
├── src/
│ ├── components/ # Reusable components (Navbar, Footer, etc.)
│ ├── pages/ # Page components (e.g., Home.jsx)
│ ├── animations/ # GSAP animation logic
│ ├── App.jsx # Root component
│ ├── main.jsx # Vite entry point
│ └── index.css # Tailwind global styles
│
├── index.html # Vite template
├── tailwind.config.js # Tailwind configuration
├── vite.config.js # Vite configuration
├── package.json # Dependencies and scripts
└── postcss.config.js # Tailwind/PostCSS setup
```

## 🛠️ Installation & Setup (From Scratch)

If you want to build this project from scratch, follow these steps:

### 1. Create React + Vite Project

```bash
npm create vite@latest gta-vi -- --template react
cd gta-vi

```
### 2.Install Dependencies

```bash
npm install
```
### 3.  Install Tailwind CSS
```bash
npm install tailwindcss @tailwindcss/postcss postcss
npx tailwindcss init -p
```
### 4.Update tailwind.config.js:
```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
### 5.postcss.config.mjs
```
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```
### 6.globals.css
```
@import "tailwindcss";
```


