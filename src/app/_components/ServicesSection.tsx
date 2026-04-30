import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BrainCircuit } from "lucide-react";
import { TbTargetArrow } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";

export default function ServicesSection() {
  return (
    <section className="mt-16 bg-[#FBFBFB]  py-10">
      <div className="sectioncontainer">
        {/* Title */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl md:text-3xl font-medium">
            خدماتنا الاحترافية
          </h2>

          <p className="text-[#2C7A83] text-xl    ">
            برامج تدريبية وخدمات استشارية تدعم الجهات الحكومية والخاصة لتحقيق
            التميز
          </p>
        </div>
        {/* Service 2 */}
        <div className="relative">
          <div className="flex flex-col md:flex-row-reverse items-center gap-6">
            {/* Image */}
            <div className="w-full md:w-1/2 relative">
              <Image
                src="/services/c6a6a3a6d901d78e69cf4d895d050dad4921eeab.png"
                alt="service"
                width={800}
                height={800}
                className="rounded-xl   w-full h-full  z-100 "
              />
              <div className="absolute top-0 right-0  z-100 bg-primary w-9 h-9 md:w-20 md:h-20 rounded-full flex items-center justify-center">
                <LuBrainCircuit className="text-white text-2xl md:text-5xl" />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-right space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">
                الخدمات الاستشارية الاستراتيجية
              </h3>

              <p className="text-[#2279C1] text-sm md:text-lg leading-loose">
                حلول استشارية استراتيجية تساعد المؤسسات على تحسين الأداء، ورفع
                الكفاءة، وتحقيق أهدافها بكفاءة واستدامة طويلة.
              </p>

              <Button className="flex items-center gap-2 py-5 px-12">
                اعرف المزيد
                <ArrowLeft />
              </Button>
            </div>
          </div>
        </div>

        {/* Service 1 */}
        <div className=" rounded-2xl p-4 md:p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Image */}
            <div className="w-full md:w-1/2 relative">
              <Image
                src="/services/2952fec2b5e1e0a44e5d2bb5b77223be9c4d8480.png"
                alt="service"
                width={800}
                height={800}
                className="rounded-xl   w-full h-full  z-100 "
              />
              <div className="absolute top-0 left-0  z-100 bg-primary w-9 h-9 md:w-20 md:h-20 rounded-full flex items-center justify-center">
                <TbTargetArrow className="text-white text-2xl md:text-5xl" />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-right space-y-4">
              <h3 className="text-xl md:text-2xl font-bold">
                الخدمات التدريبية المتخصصة
              </h3>

              <p className="text-[#2279C1] text-sm md:text-lg leading-loose">
                برامج تدريبية متخصصة مصممة لتطوير المهارات وبناء القدرات بما
                يتماشى مع احتياجات سوق العمل والتحول المؤسسي.
              </p>

              <Button className="flex items-center gap-2 py-5 px-12">
                اعرف المزيد
                <ArrowLeft />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
