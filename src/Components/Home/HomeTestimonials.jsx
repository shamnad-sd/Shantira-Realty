"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "@/utils/Data";
import Images from "../UI/Images";

const HomeTestimonials = () => {
  return (
    <section className=" md:py-16 px-4 md:px-15 py-10">
      <div className="mx-auto">
        <h2 className="text-center text-sm font-semibold text-white mb-8">
          Our Happy Customers
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".testi-next",
              prevEl: ".testi-prev",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }} // responsive Swiper[web:133][web:135]
            className="pb-5"
          >
            {testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="h-full bg-[#F4F7FB] rounded-xl shadow-md px-8 py-8 flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="h-16 w-16 rounded-full overflow-hidden mb-4">
                    <Images
                      imageurl={item.avatar}
                      alt={item.name}
                      width={64}
                      height={64}
                      quality={90}
                      placeholder={true}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-sm font-semibold text-[#275B91] mb-2">
                    {item.name}
                  </h3>

                  {/* Text */}
                  <p className="text-[11px] text-gray-600 leading-relaxed mb-4">
                    {item.text}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 text-[#F9B233] text-xs">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < item.rating ? "★" : "☆"}</span>
                    ))}
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons under slider */}
          <div className="flex items-center justify-center gap-20 mt-0">
            <button
              className="testi-prev h-8 w-8 flex items-center justify-center rounded-full border border-white/60 text-white text-xs hover:bg-white/10"
              aria-label="Previous"
            >
              ←
            </button>

            {/* Pagination bullets (from Swiper) are already below due to pb-10 */}

            <button
              className="testi-next h-8 w-8 flex items-center justify-center rounded-full border border-white/60 text-white text-xs hover:bg-white/10"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
