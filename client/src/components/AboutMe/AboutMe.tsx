import React from 'react'
import ScreenHeading from '../../util/ScreenHeading/ScreenHeading'
import ScrollService from '../../util/ScrollService'
import Animations from '../../util/Animations'
import './AboutMe.css'

type tProps = {
  screen: any
  id:string
}
type screenProps={
  fadeInScreen:string
}


const AboutMe = (props:tProps) => {
  let fadeInScreenHandler = (screen: screenProps) => {
    if (screen.fadeInScreen !== props.id) return
    Animations.animations.fadeInScreen(props.id)
  }
  
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const SCREEN_CONSTSANTS = {
    description: '안녕하세요 풀스택 개발자가 목표인 프론트엔드 개발자 신의성 입니다\n',
    descriptionstring:
      '◦ 문제 해결 능력을 기르기 위해 코딩보다 설계를 먼저 하도록 노력합니다.\n' +
      '◦ 성장 가능성을 보여드리기 위해 개발자로써 꾸준한 학습과 활동을 하고 있습니다.\n' +
      '◦ 능독적이고 적극적인 커뮤니케이션으로 문제해결과 발전을 위해 노력합니다.\n' +
      '◦ 개발자로써 경험을 토대로 확장성과 유지 보수성이 높은 아키텍쳐와 패턴을 언제나 고민하고있습니다. ',
    highlights: {
      // bullets: ['◦ FrontEnd ➤ JavaScript, ReactJS, VueJS, NuxtJS, C# WPF', '◦ BackEnd ➤ NodeJs (express)'],
      bullets: [
        "Building ETL Solutions",
        "SQL & No-SQL Database Development",
        "G&G Technical Applications",
        "GIS Web Development and Analysis",
        "Machine Learning Project in Drilling and Production",
        "Building REST-API with Python and Node.Js",
      ],
      heading: 'Development Skills',
    },
  }
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight " key={i}>
        <div className="highlight-blob "></div>
        <span>{value}</span>
      </div>
    ))
  }

  return (
    <div className="about-me-container screen-container fade-in " id={props.id || ''}>
      <div className="about-me-parent ">
        <ScreenHeading title={'About Me'} subHeading={'My Portfolio Overview'} />
        <div className="about-me-card ">
          <div className="about-me-profile "></div>
          <div className="about-me-details ">
            <span className="about-me-description ">{SCREEN_CONSTSANTS.description}</span>
            <span className="about-me-descriptionstring ">{SCREEN_CONSTSANTS.descriptionstring}</span>
            <div className="about-me-highlights ">
              <div className="highlight-heading ">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options ">
              <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                {' '}
                Let's Discuss!{' '}
              </button>
              <a href="My_CV_2_0.pdf" download="My Portfolio.pdf">
                <button className="btn highlighted-btn ">Get Portfolio</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
