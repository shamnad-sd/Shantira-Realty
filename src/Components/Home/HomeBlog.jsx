import { blogs } from "@/utils/Data";
import Link from "next/link";
import Images from "../UI/Images";


const HomeBlog = () => {
  return (
    <section className="bg-[#2A6F7E] md:py-16 px-4 md:px-15 py-10">
      <div className=" mx-auto">
        {/* Heading */}
        <h2 className="text-center text-[20px]  tracking-wide text-white mb-8">
          Blogs &amp; Insights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white p-2 rounded-2xl overflow-hidden flex flex-col"
            >
              <Images
                imageurl={blog.image}
                alt={blog.title}
                width={400}
                height={200}
                placeholder={true}
                classes="w-full h-54 object-cover rounded-2xl"
              />
              <div className=" py-4 flex flex-col gap-2">
                <span className="text-[14px] text-[#EB5757]">
                  {blog.category}
                </span>
                <p className=" text-[#323232] font-medium leading-relaxed">
                  {blog.title}
                </p>
              </div>
            </article>
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
