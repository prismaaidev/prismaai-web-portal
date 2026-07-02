"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useState } from "react";

import { aboutMenu, moreMenu, productMenu } from "./landing-data";
import { PocRequestModal } from "./poc-request-modal";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <img src="/img/white-logo.png" width={120} height={50} />
    </Link>
  );
}

function NavItem({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  if (href.startsWith("/") && !href.includes("#")) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

function DesktopDropdown({
  label,
  items,
  panelClassName,
  itemsClassName,
}: {
  label: string;
  items: { label: string; href: string }[];
  panelClassName?: string;
  itemsClassName?: string;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-white "
      >
        {label}
        <span className="text-[10px] text-cyan-300">▼</span>
      </button>
      <div className="pointer-events-none absolute left-0 top-full pt-4 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div
          className={`rounded-lg border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl ${panelClassName ?? "w-56"}`}
        >
          <div className={itemsClassName}>
            {items.map((item) => (
              <NavItem
                key={item.label}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </NavItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const toggleGroup = (group: string) => {
    setOpenGroup((current) => (current === group ? null : group));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  return (
    <header className="fixed inset-x-0  top-0 z-50 px-4 sm:px-6 lg:px-8 border-b border-white/10  bg-[#070B14]/70 backdrop-blur-xl ">
      <div className="mx-auto flex max-w-7xl items-center justify-between   py-3 ">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          <DesktopDropdown label="Company" items={aboutMenu} />
          <Link
            href="/core-algorithm"
            className="text-sm font-medium text-slate-200 transition hover:text-white"
          >
            Core Algorithm
          </Link>
          <Link
            href="/solutions"
            className="text-sm font-medium text-slate-200 transition hover:text-white"
          >
            Solutions
          </Link>
          <DesktopDropdown label="Products" items={productMenu} />
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-200 transition hover:text-white"
          >
            Contact
          </Link>
          <DesktopDropdown
            label="More"
            items={moreMenu}
            panelClassName="w-[29rem]"
            itemsClassName="grid grid-cols-2 gap-1"
          />
        </nav>

        <div className="flex items-center gap-3">
          <PocRequestModal  buttonLabel="Get POC"  buttonClassName="hidden rounded-lg  px-6 py-2  lg:inline-flex px-6 rounded-lg bg-[#00AEEF] text-white text-sm font-medium flex items-center gap-2 hover:bg-[#0095cc] transition shadow-[0_0_30px_rgba(0,174,239,0.25)]" />
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-lg border border-white/10 bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => toggleGroup("about")}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              Prisma AI
              <span className="text-xs text-cyan-300">
                {openGroup === "about" ? "−" : "+"}
              </span>
            </button>
            {openGroup === "about" ? (
              <div className="space-y-1 px-3 pb-2">
                {aboutMenu.map((item) => (
                  <NavItem
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </NavItem>
                ))}
              </div>
            ) : null}

            <Link
              href="/core-algorithm"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              Core Algorithm
            </Link>

            <Link
              href="/solutions"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              Solutions
            </Link>

            <button
              type="button"
              onClick={() => toggleGroup("products")}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              Products
              <span className="text-xs text-cyan-300">
                {openGroup === "products" ? "−" : "+"}
              </span>
            </button>
            {openGroup === "products" ? (
              <div className="space-y-1 px-3 pb-2">
                {productMenu.map((item) => (
                  <NavItem
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </NavItem>
                ))}
              </div>
            ) : null}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={() => toggleGroup("more")}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
            >
              More
              <span className="text-xs text-cyan-300">
                {openGroup === "more" ? "−" : "+"}
              </span>
            </button>
            {openGroup === "more" ? (
              <div className="grid grid-cols-2 gap-1 px-3 pb-2">
                {moreMenu.map((item) => (
                  <NavItem
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="block rounded-lg px-4 py-3 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </NavItem>
                ))}
              </div>
            ) : null}

            <PocRequestModal
              onOpen={closeMenu}
             buttonLabel="Get POC"
              buttonClassName="mt-3 inline-flex w-full justify-center rounded-full btn-primary px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
            />
          </div>
        </div>
      ) : null}
    </header>
  );
}
