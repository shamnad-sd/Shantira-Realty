import React from 'react'
import PagesBanner from './UI/PagesBanner'
import { blogs } from '@/utils/Data'
import BlogCard from './UI/BlogCard'

const Blog = () => {
    return (
        <div>
            <PagesBanner
                bannerImg={"/blogImg/blog6.jpg"}
                bannerTitle={"Blogs"}
            />

            <section className="bg-[#2A6F7E] md:py-16 px-4 md:px-15 py-10">
                <div className=" mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                        {blogs.map((blog,key) => (
                            <BlogCard
                                key={blog.id}
                                slug={blog.slug}
                                ImageUrl={blog.image}
                                ImageAlt={blog.title}
                                BlogTitle={blog.category}
                                blogDescription={blog.title}
                            />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Blog
