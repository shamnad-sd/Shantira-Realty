import { services } from "@/utils/Data";

const HomeServices = () => {
  return (
     <section className="bg-[#2A6F7E] md:py-16 px-4 md:px-15 py-10 ">
      <div className=" mx-auto ">
        <h2 className="text-center text-[20px]  tracking-wide text-white mb-8">
          Services We Offer
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] 
                         bg-[#183F47] rounded-xl py-13 p-6 text-white shadow-md flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-[#D4A574] text-lg">
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3 className="text-[18px] max-w-20 ">{service.title}</h3>
              </div>
              <p className="leading-relaxed font-extralight ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
