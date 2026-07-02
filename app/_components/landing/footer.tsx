

import Link from "next/link";

import { certifications, productMenu } from "./landing-data";

export function FooterSection() {
  return (

    <footer
      id="footer"
      className="bg-[#0f162a] pt-12 px-4 py-6 text-white sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 rounded-[36px] lg:flex-row">
          {/* LEFT SECTION */}
          <div className="w-full lg:w-[50%]">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link href="/">
                <img src="/img/logo-white.png" alt="Prisma.ai Logo" />
              </Link>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
              Empower your operations with intelligent AI Vision solutions
              tailored to your industry needs. From construction sites to
              passenger transit systems, our customized AI models deliver
              real-time monitoring, advanced analytics.
            </p>

            {/* Social Media */}
            <div className="pt-8">
              <p className="text-sm font-semibold text-white">
                CONNECT WITH PRISMA AI
              </p>

              <div className="mt-6 flex items-center gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/prismaaiofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-200 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* X */}
                <a
                  href="https://x.com/prisma_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-200 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
                  aria-label="X"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/prismaaiofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-200 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/prismaaiofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-200 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full lg:w-[50%] md:ps-8">
            {/* MOBILE LAYOUT */}
            <div className="grid grid-cols-2 gap-8 sm:hidden">
              {/* Company */}
              <div>
                <p className="text-sm font-semibold text-white">Company</p>

                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <Link
                    href="/about"
                    className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    Prisma AI
                  </Link>

                  <Link
                    href="/about#executive-team"
                    className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    Executive Team
                  </Link>

                  <Link
                    href="/about#history"
                    className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    History
                  </Link>

                  {/* <Link
                    href="/about"
                    className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    Awards
                  </Link> */}
                </div>
              </div>

              {/* Products */}
              <div>
                <p className="text-sm font-semibold text-white">Products</p>

                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  {productMenu.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Media Coverage */}
              <div>
                <p className="text-sm font-semibold text-white">
                  Media coverages
                </p>

                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <Link
                    href="/press-releases"
                    className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    Press Releases
                  </Link>

                  <Link
                    href="/articles"
                    className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    Articles
                  </Link>

                  <Link
                    href="/blog"
                    className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    Blogs
                  </Link>
                </div>
              </div>

              {/* Badge */}
              <div className="flex items-start ">
                <img
                  src="/img/great.png"
                  alt="Great Place to Work"
                  className="h-28 w-auto"
                />
              </div>
            </div>

            {/* DESKTOP/TABLET LAYOUT */}
            <div className="hidden gap-10 sm:grid sm:grid-cols-4">
              {/* Company */}
              <div>
                <p className="text-sm font-semibold text-white">Company</p>

                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <Link
                     href="/about#prisma-ai"
                    className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    Prisma AI
                  </Link>

                  <Link
                    href="/about#executive-team"
                    className="block  transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    Executive Team
                  </Link>

                  <Link
                    href="/about#history"
                    className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    History
                  </Link>

                  {/* <Link
                    href="/about"
                    className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    Awards
                  </Link> */}
                </div>
              </div>

              {/* Products */}
              <div>
                <p className="text-sm font-semibold text-white">Products</p>

                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  {productMenu.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Media Coverage */}
              <div>
                <p className="text-sm font-semibold text-white">
                  Media coverages
                </p>

                <div className="mt-4 space-y-3 text-sm text-slate-300">
                  <Link
                    href="/press-releases"
                    className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    Press Releases
                  </Link>

                  <Link
                    href="/articles"
                    className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    Articles
                  </Link>

                  <Link
                    href="/blog"
                    className="block transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
                  >
                    Blogs
                  </Link>
                </div>
              </div>

              {/* Badge */}
              <div>
                <img
                  src="/img/great.png"
                  alt="Great Place to Work"
                  className="h-30 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-8 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {new Date().getFullYear()} All rights reserved by Prisma AI
            Corporation Pte. Ltd.
          </p>

          {/* MOBILE LINKS */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-6 sm:hidden">
            <Link
              href="/disclaimer"
              className="transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
            >
              Disclaimer
            </Link>

            <Link
              href="/important-notice"
              className="transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
            >
              Important Notice
            </Link>

            <Link
              href="/privacy-policy"
              className="transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
            >
              Terms & Conditions
            </Link>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden flex-wrap gap-6 sm:flex">
            <Link
              href="/disclaimer"
              className="transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
            >
              Disclaimer
            </Link>

            <Link
              href="/important-notice"
              className="transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
            >
              Important Notice
            </Link>

            <Link
              href="/privacy-policy"
              className="transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-cyan-400 hover:underline decoration-cyan-400 decoration-2 underline-offset-4"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
