"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoSparklesOutline } from "react-icons/io5";

export default function AboutHeroSection() {
  return (
    <section className="mt-6 sectioncontainer">
      <div className="relative overflow-hidden rounded-[30px]">
        {/* Background */}
        <div className="relative h-125 md:h-[calc(100vh-120px)] w-full">
          {/* Background Image */}
          <Image
            src="/about/about-bg.png"
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
            {/* Badge */}
            <div className="flex w-fit bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm  items-center gap-2">
              <IoSparklesOutline className="text-white" size={20} />
              من نحن ؟
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
              نصنع أثرًا مستدامًا في المؤسسات
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-loose">
              خبرة إماراتية في تطوير القدرات المؤسسية ودعم التحول نحو مستقبل
              أكثر كفاءة
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-start">
              <Button className="bg-secondary text-white px-6 py-5 rounded-xl hover:bg-secondary/90">
                اطلب استشارة الآن
              </Button>

              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-6 py-5 rounded-xl"
              >
                تعرف على خدماتنا
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
