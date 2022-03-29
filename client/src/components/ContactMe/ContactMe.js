import React, { useState } from 'react'
import ScreenHeading from '../../util/ScreenHeading/ScreenHeading'
import ScrollService from '../../util/ScrollService'
import Animations from '../../util/Animations'
import ReactTypingEffect from 'react-typing-effect'
import imgBack from '../../assets/Contact/mailz.jpeg'
import loading from '../../assets/Contact/load2.gif'

import './ContactMe.css'

import axios from 'axios'
import { toast } from 'react-toastify'

const ContactMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return
    Animations.animations.fadeInScreen(props.id)
  }

  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

  const TitleText = ['Get In Touch ']

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [banner, setBanner] = useState('')
  const [bool, setBool] = useState(false)

  const githubURL = 'https://github.com/shineuiseong'

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      let data = {
        name,
        email,
        message,
      }
      setBool(true)
      // 서버통신
      const res = await axios.post('/contact', data)
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg)
        toast.error(res.data.msg)
        setBool(false)
      } // 성공시
      else if (res.status === 200) {
        setBanner(res.data.msg)
        toast.success(res.data.msg)
        setBool(false)
        setName('')
        setEmail('')
        setMessage('')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="main-container" id={props.id || ''}>
      <ScreenHeading subHeading={'Lets Keep In Touch'} title={'Contact Me'} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">Please, Send Your Message Here!</h2>
          <a className="btn_shadow" href={githubURL} target="_blank" rel="noreferrer">
            <i className="fa fa-github-square fa-2x"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>crossstory12@gmail.com</h4>
            <img src={imgBack} alt="image not found." />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">성함 또는 회사명</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">이메일</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">메시지</label>
            <textarea type="text" onChange={handleMessage} value={message} />
            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={loading} alt="image not responding" />
                  </b>
                ) : (
                  ''
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
