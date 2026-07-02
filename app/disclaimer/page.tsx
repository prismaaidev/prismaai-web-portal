import { ContentPageShell } from "@/app/_components/content/content-page-shell";
import { PageHero } from "@/app/_components/content/page-hero";

export default function DisclaimerPage() {
  return (
    <ContentPageShell surface="light">
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        description="Important context on how website content should be interpreted and when direct confirmation is required."
      />

      <section className="px-4 py-20 sm:px-6 lg:px-0 bg-slate-950">
        <div className="mx-auto max-w-7xl p-10 md:p-0">
          <div className="space-y-6 text-sm leading-7 text-slate-300 sm:text-base text-justify">
            <p>
              The information contained in this website is published in good
              faith and for general information purpose only. The information is
              provided by Prisma AI and while we endeavour to keep the
              information up to date and correct, we make no representations or
              warranties of any kind, expressed or implied, about the
              completeness, accuracy, reliability, suitability or availability
              with respect to the website or the information, products,
              services, or related graphics contained on the website for any
              purpose. Any reliance you place on such information is therefore
              strictly at your own risk.
            </p>
            <p>
              Unless otherwise indicated, the website is our proprietary
              property and all source code, database, functionality, website
              design, audio, video, text, photograph and graphic on the site and
              trademark, logos contained therein are owned and controlled by us
              or licensed to us and are protected by copyright, trademark and
              intellectual property rights as per applicable laws.
            </p>
            <p>
              In no event Prisma AI will be liable for any expense, loss or
              damage including, without limitation, indirect or consequential
              loss or damage, or any expense, loss or damage whatsoever arising
              from use, or loss of use, of data, arising out of or in connection
              with the use of this website.
            </p>
            <p>
              From our website, you can visit other websites by following
              hyperlinks to such external sites. While we strive to provide only
              quality links to useful and ethical websites, we have no control
              over the content and nature of these sites. These links to other
              websites do not imply a recommendation for all the content found
              on these sites. Site owners and content may change without notice
              and may occur before we have the opportunity to remove a link
              which may have gone &apos;bad&apos;.
            </p>
            <p>
              Every effort is made to keep the website up and running smoothly.
              However, Prisma AI takes no responsibility for, and will not be
              liable for, the website being temporarily unavailable due to
              technical issues beyond our control.
            </p>
            <p>
              By using our website, you hereby consent to our disclaimer and
              agree to its terms.
            </p>
          </div>
        </div>
      </section>
    </ContentPageShell>
  );
}
