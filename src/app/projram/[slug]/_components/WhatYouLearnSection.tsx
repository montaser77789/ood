"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Brain,
  MessageSquare,
  Shield,
  Sparkles,
  Workflow,
  BarChart3,
  CheckCircle,
  Leaf,
  Network,
  MapPin,
  RefreshCw,
  Compass,
  Award,
  Cpu
} from "lucide-react";
const icons = {
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Brain,
  MessageSquare,
  Shield,
  Sparkles,
  Workflow,
  BarChart3,
  CheckCircle,
  Leaf,
  Network,
  MapPin,
  RefreshCw,
  Compass,
  Award,
  Cpu
  
};
type IconName = keyof typeof icons;

export default function WhatYouLearnSection({
  items,
}: {
  items: { icon: any; title: string; content: string }[];
}) {
  return (
    <section className="mt-20 px-4 md:px-10">
      <div className=" rounded-[30px] p-6 md:p-10 text-primary">
        {/* Title */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            ماذا ستتعلم في هذا البرنامج
          </h2>

          <p className="text-[#004D54] text-lg md:text-xl">
            مهارات قيادية عملية ومباشرة يمكنك تطبيقها فورًا داخل بيئة العمل
            لتحقيق نتائج حقيقية
          </p>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {items.map((item, i) => {
            const Icon = icons[item.icon as IconName];

            return (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-none"
              >
                <div className="bg-[#0A5C63] rounded-2xl overflow-hidden">
                  {/* Trigger */}
                  <AccordionTrigger className="px-6 py-5 flex items-center justify-between text-white hover:no-underline">
                    {/* Right Side */}
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white text-primary">
                        <Icon size={20} />
                      </div>

                      <span className="text-sm md:text-base font-medium ">
                        {item.title}
                      </span>
                    </div>
                  </AccordionTrigger>

                  {/* Content */}
                  <AccordionContent className="px-6 pb-5 text-white/80 text-sm leading-loose text-right">
                    {item.content}
                  </AccordionContent>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
