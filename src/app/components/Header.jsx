import React from "react";

function Header() {
  return (
    <nav className="absolute w-full z-10">
      <div className="container" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <div className=" mt-[12px] px-[24px] py-[21px] flex justify-between items-center border rounded-[48px] text-[#EDF1FA] bg-gradient-to-r from-black-950 via-indigo-800 to-blue-950">
          <a href="/">Vitaly.S</a>
          <ul className="flex gap-7">
            <li>
              <a href="#about" className="hover:text-fuchsia-400 transition">About Me</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-fuchsia-400 transition">My Skills</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-fuchsia-400 transition">Projects</a>
            </li>
            <li>
              <a href="#footer" className="hover:text-fuchsia-400 transition">Contacts</a>
            </li>
          </ul>
          <a
            href="mailto:vit.sydorenko@gmail.com"
            target="_blank"
            className="px-[46px] py-[16px] bg-purple-500 rounded-[32px] transition hover:bg-purple-400"
          >
            Contact me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
