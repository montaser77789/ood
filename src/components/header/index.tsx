"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpLeft, Menu, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Pages, Routes } from "../constants/enum";
import Link from "../Link/link";
import { projram } from "@/app/projram/[slug]/page";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "الرئيسية", href: `${Routes.HOME}` },
    { name: "من نحن", href: `/${Pages.WHO_ARE_YOU}` },
    { name: "فريق العمل", href: `/` },
    { name: "خدماتنا", href: `/${Pages.SERVICS}` },
    { name: "التواصل", href: `/${Pages.CONTACT_US}` },
    { name: "البرامج", href: "#", isDropdown: true },
  ];

  // Function to check if link is active
  const isActive = (href: string) => {
    if (href === Routes.HOME) {
      return pathname === Routes.HOME;
    }
    return pathname === href;
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 py-3 px-4 md:px-10 transition-all duration-300
      bg-background/80 
      ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-primary font-bold text-xl">
          <Image src="/logo.png" width={50} height={50} alt="logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3 bg-primary px-2 py-1 rounded-full relative">
          {navLinks.map((link, i) => {
            // Dropdown for "البرامج"
            if (link.isDropdown) {
              return (
                <div key={i} className="relative group">
                  <button className="px-5 py-2 rounded-full text-sm font-medium text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 flex items-center gap-1">
                    {link.name}
                    <ChevronDown
                      size={16}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute top-full right-0 mt-3 w-80 bg-white rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100 overflow-hidden">
                    <div className="py-2 max-h-96 overflow-y-auto">
                      {projram.map((item) => (
                        <Link
                          key={item.id}
                          href={`/projram/${item.slug}`}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200 border-b border-gray-50 last:border-0"
                        >
                          <div className="flex items-start gap-2">
                            <span className="text-lg">✨</span>
                            <div>
                              <p className="font-medium">{item.hero.title}</p>
                              <p className="text-xs text-gray-500 group-hover:text-white/80 mt-0.5 line-clamp-1">
                                {item.hero.description?.substring(0, 60)}...
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // Normal links - active link has white background
            const active = isActive(link.href);

            return (
              <Link
                key={i}
                href={link.href}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-primary-foreground text-primary"
                    : "text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className="py-5 px-6 rounded-[16px] bg-primary text-primary-foreground hover:bg-primary/90 group"
          >
            <a
              href="https://wa.me/201007791095"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              تواصل مع فريقنا
              <ArrowUpLeft className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 md:hidden mt-4 flex flex-col gap-3 bg-primary rounded-xl p-4 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link, i) => {
            // للبرامج في الموبايل - تظهر مختلفة
            if (link.isDropdown) {
              return (
                <div key={i} className="flex flex-col gap-2">
                  <p className="text-primary-foreground font-medium px-2 py-1">
                    {link.name}
                  </p>
                  <div className="pr-4 border-r-2 border-primary-foreground/30 space-y-2">
                    {projram.map((item) => (
                      <Link
                        key={item.id}
                        href={`/projram/${item.slug}`}
                        onClick={() => setOpen(false)}
                        className="block text-primary-foreground/90 text-sm py-2 px-3 rounded-md hover:bg-primary-foreground hover:text-primary transition"
                      >
                        {item.hero.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            const active = isActive(link.href);

            return (
              <Link
                key={i}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-center py-2 rounded-md transition ${
                  active
                    ? "bg-primary-foreground text-primary"
                    : "text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Button
            asChild
            className="bg-primary-foreground text-primary mt-2 group"
          >
            <a
              href="https://wa.me/201007791095"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              تواصل مع فريقنا
              <ArrowUpLeft className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
