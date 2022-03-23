import React, { useState } from 'react'
import ScreenHeading from 'util/ScreenHeading/ScreenHeading'
import ScrollService from 'util/ScrollService'
import Animations from 'util/Animations'

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({})

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ''}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">{props.fromDate + '-' + props.toDate}</div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    )
  }

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return
    Animations.animations.fadeInScreen(props.id)
  }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  return (
    <div className="resume-container screen-container" id={props.id || ''}>
      <div className="resume-content">
        <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
      </div>
    </div>
  )
}

export default Resume
