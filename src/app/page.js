// src/app/page.js
import App from './App'

export const metadata = {
  title: "Social Media Management & Creative Content Marketing Agency",
  description: "We help brands grow online through powerful content, creative design, and strategic social media management across all platforms.",
  keywords: "social media management, content marketing, creative agency, branding, digital marketing, Instagram marketing, design agency, growth marketing",
  openGraph: {
    title: "Next-Gen Social Media & Content Marketing Agency",
    description: "Strategic content. Viral growth. Bold design. We build your brand online.",
    url: "http://Thecreatorshub.in",
    siteName: "The Creators Hub", // ⬅️ Replace this with your real agency name
    images: [
      {
        url: "/logos/creators-hub-logo.png", // ⬅️ Place a clean branded image in /public/images
        width: 1200,
        height: 630,
        alt: "Creative social media team working on digital campaign"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Content & Social Media Marketing Agency",
    description: "From storytelling to sales, we handle your entire digital presence.",
    images: ["/logos/creators-hub-logo.png"],
  },
  robots: {
    index: true,
    follow: true
  }
};


export default function Page() {
  return <App />
}
