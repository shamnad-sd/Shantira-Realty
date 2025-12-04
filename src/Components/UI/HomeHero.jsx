"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { slides } from '@/utils/Data';
import Link from 'next/link';


const HomeHero = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className="absolute z-50 right-10 md:right-40 bottom-5 flex items-center gap-4 pointer-events-none">
        <button
          ref={prevRef}
          className="custom-prev pointer-events-auto w-8 h-8 rounded-full bg-black/70 flex items-center justify-center"
          aria-label="Previous"
        >
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
            <path d="M15 6 L9 12 L15 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          ref={nextRef}
          className="custom-next pointer-events-auto w-8 h-8 rounded-full bg-black/70 flex items-center justify-center"
          aria-label="Next"
        >
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
            <path d="M9 6 L15 12 L9 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Hero Slider */}
      <div className="relative h-screen">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="h-full hero-swiper"
        >

          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-black/60 to-transparent" style={{ backdropFilter: 'blur(2px)' }}></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center pt-20">
                  <div className=" mx-auto px-6 md:px-15 w-full">
                    <div className="max-w-2xl">
                      <h1 className="text-white max-w-5 apollo-heading text-6xl md:text-[80px] font-normal leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-white text-xl md:text-xl mb-8 font-light">
                        {slide.subtitle}
                      </p>

                      {/* Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <Link href={'/projects'}>
                        <button className="px-9 py-2.5 cursor-pointer bg-[#CFA77F] text-[#39230B] hover:bg-[#C49564] transition-colors rounded-md">
                          Explore Properties
                        </button>
                        </Link>
                        <Link href={'/contact'}>
                        <button className="px-9 py-2.5 cursor-pointer bg-transparent border-1 border-[#CFA77F] text-white hover:bg-[#356DA4] hover:border-[#356DA4] hover:text-white transition-colors rounded-md flex items-center gap-2">
                          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.103 0.750153C16.804 1.16115 19.728 4.08115 20.143 7.78215" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.103 4.29318C14.874 4.63718 16.258 6.02218 16.603 7.79318" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.78152 10.7225C13.7705 14.7105 14.6754 10.0969 17.2153 12.635C19.6638 15.0829 21.0722 15.5734 17.9688 18.6749C17.5802 18.9872 15.1113 22.7444 6.43447 14.0698C-2.24341 5.39415 1.51157 2.9226 1.82394 2.5341C4.93377 -0.576002 5.41682 0.839535 7.86539 3.28748C10.4041 5.82665 5.79254 6.73457 9.78152 10.7225Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>

                          Talk to an Expert
                        </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
  .hero-swiper .swiper-pagination-bullet {
    padding-bottom: 5px;
    background: black;
    opacity: 0.5;
  }

  .hero-swiper .swiper-pagination-bullet-active {
    opacity: 1;
    padding: 0px 35px;
    border-radius: 10px;
    background: #356DA4;
  }
`}</style>


    </>
  );
};

export default HomeHero;
