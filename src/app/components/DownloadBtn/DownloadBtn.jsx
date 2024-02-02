import Image from "next/image";
import React from "react";

function DownloadBtn() {
  return (
<div className="w-[130px] h-[130px] rounded-[50%] flex items-center justify-center customShadow transition">
<div className="w-[115px] h-[115px] rounded-[50%] flex items-center justify-center customShadow transition">
      <a
        type="button"
        href="FullStack_Developer_Vitaliii_Sydorenko.pdf"
        download="FullStack_Developer_Vitaliii_Sydorenko.pdf"
        className="w-[100px] h-[100px] p-[12px] text-white rounded-[50%] text-center bg-[#D230C4] customShadow transition"
      >
        <Image
          src="/downloadIcon.svg"
          width={24}
          height={24}
          alt="download"
          className="mt-[15px] mx-auto"
        />
        CV
      </a>
    </div>
</div>
  );
}

export default DownloadBtn;
