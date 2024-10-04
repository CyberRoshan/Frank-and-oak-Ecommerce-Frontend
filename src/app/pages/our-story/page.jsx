import React from 'react'
import StoryHeroSection from './OurStoryComponents/StoryHeroSection'
import HowItAllStarted from './OurStoryComponents/HowItAllStarted'
import OurAchivements from './OurStoryComponents/OurAchivements'
import OurCommunity from './OurStoryComponents/OurCommunity'
import AboutStory from './OurStoryComponents/AboutStory'

export default function OurStory() {
  return (
    <div>
      <StoryHeroSection/>
      <HowItAllStarted/>
      <OurAchivements/>
      <OurCommunity/>
      <AboutStory/>
    </div>
  )
}
