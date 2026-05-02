"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "@/components/Link/link";
import { Pages, Routes } from "@/components/constants/enum";

// مهم جدًا

export default function HeroSection() {
  const slides = [
    "/hero/4259e81516c9cb5b52b702002dfad145961cdcbf.png",
    "/hero/e7c2a731c137a9bb610d7ac817bba0ba4689530c.png",
    "/hero/20af6b8f50c52bd0d8911346720294585219cd0a.jpg",
  ];

  return (
    <section className="sectioncontainer mt-4">
      <div className="relative rounded-[30px] overflow-hidden">
        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="h-125 md:h-[calc(100vh-120px)]"
        >
          {slides.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt="hero"
                  fill
                  priority={i === 0}
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/50 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4 md:px-16 z-10">
          <div className="max-w-xl text-center md:text-right text-white space-y-4 md:space-y-6">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
              شريككم في التحول <br />
              <span className="text-secondary">المؤسسي الرقمي</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-xl text-[#FEFEFE] leading-loose">
              حلول متكاملة تدعم الابتكار وتعزز كفاءة الأداء المؤسسي، وتواكب
              تطلعات المستقبل لتحقيق نمو مستدام ونتائج ملموسة
            </p>

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
