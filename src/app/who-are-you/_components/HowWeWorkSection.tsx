import { Globe, Users, Target, Database } from "lucide-react";

export default function HowWeWorkSection() {
  const items = [
    {
      icon: Globe,
      title: "أفضل الممارسات العالمية",
    },
    {
      icon: Users,
      title: "نعمل كشريك استراتيجي",
    },
    {
      icon: Target,
      title: "نحقق نتائج قابلة للقياس",
    },
    {
      icon: Database,
      title: "قرارات مبنية على البيانات",
    },
  ];

  return (
    <section className="mt-20 container">
      {/* Title */}
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-2xl md:text-3xl font-medium">كيف نعمل ؟</h2>

        <p className="text-[#004D54] text-lg md:text-xl">
          منهجية عمل احترافية تضمن تحقيق الأهداف بكفاءة وفعالية
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="border border-primary/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 hover:shadow-md transition"
            >
              {/* Icon Box */}
              <div className="w-25 h-25 rounded-xl flex items-center justify-center bg-gradient-to-l from-[#2C7A83] to-[#00ABBA]">
                <Icon className="text-white" size={47} />
              </div>

              {/* Text */}
              <h3 className="text-base md:text-lg font-semibold bg-gradient-to-r from-[#00656D] to-[#00ABBA] bg-clip-text text-transparent">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
