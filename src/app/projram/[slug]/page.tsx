import React from "react";
import ProgramHeroSection from "./_components/ProgramHeroSection";
import TargetAudienceSection from "./_components/TargetAudienceSection";
import WhatYouLearnSection from "./_components/WhatYouLearnSection";
import JourneySection from "./_components/JourneySection";
import TestimonialSection from "@/app/_components/TestimonialSection";

export const projram = [
  {
    id: 1,
    slug: "برامج-قيادية-تصنع-الأثر",
    hero: {
      image: "/programspage/636d892b0b0ed426f66892339848b1d65cb935c1.jpg",
      title: "برامج قيادية تصنع الأثر",
      description:
        "رحلة عملية لتحويل مهاراتك القيادية إلى قرارات مؤثرة ونتائج ملموسة داخل مؤسستك",
    },
    TargetAudience: [
      {
        icon: "TrendingUp",
        title: "المدراء التنفيذيين",
      },
      {
        icon: "Users",
        title: "قادة الفرق",
      },
      {
        icon: "Rocket",
        title: "رواد الأعمال",
      },
      {
        icon: "Award",
        title: "حديثي الترقية",
      },
    ],
    WhatYouLearn: [
      {
        icon: "Target",
        title: "القيادة الاستراتيجية",
        content:
          "تعلم كيفية وضع رؤى استراتيجية فعالة وتحقيق أهداف طويلة المدى.",
      },
      {
        icon: "Users",
        title: "بناء فرق العمل عالية الأداء",
        content: "تطوير مهارات إدارة الفرق وتحفيزهم لتحقيق أفضل النتائج.",
      },
      {
        icon: "TrendingUp",
        title: "قيادة التغيير",
        content: "إدارة التغيير داخل المؤسسات بفعالية وتقليل مقاومة التغيير.",
      },
      {
        icon: "Lightbulb",
        title: "الابتكار والتفكير الإبداعي",
        content: "تعزيز القدرة على الابتكار وتقديم حلول غير تقليدية.",
      },
      {
        icon: "Brain",
        title: "مهارات التواصل القيادي",
        content: "تحسين مهارات التواصل والتأثير في بيئة العمل.",
      },
      {
        icon: "MessageSquare",
        title: "التفكير النقدي واتخاذ القرار",
        content: "اتخاذ قرارات مبنية على تحليل منطقي وبيانات دقيقة.",
      },
    ],
    JourneySection: [
      {
        icon: "FileText",
        title: "التسجيل",
        desc: "ابدأ رحلتك بملء نموذج التسجيل واختيار البرنامج الأنسب لأهدافك القيادية",
      },
      {
        icon: "ClipboardCheck",
        title: "تقييم المستوى",
        desc: "نجري تقييمًا شاملًا لتحديد مستواك الحالي واحتياجاتك التدريبية بدقة",
      },
      {
        icon: "Users",
        title: "حضور البرنامج",
        desc: "شارك في جلسات تدريبية تفاعلية يقودها خبراء متخصصون في القيادة",
      },
      {
        icon: "Star",
        title: "التطبيق العملي",
        desc: "طبق ما تعلمته من خلال مشاريع واقعية وحالات مستمدة من بيئة العمل",
      },
      {
        icon: "User",
        title: "الشهادة",
        desc: "احصل على شهادة معتمدة تثبت مهاراتك القيادية بعد إتمام البرنامج بنجاح",
      },
    ],
  },
  {
    id: 2,
    slug: "برامج-التحول-الرقمي",
    hero: {
      image: "/programspage/a6ad5c87019eb662c8817bc03d072540c70e7ac0.jpg",
      title: "البرامج الرقمية والتحول الرقمي",
      description:
        "مجموعة من البرامج الرقمية التي تمكّن المؤسسات من مواكبة التحول الرقمي وتبني التقنيات الحديثة",
    },

    TargetAudience: [
      {
        icon: "Rocket",
        title: "رواد الأعمال",
      },
      {
        icon: "BarChart",
        title: "محلل البيانات",
      },
      {
        icon: "Globe",
        title: "مسؤول التحول الرقمي",
      },
      {
        icon: "Laptop",
        title: "مختص في تقنية المعلومات",
      },
    ],

    WhatYouLearn: [
      {
        icon: "Shield",
        title: "الأمن السيبراني للموظفين",
        content:
          "تعلم أساسيات حماية البيانات والتعامل الآمن مع الأنظمة الرقمية داخل بيئة العمل.",
      },
      {
        icon: "Sparkles",
        title: "الذكاء الاصطناعي في العمل الحكومي",
        content:
          "فهم كيفية استخدام الذكاء الاصطناعي لتحسين الخدمات واتخاذ القرارات.",
      },
      {
        icon: "TrendingUp",
        title: "التحول الذكي",
        content:
          "تطبيق استراتيجيات التحول الرقمي لتحقيق كفاءة أعلى ونتائج مستدامة.",
      },
      {
        icon: "Workflow",
        title: "الأتمتة وتحسين العمليات (RPA)",
        content: "استخدام تقنيات الأتمتة لتقليل الجهد اليدوي وتحسين الإنتاجية.",
      },
      {
        icon: "Brain",
        title: "مهارات المستقبل",
        content: "اكتساب المهارات الرقمية الحديثة المطلوبة لمواكبة سوق العمل.",
      },
      {
        icon: "BarChart3",
        title: "تحليل البيانات الحكومية",
        content: "تحليل البيانات لاستخراج رؤى تدعم اتخاذ القرار داخل المؤسسات.",
      },
    ],

    JourneySection: [
      {
        icon: "FileText",
        title: "التسجيل",
        desc: "ابدأ رحلتك بملء نموذج التسجيل واختيار البرنامج المناسب",
      },
      {
        icon: "ClipboardCheck",
        title: "تقييم المستوى",
        desc: "تقييم شامل لتحديد مستواك الرقمي واحتياجاتك التدريبية",
      },
      {
        icon: "Users",
        title: "حضور البرنامج",
        desc: "جلسات تدريبية تفاعلية مع خبراء في التحول الرقمي",
      },
      {
        icon: "Star",
        title: "التطبيق العملي",
        desc: "تطبيق المفاهيم من خلال مشاريع واقعية داخل بيئة العمل",
      },
      {
        icon: "User",
        title: "الشهادة",
        desc: "الحصول على شهادة معتمدة بعد إتمام البرنامج بنجاح",
      },
    ],
  },
  {
    id: 3,
    slug: "برامج-دولية-بمعايير-عالمية",
    hero: {
      image: "/programspage/676f5fafd42565effaa583c17a324b916581a428.jpg",
      title: "برامج دولية بمعايير عالمية",
      description:
        "برامج دولية تمنحك خبرة حقيقية، وتفتح لك أبوابًا جديدة للنمو والتطور في بيئات عمل عالمية",
    },

    TargetAudience: [
      {
        icon: "Globe",
        title: "المهتمون بالتعلم العالمي",
      },
      {
        icon: "BarChart",
        title: "رواد الأعمال",
      },
      {
        icon: "Search",
        title: "الباحثون عن فرص دولية",
      },
      {
        icon: "User",
        title: "القادة والمدراء",
      },
    ],

    WhatYouLearn: [
      {
        icon: "CheckCircle",
        title: "أفضل الممارسات العالمية",
        content:
          "التعرف على أحدث الأساليب والتجارب العالمية في مختلف المجالات وتطبيقها عمليًا.",
      },
      {
        icon: "Leaf",
        title: "القيادة في بيئات دولية",
        content: "تطوير مهارات القيادة للعمل بفعالية في بيئات متعددة الثقافات.",
      },
      {
        icon: "Network",
        title: "بناء الشبكات المهنية العالمية",
        content: "توسيع علاقاتك المهنية والتواصل مع خبراء ومؤسسات دولية.",
      },
      {
        icon: "MapPin",
        title: "الزيارات الميدانية الدولية",
        content:
          "المشاركة في زيارات ميدانية لاكتساب خبرات مباشرة من بيئات عمل عالمية.",
      },
      {
        icon: "RefreshCw",
        title: "مهارات التكيف والتطور",
        content: "تعزيز القدرة على التكيف مع التغيرات والعمل في بيئات مختلفة.",
      },
      {
        icon: "Compass",
        title: "التفكير العالمي والاستراتيجي",
        content:
          "تنمية مهارات التفكير الاستراتيجي بمنظور عالمي لتحقيق النجاح المستدام.",
      },
    ],

    JourneySection: [
      {
        icon: "FileText",
        title: "التسجيل",
        desc: "ابدأ رحلتك بالتسجيل في البرنامج الدولي المناسب لأهدافك",
      },
      {
        icon: "ClipboardCheck",
        title: "تقييم المستوى",
        desc: "تقييم شامل لتحديد مستواك واستعدادك للتجربة الدولية",
      },
      {
        icon: "Users",
        title: "حضور البرنامج",
        desc: "المشاركة في جلسات وورش عمل مع خبراء دوليين",
      },
      {
        icon: "Star",
        title: "التجربة العملية",
        desc: "خوض تجارب واقعية وزيارات ميدانية في بيئات دولية",
      },
      {
        icon: "User",
        title: "الشهادة",
        desc: "الحصول على شهادة دولية معتمدة بعد إتمام البرنامج",
      },
    ],
  },
  {
    id: 4,
    slug: "مسارات-التطوير-المؤسسي-المتكاملة",
    hero: {
      image: "/programspage/0aaadb7c223ac0926642ab837daf982c729252c5.jpg",
      title: "مسارات التطوير المؤسسي المتكاملة",
      description:
        "برامج متخصصة لتمنحك الأدوات والمهارات اللازمة لتحقيق تأثير حقيقي داخل مؤسستك",
    },

    TargetAudience: [
      {
        icon: "Rocket",
        title: "رواد الأعمال",
      },
      {
        icon: "Building2",
        title: "الجهات والمؤسسات",
      },
      {
        icon: "Briefcase",
        title: "المختصون والمهنيون",
      },
      {
        icon: "User",
        title: "القيادات التنفيذية",
      },
    ],

    WhatYouLearn: [
      {
        icon: "BarChart3",
        title: "التفكير العالمي والاستراتيجي",
        content:
          "تنمية القدرة على وضع استراتيجيات فعالة تتماشى مع التوجهات العالمية.",
      },
      {
        icon: "Award",
        title: "مسار التميز المؤسسي",
        content: "تعلم معايير التميز المؤسسي وتطبيقها لتحقيق أداء عالي الجودة.",
      },
      {
        icon: "Users",
        title: "مسار تطوير رأس المال البشري",
        content: "تطوير الكفاءات البشرية وبناء فرق عمل قوية وفعالة.",
      },
      {
        icon: "Lightbulb",
        title: "مسار الابتكار والتفكير الإبداعي",
        content: "تعزيز ثقافة الابتكار داخل المؤسسات وتقديم حلول مبتكرة.",
      },
      {
        icon: "Target",
        title: "مسار القيادة المتقدمة 2031",
        content: "إعداد قادة المستقبل وفق رؤية استراتيجية طويلة المدى.",
      },
      {
        icon: "Cpu",
        title: "مسار التحول الرقمي والذكاء الاصطناعي",
        content:
          "تمكين المؤسسات من تبني التقنيات الحديثة لتحقيق التحول الرقمي.",
      },
    ],

    JourneySection: [
      {
        icon: "FileText",
        title: "التسجيل",
        desc: "ابدأ رحلتك باختيار المسار المناسب وتسجيل بياناتك",
      },
      {
        icon: "ClipboardCheck",
        title: "تقييم المستوى",
        desc: "تحليل احتياجات مؤسستك وتحديد المسار الأنسب للتطوير",
      },
      {
        icon: "Users",
        title: "تنفيذ البرنامج",
        desc: "تنفيذ تدريبات وورش عمل متخصصة داخل بيئة العمل",
      },
      {
        icon: "Star",
        title: "التطبيق العملي",
        desc: "تطبيق الاستراتيجيات المكتسبة لتحقيق نتائج ملموسة",
      },
      {
        icon: "User",
        title: "الشهادة",
        desc: "الحصول على شهادة معتمدة بعد إتمام المسار بنجاح",
      },
    ],
  },
];
export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  console.log(decodedSlug);
  const currentProjram = projram.find(
    (projram) => projram.slug === decodedSlug,
  );
  if (!currentProjram) return <div>لا يوجد برامج</div>;

  return (
    <main>
      <ProgramHeroSection
        title={currentProjram.hero.title}
        description={currentProjram.hero.description}
        image={currentProjram.hero.image}
      />
      <TargetAudienceSection items={currentProjram.TargetAudience} />
      <WhatYouLearnSection items={currentProjram.WhatYouLearn} />
      <JourneySection steps={currentProjram.JourneySection} />
      <TestimonialSection />
    </main>
  );
}
