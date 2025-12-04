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
    "Get in touch with Shantira Realty for project enquiries, site visits, or personalised real estate guidance across Kerala.",
  keywords:
    "Shantira Realty contact, real estate enquiry, site visit booking, Kerala property assistance, contact real estate advisor",
  ogTitle: "Contact Shantira Realty",
  ogDescription:
    "Reach out to Shantira Realty’s team for trusted advice on buying, selling, or investing in premium properties.",
  siteName: "Shantira Realty",
  locale: "en_US",
  type: "website",
  images: [
    {
      url: "",
      width: 479,
      height: 482,
      type: "image/png",
      alt: "Contact Shantira Realty",
    },
  ],
  twitterCard: "summary_large_image",
  twitterTitle: "Contact Us - Shantira Realty",
  twitterDescription:
    "Connect with Shantira Realty for enquiries, consultations, and assistance with your real estate requirements.",
  twitterImages: ["/logo.png"],
};


  return generateMetadataFromLib(contactSEO, false, "/contact");
}
