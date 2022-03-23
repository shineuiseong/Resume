import React from 'react'
import './ScreenHeading.css'

type tProps={

  title:string
  subHeading:any

}

const  ScreenHeading = (props:tProps) => {
  return (
    <div className="heading-container">
      <div className="screen-heading">
        <span>{props.title}</span>
      </div>

      {props.subHeading ? (
        <div className="screen-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}

      <div className="heading-seperator">
        <div className="seperator-line">
          <div></div>
        </div>
      </div>
    </div>
  )
}
export default ScreenHeading