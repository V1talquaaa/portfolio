import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <section id="projects" className="bg-projectBg bg-cover py-[60px] lg:py-[120px]">
      <div className="container"  data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
        <h2 className="mb-5 lg:mb-[80px] text-2xl lg:text-6xl text-white text-center lg:text-right">Individual Projects</h2>
        
        <div className="flex items-center mb-10 lg:mb-[150px]">
        <a href="https://the-royal-curry.vercel.app/" target="_blank" rel="noopener noreferrer nofollow">
          <div className="mr-10 p-2 rounded-xl customShadow">
            <div className="mr-10 p-2 rounded-xl customShadow">
                <Image
                  src="/royalcurry.png"
                  width={400}
                  height={300}
                  alt="film"
                  className="customShadow"
                />
            </div>
          </div>
          </a>
          <div>
            <h3 className="text-white lg:text-xl">Royal Curry</h3>
            <span className="text-gray-600">In progres...</span>
            <p className="mt-2 text-gray-400 text-sm max-w-[400px]">
            Pet project for indian restaurant with possibility to order food online.
            </p>
            <p className="mt-2 text-fuchsia-400 text-md ">&#91; React, JavaScript &#93;</p>
          </div>
          <div className="ml-auto">
          <Image src="/verticalDodes.svg" width={68} height={266} alt="svg" className=""/>
          </div>
        </div>
        <div className="flex items-center justify-end mb-10 lg:mb-[150px]">
        <div className="mr-auto">
          <Image src="/horizontalDodes.svg" width={266} height={723} alt="svg" className=""/>
          </div>
          <div className="">
            <h3 className="text-white text-xl">Startupz</h3>
            <span className="text-gray-600">Dec 2023</span>
            <p className="mt-2 text-gray-400 text-sm max-w-[400px]">
            Project was developed as a part of recruitment process to the company startupz.
            </p>
            <p className="mt-2 text-fuchsia-400 text-md ">&#91; React, SASS, JavaScript &#93;</p>
          </div>
          <a href="https://startupz-orcin.vercel.app/" target="_blank">
          <div className="ml-10 p-2 rounded-xl customShadow">
            <div className="ml-10 p-2 rounded-xl customShadow">

                <Image
                  src="/startupz.png"
                  width={400}
                  height={300}
                  alt="film"
                />
            </div>
          </div>
          </a>
        </div>
        <div className="flex items-center mb-10 lg:mb-[150px]">
        <a href="https://v1talquaaa.github.io/adRespect_JS/" target="_blank">
          <div className="mr-10 p-2 rounded-xl customShadow">
            <div className="mr-10 p-2 rounded-xl customShadow">
                <Image
                  src="/giarddesign.png"
                  width={400}
                  height={300}
                  alt="film"
                  className="customShadow"
                />
            </div>
          </div>
          </a>
          <div>
            <h3 className="text-white text-xl">Giard Design</h3>
            <span className="text-gray-600">Jul 2023</span>
            <p className="mt-2 text-gray-400 text-sm max-w-[400px]">
            Project was developed as a part of recruitment process.
            </p>
            <p className="mt-2 text-fuchsia-400 text-md ">&#91; React, SASS, JavaScript &#93;</p>
          </div>
          <div className="ml-auto">
          <Image src="/verticalDodes.svg" width={68} height={266} alt="svg" className=""/>
          </div>
        </div>

        <div className="flex items-center justify-end mb-10 lg:mb-[150px]">
        <div className="mr-auto">
          <Image src="/horizontalDodes.svg" width={266} height={723} alt="svg" className=""/>
          </div>
          <div className="">
            <h3 className="text-white text-xl">Film Searcher</h3>
            <span className="text-gray-600">Jun 2023</span>
            <p className="mt-2 text-gray-400 text-sm max-w-[400px]">
            Pet project was a part of course where I used my knowlage how to work with API and fetch data from API.
            </p>
            <p className="mt-2 text-fuchsia-400 text-md ">&#91; React, JavaScript, API &#93;</p>
          </div>
          <a href="https://v1talquaaa.github.io/goit-react-hw-05-movies/" target="_blank">
          <div className="ml-10 p-2 rounded-xl customShadow">
            <div className="ml-10 p-2 rounded-xl customShadow">

                <Image
                  src="/film.png"
                  width={400}
                  height={300}
                  alt="film"
                />
            </div>
          </div>
          </a>
          
        </div>
        
        <div className="flex items-center mb-10 lg:mb-[150px]">
        <a href="https://v1talquaaa.github.io/Barbershop/" target="_blank">
          <div className="mr-10 p-2 rounded-xl customShadow">
            <div className="mr-10 p-2 rounded-xl customShadow">
                <Image
                  src="/barbershop.png"
                  width={400}
                  height={300}
                  alt="film"
                  className="customShadow"
                />
            </div>
          </div>
          </a>
          <div>
            <h3 className="text-white text-xl">Barbershop</h3>
            <span className="text-gray-600">Feb 2023</span>
            <p className="mt-2 text-gray-400 text-sm max-w-[400px]">
            Pet project to train and improve marup and style skills.
            </p>
            <p className="mt-2 text-fuchsia-400 text-md ">&#91; HTML, CSS, JavaScript &#93;</p>
          </div>
          <div className="ml-auto">
          <Image src="/verticalDodes.svg" width={68} height={266} alt="svg" className=""/>
          </div>
        </div>
                
        <div className="flex items-center justify-end">
        <div className="mr-auto">
          <Image src="/horizontalDodes.svg" width={266} height={723} alt="svg" className=""/>
          </div>
          <div className="">
            <h3 className="text-white text-xl">Webstudio</h3>
            <span className="text-gray-600">Dec 2022</span>
            <p className="mt-2 text-gray-400 text-sm max-w-[400px]">
            Pet project as a part of HTML and CSS course.
            </p>
            <p className="mt-2 text-fuchsia-400 text-md ">&#91; HTML, CSS, JavaScript &#93;</p>
          </div>
          <a href="https://v1talquaaa.github.io/WebStudio/" target="_blank">
          <div className="ml-10 p-2 rounded-xl customShadow">
            <div className="ml-10 p-2 rounded-xl customShadow">

                <Image
                  src="/webstudio.png"
                  width={400}
                  height={300}
                  alt="film"
                />
            </div>
          </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

