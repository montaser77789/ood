"use client";

import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ar from "react-phone-number-input/locale/ar";

export default function ContactForm() {
  const [phone, setPhone] = useState<string | undefined>("+971");

  return (
    <main className="mt-20 px-4 md:px-10 max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-right space-y-3 mb-10">
        <h1 className="text-2xl md:text-4xl font-bold">ابدأنا رحلتك دلوقتي</h1>

        <p className="text-primary text-base md:text-lg">
          املأ النموذج، وفريقنا هيتواصل معك خلال 6 ساعات لمساعدتك بأفضل حل ممكن.
        </p>

        <div className="h-[1px] bg-gray-300 mt-6"></div>
      </div>

      {/* Form */}
      <form className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company */}
          <div className=" text-right">
            <label className="font-medium ">اسم الشركة</label>
            <input
              type="text"
              placeholder="ادخل اسم الشركة"
              className="border mt-2 border-gray-300 rounded-xl p-4 w-full text-right focus:outline-none focus:border-primary"
            />
          </div>

          {/* Time */}
          <div className=" text-right">
            <label className="font-medium">الوقت الأنسب للتواصل</label>
            <select className="border mt-2 border-gray-300 rounded-xl p-4 w-full text-right focus:outline-none focus:border-primary">
              <option>اختر الوقت الأنسب للتواصل</option>
              <option>صباحًا</option>
              <option>مساءً</option>
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div className=" text-right">
            <label className="font-medium">البريد الإلكتروني</label>
            <input
              type="email"
              placeholder="ادخل البريد الإلكتروني"
              className="mt-2 border border-gray-300 rounded-xl p-4 w-full text-right focus:outline-none focus:border-primary"
            />
          </div>

          {/* Phone */}
          <div className=" text-right">
            <label className="font-medium">رقم الهاتف</label>

            <div
              dir="ltr"
              className="mt-2 border border-gray-300 rounded-xl p-3 bg-white focus-within:border-primary transition"
            >
              <PhoneInput
                international
                defaultCountry="AE"
                labels={ar}
                value={phone}
                onChange={setPhone}
                className="text-left focus:outline-none w-full focus:ring-0 focus:border-0"
              />
            </div>
          </div>
        </div>

        {/* Textarea */}
        <div className=" text-right">
          <label className="font-medium">الوصف التفصيلي</label>
          <textarea
            rows={6}
            placeholder="اشرح بإختصار كل ما تحتاجه..."
            className="mt-2 border border-gray-300 rounded-xl p-4 w-full text-right focus:outline-none focus:border-primary"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#004D54] text-white py-3 rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300"
        >
          أرسل الطلب
        </button>
      </form>
    </main>
  );
}
