"use client";
import Image from "next/image";
import { IoSparklesOutline } from "react-icons/io5";

export default function ContactHeroSection() {
  return (
    <section className="mt-6 sectioncontainer">
      <div className="relative overflow-hidden rounded-[30px]">
        {/* Background */}
        <div className="relative h-[calc(100vh-120px)] w-full">
          {/* Background Image */}
          <Image
            src="/contact/de2aea5b3d84006fe8a417c2d86fbdab1c4f97b6.png"
            alt="about"
            fill
            className="object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-black/50" />{" "}
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16">
          <div className="max-w-3xl text-right text-white space-y-5">
            {/* Badge */}
            <div className="flex w-fit bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm  items-center gap-2">
              <IoSparklesOutline className="text-white" size={20} />
              تواصل معنا الأن
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
              دعم متكامل لنجاح شركتك
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 leading-loose">
              نحن هنا للإجابة على استفساراتك ومساعدتك في بدء رحلتك نحو تطوير
              مؤسستك
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
