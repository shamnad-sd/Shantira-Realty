import HomePage from "@/Components/Home/HomePage";
import { generateMetadata as generateMetadataFromLib } from "@/lib/generateMetadata";

export default function Home() {
  return (
    <div className="">
    <HomePage/>
    </div>
  );
}


export async function generateMetadata() {
  const homeSEO = {
    title: "Shantira Realty - Trusted Real Estate Advisors in Kerala",
    description:
      "Explore verified properties and expert real estate guidance with Shantira Realty. We help you buy, sell, and invest in Kerala’s most promising locations with confidence and transparency.",
    keywords:
      "Shantira Realty, Kerala real estate, property advisory, real estate consultants, buy property in Kerala, sell property, real estate investment",
    ogTitle: "Shantira Realty | Your Trusted Real Estate Partner",
    ogDescription:
      "Discover homes and investments that truly fit your goals. Shantira Realty combines expert advice, verified listings, and transparent service to simplify every real estate decision.",
    siteName: "Shantira Realty",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/banner-home.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Kerala real estate properties - Shantira Realty",
      },
    ],
    twitterCard: "summary_large_image",
    twitterTitle: "Shantira Realty | Real Estate in Kerala",
    twitterDescription:
      "Find your perfect home or investment property with Kerala’s trusted real estate advisors — Shantira Realty.",
    twitterImages: ["/banner-home.png"],
  };

  return generateMetadataFromLib(homeSEO, false, "/");
}

