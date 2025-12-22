import BlogDetails from '@/Components/BlogDetails';
import { blogs } from '@/utils/Data';
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";
import React from 'react'

const BlogPageDetails = async ({ params }) => {
    const { slug } = await params;
    const blog = blogs.find((p) => p.slug === slug);
    return (
        <div>
            <BlogDetails  blog={blog}/>
        </div>
    )
}

export default BlogPageDetails

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((p) => p.slug === slug);

  const blogsSEO = {
  title: `${blog.category} - Shantira Realty`,
  description:
    "Read expert insights, market updates, and home-buying guides from Shantira Realty to stay informed about Kerala’s real estate trends.",
  keywords:
    "Shantira Realty blog, Kerala real estate insights, property investment tips, home buying guides Kerala, real estate market news, Kerala property trends, first-time homebuyer advice, luxury property Kerala, real estate legal tips, NRI property investment Kerala",
  ogTitle: `${blog.title} - Shantira Realty`,
  ogDescription:
    "Explore articles from Shantira Realty covering property trends, investment tips, and guidance for homebuyers and investors in Kerala.",
  siteName: "Shantira Realty",
  locale: "en_US",
  type: "article",
  images: [
    {
      url: blog.imageUrl,
      width: 1200,
      height: 630,
      type: "image/png",
      alt: blog.imageAlt,
    },
  ],
  twitterCard: "summary_large_image",
  twitterTitle: `${blog.title} - Shantira Realty`,
  twitterDescription:
    "Stay updated with Shantira Realty’s latest blogs and insights on real estate, investments, and smart home decisions in Kerala.",
  twitterImages: [blog.imageUrl], 
};



  return generateMetadataFromLib(blogsSEO, false, `/blog/${slug}`);
}



