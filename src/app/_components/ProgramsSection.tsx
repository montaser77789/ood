import Image from "next/image";

export default function ProgramsSection() {
  const programs = [
    {
      id: 1,
      title: "برامج القيادة",
      desc: "تطوير مهارات القادة في التخطيط الاستراتيجي، وإدارة التغيير، وبناء فرق العمل.",
      img: "/programs/5c50e7daec5b6b6fe00891faa3511dd89dc9ca1a.jpg",
    },
    {
      id: 2,
      title: "برامج التحول الرقمي",
      desc: "تمكين المؤسسات من تبني التقنيات الحديثة والذكاء الاصطناعي لتحسين الأداء.",
      img: "/programs/74226a384be4b2ab882026dd66df85d185742a1d.jpg",
    },
    {
      id: 3,
      title: "البرامج الدولية",
      desc: "تجارب تعليمية وتدريبية عالمية تشمل زيارات ميدانية وبرامج قيادية خارجية.",
      img: "/programs/bcfd684fbc5b5fd0a416c5471764a5cf8d0ad557.jpg",
    },
    {
      id: 4,
      title: "البرامج التطويرية",
      desc: "نقدم مسارات متكاملة تهدف إلى تمكين الأفراد والمؤسسات وبناء قدرات مستقبلية.",
      img: "/programs/37aa5a60fa24b4ee70ed4b20ce520e40da3eb2e7.jpg",
    },
  ];

  return (
    <section className="sectioncontainer mt-20">
      {/* Title (نفس السكشن اللي قبله) */}
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-2xl md:text-3xl font-medium">
          برامج تطويرية لمستقبل أفضل
        </h2>

        <p className="text-[#2C7A83] text-lg md:text-xl">
          نساعدك على تطوير المهارات وبناء القدرات لمواكبة تحديات المستقبل
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {" "}
        {programs.map((item, index) => (
          <div key={item.id} className="text-center space-y-4 relative w-full">
            {/* Number + line */}
            <div className="flex items-center justify-start gap-4">
              {/* الرقم */}
              <div className="bg-primary text-white w-14 h-14 flex items-center justify-center rounded-xl text-xl font-bold text-right">
                {item.id}
              </div>
              {/* {index !== programs.length - 1 && (
                <div className="hidden lg:block flex-1 border-t-2 border-dashed border-primary" />
              )} */}
              <div className=" flex-1 border-t-2 border-dashed border-primary" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-right">{item.title}</h3>

            {/* Desc */}
            <p className="text-black text-sm md:text-base font-normal leading-loose text-right">
              {item.desc}
            </p>

            {/* Image */}
            <div className="mt-4">
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-xl w-full h-[200px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
