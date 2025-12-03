import React from 'react'
import PagesBanner from './UI/PagesBanner'

const projectImages = [
    {
        id: 1,
        title: "At Shantira Realty, we believe a home is more than just a property.",
        image: "/projectImg/project1.jpg",
    },
    {
        id: 2,
        title: "At Shantira Realty, we believe a home is more than just a property.",
        image: "/projectImg/project1.jpg",
    },
    {
        id: 3,
        title: "At Shantira Realty, we believe a home is more than just a property.",
        image: "/projectImg/project1.jpg",
    },
    {
        id: 4,
        title: "At Shantira Realty, we believe a home is more than just a property.",
        image: "/projectImg/project1.jpg",
    },
];

const uSPs = ["USP / Details", "USP / Details", "USP / Details", "USP / Details"];

const Projects = () => {
    return (

        <div>
            <PagesBanner
                bannerImg={"/projectImg/project-banner.jpg"}
                bannerTitle={"Projects"}
            />
            <section className="bg-[#2A6F7E] pb-20">
                <div className=" relative">
                    {/* Top content over hero image */}
                    <div className="relative overflow-hidden shadow-lg">
                        {/* Background hero image */}
                        <img
                            src="/projectImg/sectionImg.png"
                            alt="Project 1"
                            className="w-full h-auto object-cover"
                        />

                        {/* Text + USPs */}
                        <div className="absolute inset-0 px-6 md:px-15 pt-8 pb-6 grid grid-cols-12 gap-6">
                            {/* Left text */}
                            <div className="pl-50 max-w-3xl text-white col-span-8 leading-relaxed space-y-3">
                                <h2 className="text-lg font-semibold mb-1">Project 1</h2>
                                <p className=''>
                                    At Shantira Realty, we believe a home is more than just a property; it’s the foundation for meaningful living where memories take shape. Guided by trust and transparency, we help people find homes that truly match their needs, turning every purchase into a confident and worry-free experience.
                                    Our platform brings developers, builders, and buyers together through honesty and reliability. By simplifying property sales and fostering genuine connections, we go beyond transactions to create lasting relationships and living spaces that inspire trust, comfort, and a better way of life.
                                </p>
                            </div>

                            {/* Right USP list */}
                            <div className=" text-white text-xs col-span-4 pl-10">
                                <ul className="space-y-4">
                                    {uSPs.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span className="h-10 w-10 rounded-full bg-[#225D9C]" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* Bottom overlapping cards */}
                    <div className="mt-[-400px] relative z-10 px-15">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {projectImages.map((card) => (
                                <article
                                    key={card.id}
                                    className=" overflow-hidden"
                                >
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-40 rounded-2xl object-cover"
                                    />
                                    <div className="px-3 py-3 justify-center items-center ">
                                        <p className="text-[11px] leading-relaxed">
                                            {card.title}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Read more button */}
                        <div className="mt-6 flex justify-center">
                            <button className="px-8 py-2 rounded-full bg-white text-[#2A6F7E] text-xs font-medium shadow-md hover:bg-gray-100">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
