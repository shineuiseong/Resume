import React, { useState } from 'react'
import ScreenHeading from 'util/ScreenHeading/ScreenHeading'
import ScrollService from 'util/ScrollService'
import Animations from 'util/Animations'
import { programmingSkillsDetails, projectDetails, resumeBullets } from './ResumeSkill'
import './Resume.css'


type ResumeProps={

  fadeInScreen:string |undefined
  id:string |undefined
  heading:string |undefined
  fromDate:string |undefined
  toDate:string |undefined
  subHeading:string |undefined
  description:string |undefined

}

const Resume = (props:ResumeProps) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState<any>({})

  let fadeInScreenHandler = (screen:ResumeProps) => {
    if (screen.fadeInScreen !== props.id) return
    Animations.animations.fadeInScreen(props.id)
  }

  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const ResumeHeading = (props:ResumeProps) => {
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
        toDate={'2019'} fadeInScreen={undefined} id={undefined} description={undefined}      />
    </div>,
    /* 경력 */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={'(주)세오'}
          subHeading={'제품개발인증팀 연구원'}
          fromDate={'2020.04'}
          toDate={'2021.12'} fadeInScreen={undefined} id={undefined} description={undefined}        />
        <div className="experience-description">
          <span className="resume-description-text">
            - 2020.04 ~ 2020.08 암호화 영상 및 복호화 영상 프로세스 관리 시스템 개발 건
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text-camera">
            - 2020.08 ~ 2021.10 다차선 번호인식 통합형 무인교통 단속시스템 개발 건 (RS232 레이더 정보 컨트롤, 단속
            시스템 및 모니터링 관제 부분 개발)
          </span>
          <br />
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - 2021.09 ~ 2021.10 소프트웨어 GS인증평가 무인교통 단속시스템 진행완료
          </span>
          <br />
        </div>
        <div className="experience-description">
          <span className="resume-description-text">- 2021.09 ~ 2021.12 한국 기게연구원 차량 관리 시스템 개발</span>
          <br />
        </div>
        <br />
        <ResumeHeading
          heading={'(주)스태프프로젝트'}
          subHeading={'개발 연구원'}
          fromDate={'2019.03'}
          toDate={'2020.04'} fadeInScreen={undefined} id={undefined} description={undefined}        />
        <div className="experience-description">
          <span className="resume-description-text">- 당뇨병 치료용 센서 데이터 수집 어플 개발 (Android,Arduino)</span>
          <br />
        </div>
      </div>
    </div>,

    /* 스킬 */
    <div className="resume-screen-container programming-skills-container" key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span className="heading-bullet-skill">
            {skill.skill}
            <span className="heading-bullet-skill-percentage"> {skill.ratingPercentage / 10}/10</span>
          </span>

          <div className="skill-percentage">
            <div style={{ width: skill.ratingPercentage + '%' }} className="active-percentage-bar"></div>
          </div>
        </div>
      ))}
    </div>,

    /* 프로젝트 */
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate} fadeInScreen={undefined} id={undefined}        />
      ))}
    </div>,
  ]

  const handleCarousal = (index:any) => {
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
