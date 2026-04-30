import Image from "next/image";
import { Building2, Lightbulb, Target, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Building2,
      text: "مؤسسة إماراتية متخصصة في التدريب والاستشارات وتطوير القدرات المؤسسية لدعم التميز والاستدامة",
    },
    {
      icon: Lightbulb,
      text: "نركز على الابتكار، وتطوير رأس المال البشري، ودعم التحول الرقمي وتطبيق الحوكمة الحديثة",
    },
    {
      icon: Target,
      text: "نقدم حلولًا عملية ومرنة مبنية على أفضل الممارسات العالمية لتحقيق نتائج قابلة للقياس",
    },
    {
      icon: Users,
      text: "فريق من الخبراء بخبرات تراكمية تتجاوز 100 عام في التطوير المؤسسي والتدريب والاستشارات",
    },
  ];

  return (
    <section className="mt-20 container">
      {/* Title */}
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-2xl md:text-3xl font-medium">من نحن</h2>

        <p className="text-primary text-lg md:text-xl">
          خبرة في تطوير القدرات المؤسسية ودعم التحول نحو أداء أكثر كفاءة
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="w-full order-1 md:order-2">
          <Image
            src="/about/adace8be216df5cb23e86f2277fac8faa79897c1.jpg"
            alt="about"
            width={600}
            height={400}
            className="rounded-2xl w-full h-[300px] md:h-[420px] object-cover border-4 border-gray-200"
          />
        </div>

        {/* Text + Features - في الموبايل تبقى second (order-2) وفي الكبير تبقى first (order-1) */}
        <div className="space-y-6 text-right order-2 md:order-1">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-start gap-4">
                {/* Icon */}
                <div className="min-w-[40px] h-[40px] rounded-full bg-[#004D54] text-white flex items-center justify-center">
                  <Icon size={20} />
                </div>

                {/* Text */}
                <p className="text-[#181818] leading-loose text-base md:text-lg font-medium">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}