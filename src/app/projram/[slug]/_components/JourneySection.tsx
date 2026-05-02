import { FileText, ClipboardCheck, Users, Star, User } from "lucide-react";
const icons = {
  FileText,
  ClipboardCheck,
  Users,
  Star,
  User,
};
type IconName = keyof typeof icons;
export default function   JourneySection({
  steps,
}: {
  steps: { icon: any; title: string; desc: string }[];
}) {
  return (
    <section className="mt-20 px-4 md:px-10">
      {/* Title */}
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          رحلتك نحو قيادة أكثر تأثيراً
        </h2>

        <p className="text-primary text-lg md:text-xl">
          تجربة تعليمية متكاملة تبدأ بفهم أسلوبك القيادي، وتنتهي بقدرتك على
          اتخاذ قرارات واثقة
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((step, i) => {
          const Icon = icons[step.icon as IconName];
          return (
            <div
              key={i}
              className="border border-[#004D54] rounded-2xl p-6 text-center space-y-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full border-4 border-primary">
                <Icon size={28} className="text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold">{step.title}</h3>

              {/* Desc */}
              <p className="text-sm text-gray-600 leading-loose">{step.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
