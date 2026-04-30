"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";



export default function TeamSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  // ربط الأسهم بالـ Swiper
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      // إعادة تهيئة الـ navigation
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const team = [
    {
      title: "باحثون ومتخصصون",
      desc: "في الدراسات الإدارية والتطويرية",
      img: "/about/d0c627622fbe5ee2e3f88b2fab07ecd68d09f3c3.png",
    },
    {
      title: "محللو بيانات ومطورون",
      desc: "للمحتوى التدريبي",
      img: "/about/92795ea01921bd49c7f0c16dd02a5f9fac88bb01.png",
    },
    {
      title: "مستشارون متخصصون",
      desc: "في الموارد البشرية والتميز المؤسسي",
      img: "/about/48ba38550e616b76ec1f8426ac28417307428a1a.png",
    },
  ];

  return (
    <section className="mt-20 sectioncontainer">
      {/* Header - العنوان لوحده في الشمال */}
      <div className="text-right mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          فريق يقود التميز المؤسسي
        </h2>
        <p className="text-primary text-lg md:text-xl mt-2">
          نخبة من الخبراء والمتخصصين بخبرات عملية تدعم تحقيق نتائج ملموسة
        </p>
      </div>

      {/* Swiper Section - نلفها في div relative عشان نتحكم في مكان الأسهم */}
      <div className="relative">
        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1.2}
          onSwiper={setSwiperInstance}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {team.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="border border-[#949494] rounded-2xl p-2 hover:shadow-md transition">
                {/* Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="rounded-xl w-full h-[300px] object-cover"
                />

                {/* Text */}
                <div className="mt-4 text-right space-y-1">
                  <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* الأسهم - في الموبايل تحت الكروت، وفي الكبير جنب العنوان */}
        <div className="flex justify-between gap-3 mt-6 md:mt-0 md:absolute md:top-[-90px] md:left-0 md:right-0 md:justify-end">
          <button
            ref={prevRef}
            className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition shadow-md z-10"
          >
            <ChevronRight />
          </button>

          <button
            ref={nextRef}
            className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition shadow-md z-10"
          >
            <ChevronLeft />
          </button>
        </div>
      </div>
    </section>
  );
}