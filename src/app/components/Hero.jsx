import Image from "next/image";
import React from "react";
import DownloadBtn from "./DownloadBtn/DownloadBtn";

function Hero() {
  return (
    <section id="hero" className="bg-heroBg bg-cover py-[120px] lg:pt-[335px]">
      <div className="container lg:grid lg:grid-cols-2" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
      <div className="mx-auto mb-5 lg:hidden rounded-[50%] w-[220px] h-[220px] bg-gradient-to-r from-blue-500 via-purple-9 to-pink-500">
            <Image
              src="/avatarPhoto.png"
              width={145}
              height={150}
              alt="avatar"
              className="mx-auto opacity-90"
            />
          </div>
        <div className="text-center lg:text-left">
          <h2 className="text-gray-600 text-lg lg:text-[32px]">FULL-STACK DEVELOPER</h2>
          <h1 className="text-[#EDF1FA] text-[42px] lg:text-[96px] ">Vitaly Sydorenko</h1>
          <p className="text-[#EDF1FA] text-[20px] mt-[40px]">
            Based in Cracow, Poland.
          </p>
        </div>
        <div className="hidden lg:block border rounded-[50%] w-[765px] border-violet-900 h-[765px] flex items-center justify-center">
          <div className="border rounded-[50%] w-[725px] h-[725px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
            <Image
              src="/avatarPhoto.png"
              width={653}
              height={851}
              alt="avatar"
              className="absolute top-[-106px] left-12"
            />
          </div>
        </div>
        <div className="mt-5 flex justify-center lg:mt-0 lg:absolute top-[60%] left-[50%]">
        <DownloadBtn />
        </div>
      </div>
    </section>
  );
}

export default Hero;
