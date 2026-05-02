import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSnapchatGhost,
} from "react-icons/fa";
import Link from "../Link/link";
import { Pages, Routes } from "../constants/enum";

export default function Footer() {
  // روابط سريعة للفوتر
  const quickLinks = [
    { name: "الرئيسية", href: Routes.HOME },
    { name: "من نحن", href: `/${Pages.WHO_ARE_YOU}` },
    { name: "خدماتنا", href: `/${Pages.SERVICS}` },
    { name: "تواصل معنا", href: `/${Pages.CONTACT_US}` },
  ];

  // خدماتنا للفوتر
  const services = [
    { name: "الخدمات التدريبية", href: `#` },
    { name: "الخدمات الاستشارية", href: `#` },
    { name: "التحول الرقمي", href: `#` },
    { name: "الحوكمة", href: `#` },
    { name: "تطوير الموارد البشرية", href: `#` },
  ];

  return (
    <footer className="relative mt-10">
      {/* Background */}
      <div className="relative text-white overflow-hidden px-4 md:px-10 py-20">
        {/* Logo watermark */}
        <Image
          src="/logofooter.png"
          alt="bg-logo"
          width={800}
          height={500}
          className="absolute inset-0 m-auto opacity-10 z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80 z-10" />

        {/* Content */}
        <div className="relative z-20">
          {/* CTA Card */}
          <div className="bg-white text-black rounded-3xl p-6 md:p-10 text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              جاهز لتطوير أداء مؤسستك؟
            </h2>

            <p className="text-primary text-lg mb-6">
              ابدأ رحلتك نحو التميز المؤسسي من خلال حلول تدريبية واستشارية
              متكاملة.
            </p>

            <Button className="bg-primary z-20 text-white px-8 py-5 rounded-xl hover:bg-primary/90 relative">
              <Link href={`/${Pages.CONTACT_US}`}>ابدأ الآن</Link>
            </Button>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-right">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                2031 للتطوير المهني والمؤسسي
              </h3>

              <p className="text-white/80 leading-loose">
                نقدم حلولًا متكاملة في التدريب والاستشارات لدعم التطوير المؤسسي
                والتحول الرقمي.
              </p>

              <div className="flex justify-center md:justify-start gap-3 mt-4">
                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 rounded bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <FaLinkedinIn size={25} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 rounded bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <FaSnapchatGhost size={25} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 rounded bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <FaInstagram size={25} />
                </a>

                <a
                  href="#"
                  target="_blank"
                  className="w-10 h-10 rounded bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <FaFacebookF size={25} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold">خدماتنا</h3>

              <ul className="space-y-2 text-white/80">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link
                      href={service.href}
                      className="hover:text-white transition-colors duration-200 inline-block"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold">روابط سريعة</h3>

              <ul className="space-y-2 text-white/80">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold">تواصل معنا</h3>

              <div className="space-y-3 text-white/80">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin size={18} />
                  الإمارات العربية المتحدة
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone size={18} />
                  <a
                    href="tel:+971551022217"
                    className="hover:text-white transition-colors duration-200"
                    dir="ltr"
                  >
                    +971 55 102 2217
                  </a>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail size={18} />
                  <a
                    href="mailto:Info@ood.ae"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Info@ood.ae
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-white/60 text-sm pt-10 mt-10 border-t border-white/20">
            © {new Date().getFullYear()} 2031 للتطوير المهني والمؤسسي. جميع
            الحقوق محفوظة
          </div>
        </div>
      </div>
    </footer>
  );
}
