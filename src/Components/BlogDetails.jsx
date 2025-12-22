import React from 'react'
import PagesBanner from './UI/PagesBanner'
import Images from './UI/Images'

const BlogDetails = ({ blog }) => {
  return (
    <div>
      <PagesBanner
        bannerImg={'/blogImg/blog7.jpg'}
        bannerTitle={blog.category}
      />
      <main className="bg-[#2A6F7E] min-h-screen py-16 px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-white">
          {/* Category */}
          <p className="text-sm text-[#F2B78B] mb-3">
            {blog.date_time}
          </p>

          {/* Title */}
          <h2 className="apollo-heading text-3xl md:text-[32px] leading-snug mb-6">
            {blog.category}
          </h2>

          {/* Hero image */}
          <div className="mb-8 rounded-3xl overflow-hidden shadow-xl">
            <Images
              imageurl={blog.image}
              alt={blog.category}
              width={1200}
              height={600}
              placeholder={true}
              classes="w-full h-[260px] md:h-[380px] object-cover"
            />
          </div>

          {/* Content */}
          <article className="bg-white/5 rounded-3xl px-6 md:px-10 py-8 md:py-10 text-[15px] leading-relaxed font-extralight">
            <p className="whitespace-pre-line">
              {blog.title}
            </p>
          </article>
        </div>
      </main>
    </div>
  )
}

export default BlogDetails
