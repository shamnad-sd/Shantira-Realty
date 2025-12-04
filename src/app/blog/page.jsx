import Blog from '@/Components/Blog'
import React from 'react'
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";

const BlogPage = () => {
  return (
    <div>
      <Blog/>
    </div>
  )
}

export default BlogPage


export async function generateMetadata() {
  const blogSEO = {
  title: "Blogs & Insights - Shantira Realty",
  description:
    "Read expert insights, market updates, and home-buying guides from Shantira Realty to stay informed about Kerala’s real estate trends.",
  keywords:
    "Shantira Realty blog, real estate insights, property tips, Kerala real estate news, home buying guides",
  ogTitle: "Blogs & Insights - Shantira Realty",
  ogDescription:
    "Explore articles from Shantira Realty covering property trends, investment tips, and guidance for homebuyers and investors.",
  siteName: "Shantira Realty",
  locale: "en_US",
  type: "website",
  images: [
    {
      url: "",
      width: 479,
      height: 482,
      type: "image/png",
      alt: "Shantira Realty Blogs",
    },
  ],
  twitterCard: "summary_large_image",
  twitterTitle: "Blogs & Insights - Shantira Realty",
  twitterDescription:
    "Stay updated with Shantira Realty’s latest blogs and insights on real estate, investments, and smart home decisions.",
  twitterImages: ["/logo.png"],
};


  return generateMetadataFromLib(blogSEO, false, "/blog");
}
