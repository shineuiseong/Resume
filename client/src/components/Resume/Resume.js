import React, { useState } from 'react'
import ScreenHeading from 'util/ScreenHeading/ScreenHeading'
import ScrollService from 'util/ScrollService'
import Animations from 'util/Animations'
import { programmingSkillsDetails, projectDetails, resumeBullets } from './ResumeSkill'
import './Resume.css'

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({})

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return
    Animations.animations.fadeInScreen(props.id)
  }

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">{props.fromDate + '-' + props.toDate}</div>
          ) : (
            <div></div>
          )}
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

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={'배재대학교 게임공학과'}
        subHeading={'4년제 학사 졸업'}
        fromDate={'2013'}
        toDate={'2019'}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={'(주)세오'}
          subHeading={'제품개발인증팀 연구원'}
          fromDate={'2020.04'}
          toDate={'2021.12.31'}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as E&P Data Specialist handling E&P technical database and data integration development.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed end-to-end data management system for G&G technical data using GIS Framework and Application
          </span>
          <br />
          <span className="resume-description-text">
            - Developed API and real-time monitoring for production and facility data.
          </span>
          <br />
          <span className="resume-description-text">
            - Developed ETL tools to digitize multi-document format into semi-automated services and database.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div className="resume-screen-container programming-skills-container" key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div style={{ width: skill.ratingPercentage + '%' }} className="active-percentage-bar"></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading="Sports" description="Like to cycling, basketball and swimming." />
      <ResumeHeading
        heading="Hydroponics"
        description="Build my own hydroponics system and step-by-step understanding the process."
      />
      <ResumeHeading
        heading="Investment"
        description="Started to invest in farming area include ducks and sheep also interest in stock market investment"
      />
    </div>,
  ]

  const handleCarousal = (index) => {
    let offsetHeight = 360
    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    }
    setCarousalOffsetStyle(newCarousalOffset)
    setSelectedBulletIndex(index)
  }

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'}
        key={index}
      >
        <img className="bullet-logo" src={require(`../../assets/Resume/${bullet.logoSrc}`)} alt="B" />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ))
  }

  const getResumeScreens = () => {
    return (
      <div style={carousalOffsetStyle.style} className="resume-details-carousal">
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    )
  }

  return (
    <div className="resume-container screen-container" id={props.id || ''}>
      <div className="resume-content">
        <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  )
}

export default Resume
