import Image from "next/image";
import React from "react";

function TeamProjects() {
  return (
    <section id="projects" className="bg-projectBg bg-cover py-[120px]">
      <div className="container">
        <h2 className="mb-[80px] text-6xl text-white text-right">Team Projects</h2>
        
        <div className="flex items-center mb-10">
        <a href="https://nevada-frontend.vercel.app/" target="_blank" rel="noopener noreferrer nofollow">
          <div className="mr-10 p-2 rounded-xl customShadow">
            <div className="mr-10 p-2 rounded-xl customShadow">
                <Image
                  src="/nevada.png"
                  width={400}
                  height={300}
                  alt="nevada"
                  className="customShadow"
                />
            </div>
          </div>
          </a>
          <div>
            <h3 className="text-white text-xl">PPC Wherehouse</h3>
            <p className="text-white my-2">Role: Developer</p>
            <span className="text-gray-600">In progres...</span>
          </div>
          <div className="ml-auto">
          <Image src="/verticalDodes.svg" width={68} height={266} alt="svg" className=""/>
          </div>
        </div>
        <div className="flex items-center justify-end mb-10">
        <div className="mr-auto">
          <Image src="/horizontalDodes.svg" width={266} height={723} alt="svg" className=""/>
          </div>
          <div className="">
            <h3 className="text-white text-xl">Task Pro</h3>
            <p className="text-white my-2">Role: Developer</p>
            <span className="text-gray-600">Oct 2023</span>
          </div>
          <a href="https://korvan17.github.io/task-pro/" target="_blank">
          <div className="ml-10 p-2 rounded-xl customShadow">
            <div className="ml-10 p-2 rounded-xl customShadow">

                <Image
                  src="/taskpro.png"
                  width={400}
                  height={300}
                  alt="film"
                />
            </div>
          </div>
          </a>
        </div>
        <div className="flex items-center mb-10">
        <a href="https://slavikua1996.github.io/team-project13/" target="_blank">
          <div className="mr-10 p-2 rounded-xl customShadow">
            <div className="mr-10 p-2 rounded-xl customShadow">
                <Image
                  src="/icecream.png"
                  width={400}
                  height={300}
                  alt="film"
                  className="customShadow"
                />
            </div>
          </div>
          </a>
          <div>
            <h3 className="text-white text-xl">Ice Cream</h3>
            <p className="text-white my-2">Role: Scrum, Developer</p>
            <span className="text-gray-600">Jan 2023</span>
          </div>
          <div className="ml-auto">
          <Image src="/verticalDodes.svg" width={68} height={266} alt="svg" className=""/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamProjects;

