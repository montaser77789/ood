"use client";

import { Pages } from "@/components/constants/enum";
import Link from "@/components/Link/link";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { IoSparklesOutline } from "react-icons/io5";

export default function ServicesHeroSection() {
  return (
    <section className="mt-6 sectioncontainer">
      <div className="relative overflow-hidden rounded-[30px]">
        {/* Background */}
        <div className="relative h-[calc(100vh-120px)] w-full">
          {/* Background Image */}
          <Image
            src="/servicespage/d78a19cd29a9f244e534ba8e977221e86542c935.jpg"
            alt="about"
            fill
            className="object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-black/50" />{" "}
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="max-w-xl text-right text-white space-y-5">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
              حلول استشارية ترتقي بالأداء المؤسسي
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-loose">
              نساعد الجهات الحكومية والخاصة على تطوير استراتيجياتها، وتحسين
              هياكلها التنظيمية، وتعزيز كفاءة عملياتها لتحقيق نتائج مستدامة
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
