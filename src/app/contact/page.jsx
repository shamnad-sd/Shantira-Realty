import Contact from '@/Components/Contact'
import React from 'react'
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";

const ContactPage = () => {
  return (
    <div>
      <Contact/>
    </div>
  )
}

export default ContactPage

export async function generateMetadata() {
 const contactSEO = {
  title: "Contact Us - Shantira Realty",
  description:
    "Connect with Shantira Realty for personalized real estate guidance, project enquiries, site visits, and expert advice on buying, selling, or investing in Kerala’s premium properties.",
  keywords:
    "Shantira Realty contact, real estate advisor Kerala, property enquiry, site visit booking, Kerala real estate consultant, buy property Kerala, sell property Kerala, investment property Kerala, contact real estate agent",
  ogTitle: "Contact Shantira Realty | Expert Real Estate Guidance",
  ogDescription:
    "Reach out to Shantira Realty’s dedicated team for reliable advice, seamless property transactions, and tailored solutions for your real estate needs in Kerala.",
  siteName: "Shantira Realty",
  locale: "en_US",
  type: "website",
  images: [
    {
      url: "/contact-banner.png",
      width: 1200,
      height: 630,
      type: "image/png",
      alt: "Contact Shantira Realty for real estate assistance",
    },
  ],
  twitterCard: "summary_large_image",
  twitterTitle: "Contact Us - Shantira Realty",
  twitterDescription:
    "Get in touch with Shantira Realty for expert real estate consultations, property enquiries, and personalized guidance in Kerala.",
  twitterImages: ["/contact-banner.png"],
};



  return generateMetadataFromLib(contactSEO, false, "/contact");
}
