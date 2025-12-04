import React from 'react'
import PagesBanner from './UI/PagesBanner'
import { aboutCards } from '@/utils/Data'
import Images from './UI/Images'


const About = () => {
    return (
        <div>
            <section>
                <PagesBanner
                    bannerImg={"/aboutImg/aboutbanner.png"}
                    bannerTitle={"About Us"}
                />
                <section className="bg-[#2A6F7E] md:py-16 px-4 md:px-15 py-10">
                    <div className=" mx-auto text-white">
                        <div className='max-w-6xl mx-auto'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
                            <div className=" rounded-md overflow-hidden min-h-[220px]">
                                <Images
                                    imageurl="/aboutImg/aboutbanner.png"
                                    alt="Who we are"
                                    width={1400}
                                    height={700}
                                    classes="w-full h-full object-cover"
                                />
                            </div>

                            <div className="space-y-3 text-sm leading-relaxed">
                                <h2 className="text-[19px] font-semibold mb-1">Who We Are</h2>
                                <p className='font-extralight'>
                                    Shantira Realty is a Kerala-based real estate consultancy built
                                    on the values of trust, transparency, and integrity. We help
                                    homebuyers make confident property decisions through reliable
                                    guidance and verified listings.<br />
                                    With a strong network of property developers and builders,
                                    Shantira Realty bridges the gap between genuine buyers and
                                    quality projects. By bringing professionalism, market expertise,
                                    and a customer-first approach to every interaction, we ensure
                                    that every recommendation we make is backed by real value.<br />
                                    What sets us apart is our commitment to building lasting
                                    relationships rather than just closing sales. Every project we
                                    take up is driven by the belief that trust is what turns promises
                                    into lasting relationships.

                                </p>
                                <p>

                                </p>
                                <p>

                                </p>
                            </div>
                        </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                            {aboutCards.map((card) => (
                                <div
                                    key={card.title}
                                    className="bg-[#E4EDF3] rounded-2xl p-10 py-15 flex flex-col gap-0 text-[#1E1E1E]"
                                >
                                    <div className="mb-3">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-[19px] font-semibold text-[#2A6F7E]">
                                        {card.title}
                                    </h3>
                                    <p className="font-extralight leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default About
