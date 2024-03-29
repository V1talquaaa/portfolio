import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer id="footer" className="bg-footerBg bg-cover py-[60px] lg:py-[120px]"> 
      <div className="container text-white lg:flex justify-between items-center">
        <div className="mb-5 text-center lg:text-left lg:mb-0 ">
          <h2 className="mb-5 text-2xl lg:text-6xl">Follow me</h2>
          <Image src="/footerRounds.svg" width={150} height={10} alt="" className="mx-auto lg:ml-0"/>
        </div>
        <ul className="flex gap-10 justify-center mb-5 lg:mb-0">
            <li><a href="#about" className="hover:text-fuchsia-400 transition">About Me</a></li>
            <li><a href="#skills" className="hover:text-fuchsia-400 transition">My Stack</a></li>
            <li><a href="#projects" className="hover:text-fuchsia-400 transition">Projects</a></li>
        </ul>
        <ul className="grid justify-items-center grid-cols-3 gap-5">
            <li><a href="mailto:vit.sydorenko@gmail.com" target="_blank"  className=""><Image src="/Google.svg" width={36} height={36} alt="social" /></a></li>
            <li><a href="https://t.me/v1talquaaa" target="_blank" className=""><Image src="/Telegram.svg" width={36} height={36} alt="social" /></a></li>
            <li><a href="https://www.whatsapp.com/" className=""><Image src="/WhatsApp.svg" width={36} height={36} alt="social" /></a></li>
            <li><a href="https://www.facebook.com/vitaliy.sydorenko.9" target="_blank" className=""><Image src="/Facebook.svg" width={36} height={36} alt="social" /></a></li>
            <li><a href="https://www.linkedin.com/in/vitalii-sydorenko-11b20aa8/" target="_blank" className=""><Image src="/linkedin.svg" width={36} height={36} alt="linkedin" /></a></li>
            <li><a href="https://github.com/V1talquaaa" target="_blank" className=""><Image src="/Github.svg" width={36} height={36} alt="social" /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
