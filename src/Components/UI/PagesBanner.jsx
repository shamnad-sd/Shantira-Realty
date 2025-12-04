import { MessageSquare } from "lucide-react";
import Link from "next/link";
import React from "react";

const PagesBanner = ({ bannerImg, bannerTitle }) => {
  return (
    <div className="relative h-[60vh] md:h-[80vh] lg:h-screen ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <h1 className="text-white apollo-heading text-4xl md:text-[48px] pt-15 text-center">
          {bannerTitle}
        </h1>
      </div>
      <Link href={'/contact'}
        className="fixed z-30 bottom-6 right-6 md:bottom-10 md:right-10
                   h-14 w-14 rounded-full bg-[#CFA77F]
                   flex items-center justify-center shadow-lg"
      >



        <MessageSquare className="text-white w-5 h-5" />
      </Link>
    </div>
  );
};

export default PagesBanner;
