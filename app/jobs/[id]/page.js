import Link from "next/link";
import { getJobById, getJobs } from "@/lib/job-service";
import JobApplyModal from "../_components/job-apply-modal";
import Hero from "../../admin/_components/mediaPost/hero";

export const dynamic = "force-dynamic";

function detailItems(job) {
  return [
    { label: "Address", value: job.address },
    { label: "Job Type", value: job.jobType },
    { label: "Requirements Count", value: job.requirementsCount },
    { label: "Experience Years", value: job.experienceYears },
    { label: "Salary", value: job.salary },
    { label: "Qualification", value: job.qualification },
    { label: "CTC", value: job.ctc },
  ].filter((item) => item.value);
}

export default async function JobDetailPage({ params }) {
  const { id } = await params;
  const job = await getJobById(id);
  const jobs = await getJobs();

  if (!job) {
    return (
      <div className="min-h-screen bg-slate-100 px-4 py-16 text-center text-slate-900">
        <div className="mx-auto max-w-xl rounded-[2rem] bg-white px-6 py-12 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-3xl font-bold">Job not found</h2>
          <p className="mt-3 text-sm text-slate-500">
            The job you are trying to open does not exist.
          </p>
          <Link
            href="/jobs"
            className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
          >
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  const suggestedJobs = jobs.filter((item) => String(item._id) !== String(id));

  return (
    
    <div>
      
      <Hero title="Prisma`s press releases" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966"/>
      
<div className="min-h-screen  px-4 py-10 text-slate-100 font-sans antialiased">
      <div className="mx-auto max-w-7xl">
        
        {/* Top Header Block matching the dark UI style */}
        <div className="mb-10 pb-8 border-b border-slate-800">
     <Link
  href="/jobs"
  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 transition hover:text-sky-300"
>
  <svg className="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
  </svg>
  Back to Jobs
</Link>

          
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-sky-500">
            Career Opportunity
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
            {job.title || "Untitled Job"}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span className="flex items-center gap-2">
              {/* Location Icon */}
              <svg className="h-4 w-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {job.address || "Location details pending"}
            </span>
            <span className="flex items-center gap-2">
              {/* Job Type Icon */}
              <svg className="h-4 w-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Full Time
            </span>
          </div>
        </div>

        {/* Dynamic Responsive Layout grid */}
        <div className="grid gap-8 xl:grid-cols-[1fr_360px] items-start">
          
          {/* LEFT CONTENT SECTION - Scrolls smoothly */}
          <main className="space-y-6">
            {/* Optional Top Job Image banner */}
            {job.image && (
              <div className="overflow-hidden rounded-lg border border-slate-800">
                <img
                  src={job.image}
                  alt={job.title || "Job banner"}
                  className="h-64 w-full object-cover sm:h-80"
                />
              </div>
            )}

            {/* Dynamic Custom Data Sections Rendering */}
            {job.sections?.map((section, index) => (
              <section
                key={`${section.title}-${index}`}
                className="rounded-lg border border-slate-800 bg-[#0d1425] p-6 sm:p-8 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="h-1 w-6 bg-sky-500 rounded" />
                  <h2 className="text-xl font-bold tracking-wide text-white">
                    {section.title || `Section ${index + 1}`}
                  </h2>
                </div>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-400 whitespace-pre-wrap">
                  {section.description || "No description added."}
                </div>
              </section>
            ))}
          </main>

          {/* RIGHT SIDEBAR - Sticky behavior container */}
          <aside className="xl:sticky xl:top-6 space-y-4">
            
            {/* CTA Core Apply Block */}
            <div className="rounded-lg border border-slate-800 bg-[#0d1425] p-6 shadow-xl text-center xl:text-left">
              <h3 className="text-sm font-semibold text-slate-300">Think you're a fit?</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                We are looking for pioneers ready to push the boundaries of intelligence. If you are passionate about AI, let's build the future together.
              </p>
              
              <div className="mt-6">
                <JobApplyModal
                  jobId={job._id.toString()}
                  jobTitle={job.title || "Untitled Job"}
                  buttonLabel="Apply For This Job ?"
                  buttonClassName="w-full justify-center inline-flex items-center rounded-xl bg-sky-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition duration-200 hover:bg-sky-400 shadow-lg shadow-sky-500/20"
                />
              </div>

              {/* Extra Utility Action Controls */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-[#0d1425] px-4 py-2.5 text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-[#0d1425] px-4 py-2.5 text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Save
                </button>
              </div>
            </div>

            {/* Dynamic Job Specifications (Salary, Experience, Qualification metrics) */}
            {detailItems(job).map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-slate-800 bg-[#0d1425] p-5 shadow-xl"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  {item.label}
                </p>
                <p className="mt-1.5 text-base font-extrabold tracking-wide text-sky-400">
                  {item.value}
                </p>
              </div>
            ))}

            {/* Suggested Jobs Block */}
            <div className="rounded-lg border border-slate-800 bg-[#0d1425] p-5 shadow-xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">Suggested Jobs</h3>
              <div className="mt-4 space-y-3">
                {suggestedJobs.map((item) => (
                  <Link
                    key={item._id.toString()}
                    href={`/jobs/${item._id}`}
                    className="flex gap-3 rounded-lg border border-slate-800/60 bg-[#0d1425] p-3 transition hover:border-slate-700 hover:bg-[#111a2e]"
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title || "Suggested job"}
                        className="h-12 w-12 rounded-lg object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-800 text-[10px] text-slate-500">
                        No Img
                      </div>
                    )}
                    <div className="min-w-0 flex-1 justify-center flex flex-col">
                      <h4 className="line-clamp-1 text-xs font-bold text-slate-200">
                        {item.title || "Untitled Job"}
                      </h4>
                      <p className="mt-1 line-clamp-1 text-[11px] text-slate-500">
                        {item.address || "Address pending"}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {suggestedJobs.length === 0 && (
                <div className="mt-3 rounded-xl border border-dashed border-slate-800 p-4 text-center text-xs text-slate-500">
                  No suggested jobs available yet.
                </div>
              )}
            </div>

          </aside>
        </div>
      </div>
    </div>
    </div>
  );
}
