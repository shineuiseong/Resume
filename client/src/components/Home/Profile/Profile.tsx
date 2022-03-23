import React,{FC, useEffect, useState} from 'react'
import styled from 'styled-components'
import {ReactTypical} from '@deadcoder0904/react-typical'
import ReactTypingEffect from 'react-typing-effect'
import './Profile.css'

type IProps={

  className ?:String

}


const Profile = ({className}:IProps) => {

  const detailrole = [
    "React Dev",
    "NodeJS Dev",
    "C# WPF Dev"
  ]
  const githubURL = 'https://github.com/shineuiseong'
  return (

    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='social'>
            <div className='social-icon'>
              <a className='btn_shadow' href={githubURL} target="_blank">
                <i className='fa fa-github-square fa-2x'></i>
              </a>
            </div>
          </div>

          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              풀스택을 지향하는

              <span className='highlighted-text'>Software Engineer</span>
              <span className='highlighted-text-name'>신의성</span>
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
                웹 프론트엔드와 백엔드에 관심이 많은 
                <span className='profile-role-tagline_soft'> 소프트웨어 엔지니어</span>
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