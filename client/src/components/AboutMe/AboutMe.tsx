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
       bullets: ['(2022.03) 개인 프로젝트 진행중','(2021.10~현재) 클론프로젝트 구현 및 학습','(2021.10~현재) NodeJS Express 서버 구축 학습','(2021.10~현재) React,VueJs,NuxtJS 프론트 프레임워크 및 라이브러리 기초 학습','(2021.10~현재) 웹개발자의 매력을 느껴 기술 전향하기위한 학습 커리큘럼 계획','(2020.04.~2021.12.31) (주)세오 제품개발인증팀 C# WPF Clinet 개발 및 유지보수','(2019.01~2020.04) (주)스태프프로젝트 연구원 Android 개발자로 근무'],
      // bullets: [
      //   "Building ETL Solutions",
      //   "SQL & No-SQL Database Development",
      //   "G&G Technical Applications",
      //   "GIS Web Development and Analysis",
      //   "Machine Learning Project in Drilling and Production",
      //   "Building REST-API with Python and Node.Js",
      // ],
      heading: '최근 근황',
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
                연락하기!{' '}
              </button>
              <a href="My_CV_2_0.pdf" download="My Portfolio.pdf">
                <button className="btn highlighted-btn ">포트폴리오 다운로드</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
