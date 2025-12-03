import React from 'react'
import HomeHero from '../UI/HomeHero'
import HomeAbout from './HomeAbout'
import HomeServices from './HomeServices'
import HomeProjects from './HomeProjects'
import HomeTestimonials from './HomeTestimonials'
import HomeBlog from './HomeBlog'

const HomePage = () => {
  return (
    <div>
      <HomeHero/>
      <HomeAbout/>
      <HomeServices/>
      <HomeProjects/>
      <HomeTestimonials/>
      <HomeBlog/>
    </div>
  )
}

export default HomePage

