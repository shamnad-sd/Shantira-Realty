import { blogs } from "@/utils/Data";
import Link from "next/link";
import BlogCard from "../UI/BlogCard";


const HomeBlog = () => {
  return (
    <section className="bg-[#2A6F7E] md:py-16 px-4 md:px-15 py-10">
      <div className=" mx-auto">
        {/* Heading */}
        <h2 className="text-center text-[20px]  tracking-wide text-white mb-8">
          Blogs &amp; Insights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {blogs.slice(0, 4).map((blog) => (
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

        <div className="mt-4 flex justify-center">
          <Link href={'/blog'}>
            <button className="mt-2 cursor-pointer inline-flex items-center rounded-md bg-white text-[#2A6F7E] hover:bg-[#CFA77F] hover:text-white transition duration-100  px-6 py-1 shadow-sm">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
