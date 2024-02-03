import Image from "next/image";
import React from "react";

function About() {
  return (
    <section id="about" className="bg-aboutBg bg-cover py-[60px] lg:py-[120px]">
      <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <div className="lg:grid lg:grid-cols-2 text-white items-center">
          <div className="hidden lg:block w-[540px] h-[540px] rounded-[50%] border bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            <Image
              src="/aboutImage.png"
              width={480}
              height={480}
              alt="developer"
              className=""
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="mb-2 lg:mb-10 text-2xl lg:text-6xl">About Me</h2>
            <div className="mb-2 lg:hidden flex justify-center">
            <Image
              src="/aboutImage.png"
              width={150}
              height={150}
              alt="developer"
              className=""
            />
            </div>
            <p className="text-md lg:text-xl mb-10">
              As a recently trained junior front-end developer, I have completed
              comprehensive IT courses at GoIT school covering HTML, CSS, JavaScript,
              React, and Node. While I lack professional experience in the
              field, I am enthusiastic about applying my newly acquired skills
              to contribute to a dynamic team and grow as a front-end developer. You can download my course completion certificate.
            </p>
            <a
              href="/certificate.pdf"
              download="certificate.pdf"
              className="px-[46px] py-[16px] bg-purple-500 rounded-[32px] transition hover:bg-purple-400"
            >
            Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
