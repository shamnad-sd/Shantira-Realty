import { projects } from "@/utils/Data";
import Link from "next/link";
import ProjectCard from "../UI/ProjectCard";

const HomeProjects = () => {
    return (
        <section className="section-color md:py-16 px-4 md:px-15 py-10">
            <div className="mx-auto">
                <h2 className="text-center text-[20px]  tracking-wide text-white mb-8">
                    Featured Projects
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {projects.slice(0, 3).map((project) => (
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

                <div className="mt-5 flex justify-center">
                    <Link href="/projects">
                        <button className="px-6 py-1.5 cursor-pointer rounded-md bg-[#CFA77F] hover:bg-[#356DA4] transition duration-150 text-white">
                            View More
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default HomeProjects;