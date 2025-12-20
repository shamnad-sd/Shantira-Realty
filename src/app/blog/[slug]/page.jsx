import BlogDetails from '@/Components/BlogDetails';
import { blogs } from '@/utils/Data';
import React from 'react'

const BlogPageDetails = async ({ params }) => {
    const { slug } = await params;
    const blog = blogs.find((p) => p.slug === slug);
    return (
        <div>
            <BlogDetails  blog={blog}/>
        </div>
    )
}

export default BlogPageDetails
