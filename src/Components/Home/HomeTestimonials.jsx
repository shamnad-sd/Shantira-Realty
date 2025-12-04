"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "@/utils/Data";
import Images from "../UI/Images";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HomeTestimonials = () => {
  return (
    <>
      <section className="md:py-16 px-4 md:px-15 py-10">
        <div className="mx-auto">
          <h2 className="text-center text-[20px]  tracking-wide text-white mb-8">
            Our Happy Customers
          </h2>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                el: ".testi-pagination",
              }}
              navigation={{
                nextEl: ".testi-next",
                prevEl: ".testi-prev",
              }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-5 testi-swiper"
            >
              {testimonials.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="h-full bg-[#E1E9F1] rounded-xl shadow-md px-6 py-8 flex flex-col items-center text-center">
                    <div className="h-20 w-20 rounded-full overflow-hidden mb-4">
                      <Images
                        imageurl={item.avatar}
                        alt={item.name}
                        width={120}
                        height={120}
                        // quality={90}
                        placeholder={true}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-[23px] text-[#356DA4]">
                      {item.name}
                    </h3>

                    <p className=" text-[#323232] leading-relaxed mb-2">
                      {item.text}
                    </p>

                    <div className="flex gap-3 text-[#D9AE23] text-[25px]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < item.rating ? "★" : "☆"}</span>
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* arrows + bullets row */}
            <div className="pt-5 flex items-center justify-between max-w-[220px] mx-auto">
              <button
                className="testi-prev cursor-pointer flex items-center justify-center text-white hover:opacity-80"
                aria-label="Previous"
              >
                <ArrowLeft className="w-7 h-7" />
              </button>

              {/* bullets in the middle, width only as wide as bullets */}
              <div className="testi-pagination inline-flex items-center justify-center" />

              <button
                className="testi-next cursor-pointer flex items-center justify-center text-white hover:opacity-80"
                aria-label="Next"
              >
                <ArrowRight className="w-7 h-7" />
              </button>
            </div>

          </div>
        </div>
      </section>

      <style jsx global>{`
  .testi-pagination {
    position: static;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
  }

  .testi-pagination .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #368a9c;
    opacity: 0.7;
    margin: 0 !important;
  }

  .testi-pagination .swiper-pagination-bullet-active {
    width: 30px;
    opacity: 0.9;
    background: #00000080;
  }
`}</style>


    </>
  );
};

export default HomeTestimonials;
