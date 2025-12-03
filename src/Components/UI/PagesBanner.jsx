import React from 'react'

const PagesBanner = ({ bannerImg, bannerTitle }) => {
  return (
    <div className="relative h-screen">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}

      {/* Centered Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <h1 className="text-white apollo-heading text-4xl md:text-[48px] pt-15 text-center">
          {bannerTitle}
        </h1>
      </div>

    </div>
  )
}

export default PagesBanner
