import React from 'react'
import PagesBanner from './UI/PagesBanner'
import Buttons from './UI/Buttons';
import Images from './UI/Images';
import { projectPageBottom, projects, uSPs } from '@/utils/Data';
import ProjectBottomCard from './UI/ProjectBottomCard';
import ProjectCard from './UI/ProjectCard';




const Projects = () => {
    return (

        <section>
            <PagesBanner
                bannerImg={"/projectImg/project-banner.jpg"}
                bannerTitle={"Projects"}
            />
            <div className="bg-[#2A6F7E] lg:pb-20  overflow-hidden">
                <div className=" relative">
                    <div className="relative overflow-hidden shadow-lg">
                        <Images
                            imageurl="/projectImg/sectionImg.png"
                            width={1400}
                            height={700}
                            placeholder={true}
                            alt="Project 1"
                            classes="w-full h-[750px]  sm:h-[600px] md:h-[480px] lg:h-auto object-cover"
                        />


                        <div className="absolute inset-0 px-6 md:px-15 pt-8 sm:pt-13 md:pt-20 pb-6 grid grid-cols-1 md:grid-cols-12 md:gap-6">
                            <div className="xl:pl-50 max-w-3xl text-white col-span-8 leading-relaxed space-y-3">
                                <h2 className="text-[30px] text-[#2A6F7E] font-semibold mb-1">Project 1</h2>
                                <p className='text-black font-light'>
                                    At Shantira Realty, we believe a home is more than just a property; it’s the foundation for meaningful living where memories take shape. Guided by trust and transparency, we help people find homes that truly match their needs, turning every purchase into a confident and worry-free experience.
                                    Our platform brings developers, builders, and buyers together through honesty and reliability. By simplifying property sales and fostering genuine connections, we go beyond transactions to create lasting relationships and living spaces that inspire trust, comfort, and a better way of life.
                                </p>
                            </div>

                            <div className=" text-white text-xs col-span-4 md:pl-10">
                                <ul className="space-y-4">
                                    {uSPs.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <span className="h-10 w-10 rounded-full bg-[#356DA4]" />
                                            <span className='text-[#1E1E1E] text-[20px] font-medium'>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="mt-16 lg:mt-[-380px] relative z-10 px-6 md:px-15">
                        <ProjectBottomCard />
                        <div className="mt-2 flex justify-center">
                            <Buttons
                                title={'Read More'}
                                link={''}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:pt-16 md:pb-5 px-6 md:px-15 pt-15'>
                <div className="flex flex-wrap justify-center gap-6">
                    {projects.map((project) => (
                        <article
                            key={project.id ?? project.title}
                            className="relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                         rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                        >
                            <ProjectCard
                                slug={project.slug}
                                ImageUrl={project.image}
                                ImageAlt={project.title}
                                ProjectTitle={project.title}
                                ProjectSubtitle={project.subtitle}
                                ProjectDetails={project.details}
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
