import Image from "next/image";

export default function LogoSection() {
  const logos = [
    "/logos/0e43ed61547f923b8d6c3a378be1e6cd6a2f4773.png",
    "/logos/49c0aec414fcdebc7a86013214e1295b737f0bbc.png",
    "/logos/783602353cf3647ba64abb241e660d2b2b6ebc07.png",
    "/logos/a6ae9c27781fe25be477eed43867425aca750922.png",
    "/logos/ee976f9203cb9d8a49e525a9212571938a1163fb.png",
  ];

  return (
    <section className=" mt-10">
      <div className=" rounded-2xl py-6 px-4 md:px-10">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-10">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center opacity-70  hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo}
                alt="client logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
