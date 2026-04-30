import { CheckCircle } from "lucide-react";

export default function WhyUsSection() {
  const items = [
    {
      title: "خبرة في السوق الخليجي",
      desc: "فهم عميق للبيئة التنظيمية والثقافية في دولة الإمارات ودول مجلس التعاون",
    },
    {
      title: "فهم عميق للجهات الحكومية",
      desc: "خبرة واسعة في العمل مع القطاع الحكومي ومعرفة دقيقة بمتطلباته وأولوياته",
    },
    {
      title: "حلول عملية وليست نظرية",
      desc: "نركز على التطبيق والتنفيذ بدلًا من التقارير النظرية، مع متابعة حتى تحقيق النتائج",
    },
    {
      title: "سرعة التنفيذ وجودة النتائج",
      desc: "فريق متمرس قادر على تحقيق نتائج ملموسة في فترات زمنية قياسية",
    },
  ];

  return (
    <section className="mt-20 container">
      {/* Title */}
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-2xl md:text-3xl font-medium">ما الذي يميزنا ؟</h2>

        <p className="text-[#004D54] text-lg md:text-xl">
          منهجية عمل احترافية تضمن تحقيق الأهداف بكفاءة وفعالية
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-6 rounded-2xl border border-gray-300 bg-white hover:shadow-md transition"
          >
            {/* Icon (يمين عشان RTL) */}
            <div className="min-w-[40px] h-[40px] flex items-center justify-center rounded-full border border-primary text-[#004D54]">
              <CheckCircle size={20} />
            </div>

            {/* Text */}
            <div className="text-right space-y-2">
              <h3 className="text-lg font-semibold text-[#004D54]">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base leading-loose">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
