import React from 'react'
import ProjectBottomCard from './UI/ProjectBottomCard';
import { overviewButtons } from '@/utils/Data';
import { Download } from 'lucide-react';
import Images from './UI/Images';

const ProjectOverview = ({
    project
}) => {
    return (
        <section>
            <div className="mx-auto text-white pb-12">
                <h2 className="text-center mb-3 apollo-heading text-white text-[28px]">Overview</h2>
                <p className="leading-relaxed text-center font-extralight max-w-4xl mx-auto mb-10">
                    Pristine and picture perfect, SOBHA Atlantis is on an alluring island amidst emerald waters and sprawling greens – truly a pearl of the Arabian Sea. These 3 & 4 BHK luxury abodes combine connectivity, serenity, and exclusivity in perfect measure to offer a holistic urban lifestyle – a prized possession to pass on to generations.
                </p>
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {overviewButtons.map((btn) => (
                        <button
                            key={btn.label}
                            type="button"
                            className="flex flex-col items-center gap-4  rounded-xl px-6 py-3 
                          "
                        >
                            <p>{btn.icon}</p>
                            <span className="font-extralight flex gap-3 "><Download className='w-5 h-5' /> {btn.label}</span>
                        </button>
                    ))}
                </div>

                <div className="space-y-10">
                    {project.overviewSections?.map((section, index) => {
                        const isImageLeft = index % 2 === 1;

                        return (
                            <div
                                key={section.id}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                            >

                                <div
                                className={`
                                    order-2
                                    ${isImageLeft ? "lg:order-1 lg:col-span-7" : "lg:order-2 lg:col-span-7"}
                                `}
                                >
                                    <Images
                                        imageurl={section.image}
                                        alt={section.heading}
                                        width={1200}
                                        height={600}
                                        placeholder={true}
                                        priority={true}
                                        classes="w-full rounded-2xl object-cover shadow-lg"
                                    />
                                </div>

                                {/* Text column */}
                                <div
                                    className={`
            order-1 space-y-3
            ${isImageLeft ? "lg:order-2 lg:col-span-5" : "lg:order-1 lg:col-span-5"}
          `}
                                >
                                    <h3 className="mb-1 apollo-heading text-white text-[28px]">
                                        {section.heading}
                                    </h3>
                                    <p className="font-extralight leading-relaxed">
                                        {section.body}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <ProjectBottomCard />
        </section>
    )
}

export default ProjectOverview
