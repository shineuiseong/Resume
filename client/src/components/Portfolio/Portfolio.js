import React from 'react'
import ScreenHeading from 'util/ScreenHeading/ScreenHeading'
import ScrollService from 'util/ScrollService'
import Animations from 'util/Animations'
import './Portfolio.css'
import styled from 'styled-components'

import resume from '../../assets/Portfolio/Resume.png'
import movie from '../../assets/Portfolio/movie.png'
import bolier from '../../assets/Portfolio/bolierplate.png'
import blind from '../../assets/Portfolio/blind.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

const Portfolio = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return
    Animations.animations.fadeInScreen(props.id)
  }
  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  // const SLIDE_COUNT = 3
  // const slides = Array.from(Array(SLIDE_COUNT).keys())

  SwiperCore.use([Pagination, Autoplay])

  const swiperStyle = {
    width: '600px',
    height: '650px',
    backgroundColor: 'var(--dark)',
    borderRadius: '12px',
  }

  const githubresume = (e) => {
    window.open('https://github.com/shineuiseong/Resume', '_blank')
  }

  const githubmovie = (e) => {
    window.open('https://github.com/shineuiseong/vue3-movie-app', '_blank')
  }
  const githubbolier = (e) => {
    window.open('https://github.com/shineuiseong/bolierplate_react', '_blank')
  }
  const githubblind = (e) => {
    window.open('https://github.com/shineuiseong/blind_clone_project', '_blank')
  }

  return (
    <div className="portfolio-container screen-container" id={props.id || ''}>
      <ScreenHeading title={'Portfolio'} subHeading={'My github repo Slides And Move on Click'} />
      <Swiper
        style={{ ...swiperStyle }}
        spaceBetween={0}
        initialSlide={0}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide onClick={githubresume}>
          <BannerImg bannerImage={resume} alt="not resume" />
          <InfoContainer>
            <div className="title">포트폴리오 웹사이트</div>
            <div className="des">ReactJS,NodeJS,Amazon EC2</div>
          </InfoContainer>
        </SwiperSlide>
        <SwiperSlide onClick={githubbolier}>
          <BannerImg bannerImage={bolier} alt="not bolier" />
          <InfoContainer>
            <div className="title">소셜 로그인 보일러 플레이트</div>
            <div className="des">ReactJs,NodeJs,MongoDB</div>
          </InfoContainer>
        </SwiperSlide>
        <SwiperSlide onClick={githubmovie}>
          <BannerImg bannerImage={movie} alt="not movie" />
          <InfoContainer>
            <div className="title">Movie Search 웹사이트</div>
            <div className="des">VueJs</div>
          </InfoContainer>
        </SwiperSlide>
        <SwiperSlide onClick={githubblind}>
          <BannerImg bannerImage={blind} alt="not blind" />
          <InfoContainer>
            <div className="title">blind Clone 프로젝트</div>
            <div className="des">NuxtJs,nodeJs,MongoDB</div>
          </InfoContainer>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

const BannerImg = styled.div`
  width: 600px;
  height: 650px;
  object-fit: cover;
  background-image: url(${(props) => props.bannerImage});
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`

const InfoContainer = styled.div`
  background-color: #9c9c9ce3;
  width: 100%;
  padding: 14px;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  backdrop-filter: blur(10px);

  .title {
    font-size: 20px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .des {
    font-family: 'Poppins Bold';
  }
`

export default Portfolio
