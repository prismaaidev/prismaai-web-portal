import Link from "next/link";

import { ContentPageShell } from "@/app/_components/content/content-page-shell";
import { PageHero } from "@/app/_components/content/page-hero";
import { getPosts } from "@/lib/post-service";
import Hero from "../admin/_components/mediaPost/hero";

/* eslint-disable @next/next/no-img-element */

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <ContentPageShell>
  <Hero title="Prisma`s Blogs" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966"/>


  <section className="bg-[#020618] px-4 py-16 sm:px-6 lg:px-8 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <h3 className="mb-10 text-3xl  tracking-tight text-white sm:text-4xl">
          Recent Post
        </h3>

        {posts.length === 0 ? (
          <div className="rounded-lg border border-white/10 bg-white/5 px-6 py-14 text-center text-slate-400">
            No blog posts are available yet.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post._id?.toString()}
                href={`/blog/${post._id}`}
                className="group flex flex-col justify-between overflow-hidden rounded-lg border border-white/[0.06] bg-[#0d1425] p-5 transition duration-300 hover:border-cyan-500/40 hover:bg-[#0F1A30]"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative overflow-hidden rounded-lg aspect-[16/10] w-full">
                    <img
                      src={post.image}
                      alt={post.title || "Blog post image"}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {/* Floating Category Badge */}
                    {post.category && (
                      <span className="absolute left-3 top-3 rounded bg-cyan-950/80 px-2 py-0.5 text-[9px] font-bold tracking-widest text-cyan-400 uppercase backdrop-blur-sm border border-cyan-500/20">
                        {post.category}
                      </span>
                    )}
                  </div>

                  {/* Metadata & Title Content */}
                  <div className="mt-5">
                    <span className="text-[15px] font-medium text-slate-500">
                      {post.date || "Jan 19, 2024"}
                    </span>
                    
                    <h3 className="mt-3 text-xl font-semibold leading-snug text-slate-100 transition group-hover:text-white">
                      {post.title}
                    </h3>
                    
                    {post.description && (
                      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
                        {post.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer Action Area */}
                <div className="mt-8 flex items-center justify-between border-t border-white/[0.04] pt-4 text-lg font-medium text-slate-500 transition group-hover:text-cyan-400">
                  <span>{post.readingTime || "Read more"}</span>
                  <svg
                    className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      path="M14 5l7 7m0 0l-7 7m7-7H3"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
    </ContentPageShell>
  );
}
