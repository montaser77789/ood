import React from 'react'
import AboutHeroSection from './_components/AboutHeroSection'
import AboutSection from './_components/AboutSection'
import StatsSection from './_components/StatsSection'
import HowWeWorkSection from './_components/HowWeWorkSection'
import WhyUsSection from './_components/WhyUsSection'
import TeamSection from './_components/TeamSection'

const page = () => {
  return (
    <main>
      <AboutHeroSection />
      <AboutSection />
      <StatsSection />
      <HowWeWorkSection />
      <WhyUsSection />
      <TeamSection />
    </main>
  )
}

export default page
