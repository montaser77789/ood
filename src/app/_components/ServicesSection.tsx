import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="mt-16">
      {/* Title */}
      <div className="text-center space-y-3 mb-10">
        <h2 className="text-2xl md:text-3xl font-medium">خدماتنا الاحترافية</h2>

        <p className="text-[#2C7A83] text-xl    ">
          برامج تدريبية وخدمات استشارية تدعم الجهات الحكومية والخاصة لتحقيق
          التميز
        </p>
      </div>
      {/* Service 2 */}
      <div className="relative">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/services/2952fec2b5e1e0a44e5d2bb5b77223be9c4d8480.png"
              alt="service"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-[250px] md:h-[320px]"
            />
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
          <div className="w-full md:w-1/2">
            <Image
              src="/services/c6a6a3a6d901d78e69cf4d895d050dad4921eeab.png"
              alt="service"
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-[250px] md:h-[320px]"
            />
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
    </section>
  );
}
