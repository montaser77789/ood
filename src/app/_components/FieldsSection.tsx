"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function FieldsSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  // ربط الأسهم بالـ Swiper بعد ما يجهز
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      // إعادة تهيئة الـ navigation عشان يشتغل
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const fields = [
    {
      title: "الابتكار واستشراف المستقبل",
      desc: "نساعد المؤسسات على تبني الابتكار واستشراف المستقبل من خلال حلول متقدمة تدعم النمو المستدام.",
      img: "/fields/9176e2a46eb410376ae12d1dd131e8729c2da643.png",
    },
    {
      title: "التميز المؤسسي والجودة",
      desc: "تطبيق نماذج التميز، تقييم الأداء، وتحسين جودة الخدمات المؤسسية.",
      img: "/fields/a7b30d8ae901ca61dd501a52ab91331d04f8b402.png",
    },
    {
      title: "التحول الرقمي والذكاء الاصطناعي",
      desc: "تمكين المؤسسات من التحول الرقمي باستخدام أحدث التقنيات والذكاء الاصطناعي.",
      img: "/fields/8e6a5da17c71f3282aefb4199b1ae25de4fa1e83.png",
    },
    {
      title: "ﺗﻄﻮﻳﺮ رأس اﻟﻤﺎل اﻟﺒﺸﺮي",
      desc: "اﻛﺘﺸﺎف وﺗﻄﻮﻳﺮ اﻟﻜﻔﺎءات، ﺑﻨﺎء اﻟﻘﺪرات، وﺗﺼﻤﻴﻢ اﻟﻤﺴﺎرات اﻟﻮﻇﻴﻔﻴﺔ",
      img: "/fields/cdec5a1246e0681369a34944505499a9e39e7717.png",
    },
    {
      title: "اﻻﺳﺘﺮاﺗﻴﺠﻴﺔ وإدارة اﻷداء",
      desc: "إﻋﺪاد اﻟﺨﻄﻂ اﻻﺳﺘﺮاﺗﻴﺠﻴﺔ ورﺑﻄﻬﺎ ﺑﺎﻟﻤﺆﺷﺮات وﻣﺘﺎﺑﻌﺔ اﻟﺘﻨﻔﻴﺬ",
      img: "/fields/893237d4516038f162df9499e8e5ccc45895e14c.png",
    },
    {
      title: "اﻟﺘﺪرﻳﺐ واﻟﺘﻄﻮﻳﺮ اﻟﻤﻬﻨﻲ",
      desc: "برامج متخصصه فى القيادة والموارد البشريو والخدمات الحكومية",
      img: "/fields/99ba8a9ea0299959af35a5644e10107ca0939d46.png",
    },
    {
      title: "اﻟﺤﻮﻛﻤﺔ وإدارة اﻟﻤﺨﺎﻃﺮ",
      desc: "ﺗﺼﻤﻴﻢ ﺳﻴﺎﺳﺎت اﻟﺤﻮﻛﻤﺔ وﺗﻌﺰﻳﺰ اﻻﻣﺘﺜﺎل وﻧﻈﻢ اﻟﺮﻗﺎﺑﺔ",
      img: "/fields/a0c3244d2f74fbc86d69e14871a8128de01090fe.png",
    },
    {
      title: "الدراسات والبحوث الإدارية",
      desc: "تحليل الوضع الحالى اعداد دراسات الجدوى والبحوث الميدانى",
      img: "/fields/b456a4546dead07bd8aba289e919cd75b37316cc.png",
    },
  ];

  return (
    <section className="mt-20 bg-[#FBFBFB] py-10">
      <div className="container">
        {/* Title */}
        <div className="text-center space-y-3 mb-3 md:mb-12 text-right">
          <h2 className="text-2xl md:text-3xl font-medium">
            مجالات العمل الرئيسية
          </h2>
          <p className="text-[#2C7A83] text-lg md:text-xl">
            نقدم حلولنا عبر مجموعة من المجالات المتخصصة لدعم التطوير المؤسسي
            وتحقيق التميز المستدام.
          </p>
        </div>

        {/* Swiper Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides
            loop
            onSwiper={setSwiperInstance} // استخدم onSwiper بدل onInit
            breakpoints={{
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
            }}
          >
            {fields.map((item, i) => (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <div
                    className={`p-3 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white scale-100 shadow-xl"
                        : "bg-white border scale-90 opacity-60"
                    }`}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={400}
                      height={250}
                      className="rounded-xl w-full h-[220px] object-cover"
                    />
                    <div className="mt-4 text-center space-y-2 min-h-[80px]">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p
                        className={`text-sm leading-relaxed transition-all duration-300 ${
                          isActive
                            ? "opacity-100 translate-y-0 text-white/90"
                            : "opacity-0 translate-y-2"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* الأسهم */}
          <div className="flex justify-between gap-3 mt-6 md:mt-10 md:top-[-100px] md:absolute  md:left-0 md:right-0 md:justify-end">
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
      </div>
    </section>
  );
}
