import Image from "next/image";
import React from "react";

function TeamProjects() {
  return (
    <section
      id="projects"
      className="bg-projectBg bg-cover py-[60px] lg:py-[120px]"
    >
      <div className="container">
        <h2 className="mb-[80px] text-2xl lg:text-6xl text-white text-center lg:text-right">
          Team Projects
        </h2>

        <div className="flex items-center mb-10 lg:mb-[150px]">
          <a
            href="https://ppcwarehouses.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
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
            <span className="text-gray-600">Feb 2024</span>
            <p className="mt-2 text-gray-400 text-sm max-w-[400px]">
              Commercial Project: Website Developed for a Logistics Company
              Providing Services in the USA and Canada The website was developed
              for a company specializing in logistics services across the USA
              and Canada. With several strategically located warehouses
              throughout both countries, the company primarily caters to Amazon
              as its main customer.
            </p>
            <p className="mt-2 text-fuchsia-400 text-md ">
              &#91; React, Node, Strapi, MUI, JavaScript &#93;
            </p>
          </div>
          <div className="ml-auto">
            <Image
              src="/verticalDodes.svg"
              width={68}
              height={266}
              alt="svg"
              className=""
            />
          </div>
        </div>
        <div className="flex items-center justify-end mb-10 lg:mb-[150px]">
          <div className="mr-auto">
            <Image
              src="/horizontalDodes.svg"
              width={266}
              height={723}
              alt="svg"
              className=""
            />
          </div>
          <div>
            <h3 className="text-white text-xl">Task Pro</h3>
            <p className="text-white my-2">Role: Developer</p>
            <span className="text-gray-600">Oct 2023</span>
            <p className="mt-2 text-gray-400 text-sm max-w-[400px]">
              Pet project which was completed by team of 6 developers as part of
              the final examination at GOIT School. Similar to Trello and Jira.
            </p>
            <p className="mt-2 text-fuchsia-400 text-md ">
              &#91; React, Node, MUI, JavaScript &#93;
            </p>
          </div>
          <a href="https://korvan17.github.io/task-pro/" target="_blank">
            <div className="ml-10 p-2 rounded-xl customShadow">
              <div className="ml-10 p-2 rounded-xl customShadow">
                <Image src="/taskpro.png" width={400} height={300} alt="film" />
              </div>
            </div>
          </a>
        </div>
        <div className="flex items-center mb-10">
          <a
            href="https://slavikua1996.github.io/team-project13/"
            target="_blank"
          >
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
            <p className="mt-2 text-gray-400 text-sm max-w-[400px]">
              Pet project built solely with HTML and CSS after completion of the
              markup and stylization part of the course.
            </p>
            <p className="mt-2 text-fuchsia-400 text-md ">
              &#91; HTML, CSS, SASS, JavaScript &#93;
            </p>
          </div>
          <div className="ml-auto">
            <Image
              src="/verticalDodes.svg"
              width={68}
              height={266}
              alt="svg"
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamProjects;
