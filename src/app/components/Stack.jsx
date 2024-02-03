import Image from 'next/image'
import React from 'react'

function Stack() {
  return (
    <section id="skills" className="bg-aboutBg bg-cover py-[60px] lg:py-[120px]">
      <div className="container text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
<div className='mb-10 flex items-center gap-10'>
<h2 className="mx-auto lg:ml-0 lg:text-left text-2xl lg:text-6xl">My Stack</h2>
      <Image src="/skillArrowIcon.svg" width={600} height={10} alt='arrow' className='hidden lg:block'/>
</div>
      <ul className='grid grid-cols-2 gap-5 justify-center'>
        <li className='flex items-center gap-5'><Image src="/htmlIcon.svg" width={48} height={48} alt="html" />HTML</li>
        <li className='flex items-center gap-5'><Image src="/jsIcon.svg" width={48} height={48} alt="js" />JavaScript</li>
        <li className='flex items-center gap-5'><Image src="/nodeIcon.svg" width={48} height={48} alt="node" />Node.js</li>
        <li className='flex items-center gap-5'><Image src="/reactIcon.svg" width={48} height={48} alt="react" />React</li>
        <li className='flex items-center gap-5'><Image src="/sassIcon.svg" width={48} height={48} alt="sass" />SAAS</li>
        <li className='flex items-center gap-5'><Image src="/cssIcon.svg" width={48} height={48} alt="css" />CSS</li>
        <li className='flex items-center gap-5'><Image src="/nextIcon.svg" width={48} height={48} alt="next" />Next.js</li>
        <li className='flex items-center gap-5'><Image src="/bootstrapIcon.svg" width={48} height={48} alt="bootstrap"/>Bootstrap</li>
        <li className='flex items-center gap-5'><Image src="/viteIcon.svg" alt="vite" width={48} height={48} />Vite</li>
        <li className='flex items-center gap-5'><Image src="/tailwindIcon.svg" alt="tailind" width={48} height={48} />Tailwind</li>
      </ul>
      </div>
    </section>
  )
}

export default Stack