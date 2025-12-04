import Projects from '@/Components/Projects'
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";
import React from 'react'

const ProjectPage = () => {
  return (
    <div>
      <Projects/>
    </div>
  )
}

export default ProjectPage


export async function generateMetadata() {
 const projectsSEO = {
  title: "Projects - Shantira Realty",
  description:
    "Explore premium residential projects by Shantira Realty, featuring thoughtfully planned 3 & 4 BHK apartments and villas in prime locations across Kerala.",
  keywords:
    "Shantira Realty projects, residential projects Kochi, luxury apartments, 3 BHK, 4 BHK, new launch projects, Kerala real estate",
  ogTitle: "Projects by Shantira Realty",
  ogDescription:
    "Browse Shantira Realty’s curated portfolio of luxury homes, waterfront residences, and signature towers designed for modern urban living.",
  siteName: "Shantira Realty",
  locale: "en_US",
  type: "website",
  images: [
    {
      url: "",
      width: 479,
      height: 482,
      type: "image/png",
      alt: "Shantira Realty Projects",
    },
  ],
  twitterCard: "summary_large_image",
  twitterTitle: "Projects - Shantira Realty",
  twitterDescription:
    "Discover ongoing and upcoming projects by Shantira Realty, crafted to deliver comfort, connectivity, and long-term value.",
  twitterImages: ["/logo.png"],
};



  return generateMetadataFromLib(projectsSEO, false, "/projects");
}




