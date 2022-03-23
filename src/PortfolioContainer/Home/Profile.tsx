import React,{FC, useEffect, useState} from 'react'
import styled from 'styled-components'
import {ReactTypical} from '@deadcoder0904/react-typical'
import ReactTypingEffect from 'react-typing-effect'
import './Profile.css'

const Profile = () => {

  const detailrole = [
    "React Dev",
    "NodeJS Express Dev",
    "C# WPF Dev"
  ]
  return (

    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='#'>
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-google-plus-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-instargram'></i>
              </a>
            </div>
          </div>

          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              풀스택을 지향하는  <span className='highlighted-text'> 프론트엔드 개발자 신의성</span>
            </span>
          </div>

          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                {" "}
                <ReactTypingEffect
                  
                  text={detailrole}
                  speed={300}
                  eraseSpeed={300}
                  displayTextRenderer={(text, i) => {
                    return (
                      <h1>
                        {text.split('').map((char, i) => {
                          const key = `${i}`;
                          return (
                            <span
                              key={key}
                              //style={i%2 === 0 ? { color: 'magenta'} : {}}
                            >{char}</span>
                          );
                        })}
                      </h1>
                    );
                  
                  }}     

                />
              </h1>
              <span className='profile-role-tagline'>
                Front React and Back NodeJs
              </span>
            </span>
          </div>
          <div className='profile-option'>
            <button className='btn primary-btn'>
              {""}
              Hire Me{""}
            </button>
            <a href='ehizcv.pdf' download='Euiseong ehizcv.pdf'>
              <button className='btn highlighted-btn'>
                        Get Resume
              </button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'>

          </div>
        </div>
      </div>
    </div>
 
  )
}

export default Profile