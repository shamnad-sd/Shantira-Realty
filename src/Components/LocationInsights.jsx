"use client"
import { faqs } from "@/utils/Data";
import { useState } from "react";
import Buttons from "./UI/Buttons";

const LocationInsights = ({

}) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };
    return (
        <section className="bg-[#2A6F7E] py-16 px-4 md:px-10">
            <div className="max-w-5xl mx-auto text-white">
                {/* Location heading */}
                <h2 className="text-center mb-3 apollo-heading text-white text-[28px]">Location</h2>

                {/* Map card */}
                <div className="bg-white rounded-2xl overflow-hidden mb-4">
                    <div className="aspect-[16/9] w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6527531568695!2d76.32180447376386!3d9.962821473675977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08731c6c5486b9%3A0x17c349d386c66f25!2sSobha%20Atlantis!5e0!3m2!1sen!2sin!4v1764826420618!5m2!1sen!2sin"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full border-0"
                        />
                    </div>
                </div>


                <div className="flex justify-center mb-14">


                    <Buttons
                        title={'Book a Site Visit'}
                        link={''}
                    />
                </div>


                <h3 className="text-center mb-3 apollo-heading text-white text-[28px]">
                    Project Insights
                </h3>


                <div className="space-y-2 text-white/90">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="border-b border-white/20 pb-2"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggle(index)}
                                    className="w-full cursor-pointer flex items-center justify-between text-left text-[13px] py-3"
                                >
                                    <span className={"font-semibold text-[19px]"}>
                                        {item.question}
                                    </span>
                                    <span className="text-2xl leading-none">
                                        {isOpen ? "–" : "+"}
                                    </span>
                                </button>

                                {isOpen && (
                                    <p className="font-extralight  pb-2">
                                        {item.answer}
                                    </p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default LocationInsights;
