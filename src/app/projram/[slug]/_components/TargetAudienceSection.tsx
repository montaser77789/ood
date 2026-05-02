"use client";

import { TrendingUp, Users, Rocket, Award } from "lucide-react";
import {
  BarChart,
  Globe,
  Laptop,
  Search,
  User,
  Building2,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

const icons = {
  TrendingUp,
  Users,
  Rocket,
  Award,
  BarChart,
  Globe,
  Laptop,
  Search,
  User,
  Building2,
  Briefcase,
};

type IconName = keyof typeof icons;

export default function TargetAudienceSection({
  items,
}: {
  items: { icon: any; title: string }[];
}) {
  const [active, setActive] = useState<number[]>([0, 2]);
  return (
    <section className="mt-20 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">لمن هذا البرنامج ؟</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => {
          const Icon = icons[item.icon as IconName];
          const isActive = active.includes(i);
          return (
            <div
              key={i}
              onClick={() => {
                setActive(
                  (prev) =>
                    prev.includes(i)
                      ? prev.filter((item) => item !== i) // يشيل لو موجود
                      : [...prev, i], // يضيف لو مش موجود
                );
              }}
              className={`cursor-pointer rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4 transition-all duration-300
              ${
                isActive
                  ? "bg-[#004D54] text-white shadow-md"
                  : "bg-white border border-gray-300 text-primary hover:bg-primary/5"
              }`}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-xl">
                <Icon
                  size={28}
                  className={isActive ? "text-white" : "text-primary"}
                />
              </div>

              <h3 className="text-base md:text-lg font-semibold">
                {item.title}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
