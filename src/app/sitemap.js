import { blogs, navItems, projects } from "@/utils/Data";
import { frontendUrl } from "@/utils/urls";

export default async function sitemap() {
  // static pages from nav
  const staticPages = navItems.map((item) => ({
    url: `${frontendUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1.0 : 0.8,
  }));

  // dynamic project detail pages
  const projectPages = projects.map((project) => ({
    url: `${frontendUrl}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages = blogs.map((blog) => ({
    url: `${frontendUrl}/blog/${blog.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
