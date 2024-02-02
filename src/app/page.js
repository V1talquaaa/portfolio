'use client';
import About from './components/About'
import Header from './components/Header'
import Hero from './components/Hero'
import { Bruno_Ace } from 'next/font/google'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Footer from './components/Footer'
import TeamProjects from './components/TeamProjects'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'



const brunoAce = Bruno_Ace({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-brunoAce'
})


export default function Home() {

  useEffect(() => {
    if (typeof document !== "undefined") {
      AOS.init();
    }
  }, []);

  return (
    <main className={`${brunoAce.variable} font-sans`}>
      <Header />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <TeamProjects />
      <Footer />
    </main>
  )
}