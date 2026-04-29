import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSnapchatGhost,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="relative mt-10">
      {/* Background */}
      <div className="relative  text-white overflow-hidden px-4 md:px-10 py-20">
        {/* Logo watermark */}
        <Image
          src="/logofooter.png"
          alt="bg-logo"
          width={800}
          height={500}
          className="absolute inset-0 m-auto opacity-10 z-100"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80" />

        {/* Content */}
        <div className="relative z-10">
          {/* CTA Card */}
          <div className="bg-white text-black rounded-3xl p-6 md:p-10 text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              جاهز لتطوير أداء مؤسستك؟
            </h2>

            <p className="text-primary text-lg mb-6">
              ابدأ رحلتك نحو التميز المؤسسي من خلال حلول تدريبية واستشارية
              متكاملة.
            </p>

            <Button className="bg-primary text-white px-8 py-5 rounded-xl hover:bg-primary/90">
              ابدأ الآن
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
                <li>الخدمات التدريبية</li>
                <li>الخدمات الاستشارية</li>
                <li>التحول الرقمي</li>
                <li>الحوكمة</li>
                <li>تطوير الموارد البشرية</li>
              </ul>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold">روابط سريعة</h3>

              <ul className="space-y-2 text-white/80">
                <li>الرئيسية</li>
                <li>من نحن</li>
                <li>خدماتنا</li>
                <li>مجالات العمل</li>
                <li>تواصل معنا</li>
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
                  <span dir="ltr">+971 55 102 2217</span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail size={18} />
                  Info@ood.ae
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
