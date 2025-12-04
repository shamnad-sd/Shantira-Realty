import { MessageSquare } from "lucide-react";
import React from "react";

const PagesBanner = ({ bannerImg, bannerTitle }) => {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />

      {/* Title */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <h1 className="text-white apollo-heading text-4xl md:text-[48px] pt-15 text-center">
          {bannerTitle}
        </h1>
      </div>

      {/* Floating button bottom-right */}
      <button
        type="button"
        className="absolute z-20 bottom-6 right-6 md:bottom-[-25px] md:right-10
                   h-14 w-14 rounded-full bg-[#CFA77F]
                   flex items-center justify-center "
      >
        <MessageSquare  className="text-white w-5 h-5"/>
      </button>
    </div>
  );
};

export default PagesBanner;
