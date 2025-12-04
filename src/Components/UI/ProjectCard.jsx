import React from 'react'
import Images from './Images'
import Link from 'next/link'
import { ArrowBigLeft, ArrowRight } from 'lucide-react'

const ProjectCard = ({
    slug,
    ImageUrl,
    ImageAlt,
    ProjectTitle,
    ProjectSubtitle,
    ProjectDetails,
}) => {
    return (
        <section>
            <Images
                imageurl={ImageUrl}
                alt={ImageAlt}
                width={1200}
                height={600}
                priority={true}
                placeholder={true}
                classes="w-full h-56 md:h-74 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 flex items-end justify-between gap-4">
                <div className="text-white">
                    <h3 className="text-[23px] mb-1 apollo-heading">{ProjectTitle}</h3>
                    <p className="text-[13px] leading-snug font-extralight">
                        {ProjectSubtitle}
                    </p>
                    <p className="text-[13px] mt-1 font-extralight">
                        {ProjectDetails}
                    </p>
                </div>

                <Link href={`/projects/${slug}`}>
                    <button
                        type="button"
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full 
                             bg-white/10 border border-white/40 text-white text-xs 
                             backdrop-blur-sm hover:bg-white/20 transition"
                    >
                        <ArrowRight className='w-5 h-5' />
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default ProjectCard
