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
        <div className="absolute inset-0 bg-[#2A6F7E]/70 mix-blend-multiply" />

        {/* Grid Content */}
        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2 items-center">
          
          {/* Left Vector */}
          <div className="hidden md:flex justify-center items-end h-full ">
            <Images
              imageurl={"/HomeImg/AboutVector.png"}
              alt="Shantira vector"
              width={400}
              height={200}
              priority={true}
              quality={90}
              classes="opacity-85 object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="px-6 md:px-10 text-white leading-relaxed max-w-xl">
            <p className="mb-4 font-extralight">
            At Shantira Realty, we believe a home is more than just a property; it’s the foundation for meaningful living where memories take shape. Guided by trust and transparency, we help people find homes that truly match their needs, turning every purchase into a confident and worry-free experience.
Our platform brings developers, builders, and buyers together through honesty and reliability. By simplifying property sales and fostering genuine connections, we go beyond transactions to create lasting relationships and living spaces that inspire trust, comfort, and a better way of life.
            </p>
            <button className="mt-2 inline-flex items-center rounded-md bg-white text-[#11363D] text-xs font-medium px-5 py-2 shadow-sm">
              Know More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
