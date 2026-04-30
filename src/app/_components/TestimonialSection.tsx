"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "تعاونّا مع فريق 2031 في عدد من المبادرات المتعلقة بالتحول الرقمي وتطوير الأداء، وكانوا على مستوى عالٍ من الاحترافية والفهم العميق لاحتياجاتنا. الفريق قدم حلول عملية ومبتكرة ساعدتنا في تحسين كفاءة العمليات وتعزيز تجربة العمل بشكل ملحوظ.",
      name: "شريك موثوق في التحول الرقمي",
      company: "e& (Etisalat)",
      img: "/1af2086220affecd5f498aeca93f64918a91bf86.jpg",
    },
    {
      text: "قدم الفريق حلولًا احترافية ساعدتنا في تحقيق نتائج ملموسة خلال فترة قصيرة، وكان التعاون معهم تجربة مميزة.",
      name: "مدير العمليات",
      company: "شركة كبرى",
      img: "/1af2086220affecd5f498aeca93f64918a91bf86.jpg",
    },
  ];

  return (
    <section className="mt-20 sectioncontainer">
      {/* Title */}
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-2xl md:text-3xl font-medium">اراء العملاء</h2>

        <p className="text-[#2C7A83] text-xl">
          نحن نعمل على تحسين كفاءة العمليات وتعزيز تجربة العمل بشكل ملحوظ
        </p>
      </div>
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
      >
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            {/* Quote */}
            <div className="text-primary text-6xl md:text-[80px] font-bold leading-none">
              “
            </div>
            <div className="text-right space-y-4  mx-auto">
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-primary">
                "شريك موثوق في التحول الرقمي"
              </h3>

              {/* Text */}
              <p className="text-lg md:text-xl text-primary leading-loose line-clamp-4">
                {item.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-4 mt-6">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-primary">{item.name}</p>
                  <p className="text-primary/80">{item.company}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows تحت شمال */}
      <div className="flex justify-end gap-3 mt-10">
        <button className="prev-btn w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
          <ChevronRight />
        </button>

        <button className="next-btn w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110">
          <ChevronLeft />
        </button>
      </div>
    </section>
  );
}
