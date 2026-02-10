import React from 'react'
import Images from './Images'
import { truncate } from '@/utils/variable'
import Link from 'next/link'

const BlogCard = ({
    slug,
    key,
    ImageUrl,
    ImageAlt,
    BlogTitle,
    blogDescription

}) => {

    const stripHtml = (html) => {
  if (typeof document === "undefined") return html;
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

    return (
        <Link
            key={key}
            href={`/blog/${slug}`}
            className="bg-white p-2 rounded-2xl overflow-hidden flex flex-col"
        >
            <Images
                imageurl={ImageUrl}
                alt={ImageAlt}
                width={400}
                height={200}
                placeholder={true}
                classes="w-full h-54 object-cover rounded-2xl"
            />

            <div className="py-4 flex flex-col gap-2">
                <span className="text-[14px] text-[#EB5757]">
                    {BlogTitle}
                </span>

                {/* short title */}
               <p className="text-[#323232] font-medium leading-relaxed">
  {truncate(stripHtml(blogDescription), 70)}
</p>

            </div>
        </Link>
    )
}

export default BlogCard
