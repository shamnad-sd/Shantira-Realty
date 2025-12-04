import About from '@/Components/About'
import React from 'react'
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";

const AboutPage = () => {
  return (
    <div>
      <About />
    </div>
  )
}

export default AboutPage


export async function generateMetadata() {
  const aboutSEO = {
    title: "About Us - Shantira Realty",
    description:
      "Discover Shantira Realty, a Kerala-based real estate advisory committed to trust, transparency, and helping you find homes that truly match your lifestyle.",
    keywords:
      "Shantira Realty, about Shantira Realty, real estate consultancy, Kerala property advisory, trusted real estate partner",
    ogTitle: "About Shantira Realty",
    ogDescription:
      "Learn how Shantira Realty blends expert guidance, verified listings, and transparent processes to make your property decisions confident and stress-free.",
    siteName: "Shantira Realty",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "",
        width: 479,
        height: 482,
        type: "image/png",
        alt: "Shantira Realty logo",
      },
    ],
    twitterCard: "summary_large_image",
    twitterTitle: "About Shantira Realty",
    twitterDescription:
      "Know more about Shantira Realty and the values that drive our real estate advisory services.",
    twitterImages: ["/logo.png"],
  };


  return generateMetadataFromLib(aboutSEO, false, "/about-us");
}
