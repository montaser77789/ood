import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "التميز والجودة المؤسسية",
      desc: "تمكين القيادات الحكومية من اتخاذ قرارات استراتيجية فعالة، وتعزيز فرق العمل بكفاءة لتحقيق الأهداف الوطنية.",
      img: "/servicespage/10110a1fa438b36091da56534811d1800c77563c.jpg",
    },
    {
      title: "إعداد الخطط الاستراتيجية",
      desc: "تأهيل المؤسسات لتبني التحول الرقمي وتطبيق تقنيات الذكاء الاصطناعي لرفع الكفاءة وتحسين تجربة الخدمات.",
      img: "/servicespage/4f1668dbd895bc2211ed6b93c9be16bfc15598d8.jpg",
    },
    {
      title: "دراسات الجدوى الاقتصادية والتشغيلية",
      desc: "تعزيز أطر الحوكمة وتطوير منهجيات إدارة المخاطر لضمان الاستدامة والامتثال وفق أفضل الممارسات.",
      img: "/servicespage/4dac94c0d5f1b70691160f557bf9863177ee3ff2.jpg",
    },
    {
      title: "تصميم الهياكل التنظيمية",
      desc: "تطبيق نماذج التميز المؤسسي وتحسين الأداء التشغيلي لتحقيق نتائج مستدامة ورفع مستوى التنافسية.",
      img: "/servicespage/cb330baf84b338d502ec3461523f061248c64d06.jpg",
    },
    {
      title: "تحليل العمليات وتحسينها (BPR)",
      desc:"رفع كفاءة الأداء المالي وتعزيز أنظمة الرقابة والتدقيق لضمان دقة التقارير واتخاذ قرارات مالية سليمة.",
      img: "/servicespage/e841a2bb0ebd52e398bdbfad5e28ffb54c64ba2f.jpg",
    },
    {
      title: "تطوير أدلة السياسات والإجراءات",
      desc:"بناء استراتيجيات اتصال فعالة تعزز الصورة المؤسسية وتدعم التواصل المؤثر مع مختلف الجهات.",
      img: "/servicespage/63d69d4378d33c2704fe99bbbcd500b7bc5bdde2.jpg",
    },
    {
      title: "الحوكمة والامتثال",
      desc:"تصميم برامج تطوير شاملة تركز على بناء القدرات المؤسسية وتعزيز كفاءة الكوادر بما يدعم النمو المستدام وتحقيق الأهداف الاستراتيجية.",
      img: "/servicespage/e294e1aeffb83362a32c1d0bee94abf7977546d4.jpg",
    },
    {
      title: "إدارة الأداء المؤسسي",
      desc:"تنمية المهارات السلوكية الأساسية مثل التواصل، والعمل الجماعي، وإدارة الوقت، لرفع كفاءة الأداء الفردي وتحسين بيئة العمل.",
      img: "/servicespage/33775f6ef5b1f026ef9ae721c49684083bc8254f.jpg",
    },
    {
      title: "إدارة المخاطر",
      desc:"تطوير كفاءة إدارة المشتريات والعقود بما يضمن الشفافية، وتحقيق أفضل قيمة مقابل الإنفاق.",
      img: "/servicespage/9c8f1ce75679304baf6462af6a024391fd5918f4.jpg",
    },

  ];

  return (
    <section className="mt-20 px-4 md:px-10">
      {/* Title */}
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">خدماتنا الاستشارية</h2>

        <p className="text-[#004D54] text-lg md:text-xl">
          خدمات استشارية مبنية على خبرة عملية ومنهجيات حديثة لدعم التحول المؤسسي
          وتحقيق التميز.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item, i) => (
          <div
            key={i}
            className="border border-gray-300 rounded-2xl p-4 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-[200px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="mt-4 text-right space-y-2">
              <h3 className="text-lg font-bold text-[#004D54]">{item.title}</h3>

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
