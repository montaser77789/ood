"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpLeft, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "من نحن", href: "#" },
    { name: "خدماتنا", href: "#" },
    { name: "رؤيتنا", href: "#" },
    { name: "البرامج", href: "#" },
    { name: "فريق العمل", href: "#" },
  ];

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
        <nav className="hidden md:flex items-center gap-3 bg-primary px-2 py-1 rounded-full">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`px-5 py-2 rounded-full text-sm transition font-medium ${
                i === 0
                  ? "bg-primary-foreground text-primary"
                  : "text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
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
        <div className="absolute top-full left-0 right-0 md:hidden mt-4 flex flex-col gap-3 bg-primary rounded-xl p-4">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-primary-foreground text-center py-2 rounded-md hover:bg-primary-foreground hover:text-primary transition"
            >
              {link.name}
            </Link>
          ))}

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
