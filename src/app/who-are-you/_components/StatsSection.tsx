export default function StatsSection() {
  const stats = [
    { value: "15+", label: "منهجية عمل" },
    { value: "95%", label: "رضا العملاء" },
    { value: "999+", label: "متدرب" },
    { value: "50+", label: "مشروعًا ناجحًا" },
  ];

  return (
    <section className="mt-20 ">

      <div className="bg-gradient-to-r from-[#004D54] to-[#4A5565] text-white py-12 md:py-16 px-6 md:px-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {stats.map((item, i) => (
            <div key={i} className="space-y-3">

              {/* Number */}
              <h3 className="text-4xl md:text-6xl font-bold tracking-wide">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-white/90 text-sm md:text-lg">
                {item.label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}