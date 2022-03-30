import React, { useState } from 'react'
import ScreenHeading from 'util/ScreenHeading/ScreenHeading'
import ScrollService from 'util/ScrollService'
import Animations from 'util/Animations'
import './Portfolio.css'

const Portfolio = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return
    Animations.animations.fadeInScreen(props.id)
  }
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  return (
    <div className="portfolio-container screen-container" id={props.id || ''}>
      <ScreenHeading title={'Portfolio'} subHeading={'My github repo'} />
    </div>
  )
}

export default Portfolio
