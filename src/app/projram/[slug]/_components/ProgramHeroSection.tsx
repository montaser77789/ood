"use client";

import { Pages } from "@/components/constants/enum";
import Link from "@/components/Link/link";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { IoSparklesOutline } from "react-icons/io5";

export default function ProjramHeroSection({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="mt-6 sectioncontainer">
      <div className="relative overflow-hidden rounded-[30px]">
        {/* Background */}
        <div className="relative  h-125 md:h-[calc(100vh-120px)] w-full">
          {/* Background Image */}
          {image && (
            <Image src={`${image}`} alt="about" fill className="object-cover" />
          )}
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-black/50" />{" "}
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="max-w-xl text-right text-white space-y-5">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
              {title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-loose">
              {description}
            </p>

            {/* Buttons */}
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href={`${Pages.CONTACT_US}`}
                className={`${buttonVariants({ variant: "default" })} , px-6 md:px-12 py-5 rounded-xl bg-secondary text-white hover:bg-secondary/90`}
              >
                <span> اطلب استشارة الآن </span>
              </Link>
              <Link
                href={`${Pages.SERVICS}`}
                className={`${buttonVariants({ variant: "outline" })} , px-6 md:px-12 py-5 rounded-xl border-white text-white hover:bg-white hover:text-black`}
              >
                تعرف على خدماتنا
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
