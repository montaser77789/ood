"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";

export default function LogoSection() {
  const logos = [
    "/logos/0e43ed61547f923b8d6c3a378be1e6cd6a2f4773.png",
    "/logos/49c0aec414fcdebc7a86013214e1295b737f0bbc.png",
    "/logos/783602353cf3647ba64abb241e660d2b2b6ebc07.png",
    "/logos/a6ae9c27781fe25be477eed43867425aca750922.png",
    "/logos/ee976f9203cb9d8a49e525a9212571938a1163fb.png",
  ];

  return (
    <section className="mt-10 px-4 md:px-10">
      <div className="py-6">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={4000} // سرعة الحركة (كل ما كبرت = أبطأ وأنعم)
          autoplay={{
            delay: 0, // مهم جدًا عشان يبقى continuous
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          allowTouchMove={false} // يخليه زي شريط أخبار (بدون سحب)
        >
          {/* نكرر اللوجوهات عشان الحركة تبقى seamless */}
          {[...logos, ...logos].map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center opacity-70 hover:opacity-100 transition">
                <Image
                  src={logo}
                  alt="client logo"
                  width={120}
                  height={60}
                  className="object-contain  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
