import Image from "next/image";
import React from "react";
import DownloadBtn from "./DownloadBtn/DownloadBtn";

function Hero() {
  return (
    <section id="hero" className="bg-heroBg bg-cover pt-[335px]">
      <div className="container grid grid-cols-2" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
        <div className="">
          <h2 className="text-gray-600 text-[32px]">FULL-STACK DEVELOPER</h2>
          <h1 className="text-[96px] text-[#EDF1FA]">Vitaly Sydorenko</h1>
          <p className="text-[#EDF1FA] text-[20px] mt-[40px]">
            Based in Cracow, Poland.
          </p>
        </div>
        <div className="border rounded-[50%] w-[765px] border-violet-900 h-[765px] flex items-center justify-center">
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
        <div className="absolute top-[60%] left-[50%]">
        <DownloadBtn />
        </div>
      </div>
    </section>
  );
}

export default Hero;
