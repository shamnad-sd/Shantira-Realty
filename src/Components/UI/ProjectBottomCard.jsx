import React from 'react'
import Images from './Images'
import { projectPageBottom } from '@/utils/Data'

const ProjectBottomCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {projectPageBottom.map((card) => (
                <article
                    key={card.id}
                    className=" overflow-hidden"
                >
                    <Images
                        imageurl={card.image}
                        width={400}
                        height={200}
                        placeholder={true}
                        alt={card.title}
                        classes="w-full h-50 rounded-xl object-cover shadow-xl "
                    />
                    <div className="px-3 py-3">
                        <p className=" text-center text-white leading-relaxed font-extralight">
                            {card.title}
                        </p>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default ProjectBottomCard
