import { ContentPageShell } from "@/app/_components/content/content-page-shell";
import { PageHero } from "@/app/_components/content/page-hero";

export default function ImportantNoticePage() {
  return (
    <ContentPageShell surface="light">
      <PageHero
        eyebrow="Legal"
        title="Important Notice"
        description="Read this page before relying on regional, commercial, legal, or operational information published on the site."
      />

      <section className="px-4 py-20 sm:px-6 lg:px-0 bg-slate-950">
        <div className="mx-auto max-w-7xl p-10 md:p-0">
          <div className="space-y-6 text-sm leading-7 text-slate-300 sm:text-base text-justify">
            <p>
              It has come to the management&apos;s attention that certain
              third‑party websites and online platforms are displaying
              unverified, unsolicited or unauthorised share prices, market data,
              analyst commentary and/or other financial information relating to
              the Company. Such information has not been supplied, authorised,
              or endorsed by the Company in any manner, and the Company
              expressly disclaims all liability for the accuracy, completeness,
              timeliness, reliability, or suitability of any such information.
            </p>
            <p>
              The Company is not responsible for and disclaims any liability
              arising from transactions, agreements, or dealings between third
              parties in relation to the Company’s shares or securities, and any
              reliance on or use of financial information published by
              unauthorised third parties is at the reader’s sole risk for
              authoritative information, refer only to the Company’s official
              disclosures and filings or contact the Company directly.
            </p>
          </div>
        </div>
      </section>
    </ContentPageShell>
  );
}
