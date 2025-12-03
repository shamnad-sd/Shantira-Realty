import Image from "next/image";
import Images from "../UI/Images";

const HomeAbout = () => {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="relative h-[500px] md:h-[420px] xl:h-[380px] overflow-hidden">
        <Image
          src="/HomeImg/HomeAbout.jpg"
          alt="City skyline"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#133c47]/90 mix-blend-multiply" />

        {/* Grid Content */}
        <div className="relative z-10 h-full grid grid-cols-12 items-center">

          {/* Left Vector (4 columns) */}
          <div className="hidden md:flex col-span-5 justify-end items-end h-full pr-6">
            <Images
              imageurl={"/HomeImg/AboutVector.png"}
              alt="Shantira vector"
              width={420}
              height={180}
              priority={true}
              quality={90}
              classes="opacity-95 object-contain"
            />
          </div>

          {/* Right Content (8 columns) */}
          <div className="col-span-12 md:col-span-7 px-6  text-white leading-relaxed max-w-[590px]">
            <p className="mb-4 text-[15px] font-extralight">
              At Shantira Realty, we believe a home is more than just a property; it’s the foundation for meaningful living where memories take shape. Guided by trust and transparency, we help people find homes that truly match their needs, turning every purchase into a confident and worry-free experience.
              Our platform brings developers, builders, and buyers together through honesty and reliability. By simplifying property sales and fostering genuine connections, we go beyond transactions to create lasting relationships and living spaces that inspire trust, comfort, and a better way of life.
            </p>
            <button className="mt-2 cursor-pointer inline-flex items-center rounded-md bg-white text-[#2A6F7E] hover:bg-[#2A6F7E] hover:text-white transition duration-100  px-6 py-1 shadow-sm">
              Know More
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeAbout;
