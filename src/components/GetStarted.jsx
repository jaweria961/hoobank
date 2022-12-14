

import React from 'react'
import styles from '../style'

import {arrowUp} from '../assets';

const GetStarted = () => {
  return (
    <>
    <div className= {`${styles.flexCenter} 
    w-[120px] 
    h-[120px]
    rounded-full
    bg-blue-gradient
    p-[2px]
    cursor-pointer

    `}>

    <div className = {`${styles.flexCenter}
    flex-col bg-primary w-[100%] h-[100%] rounded-full
    `}>
      <div className = {`${styles.flexStart} flex-row`}>
      <p className= "font-poppins font-medium text-[16px] text-gradient">
        <span>Get</span>
       
        <br/>
        <span>Started</span>

      </p>
      <img src={arrowUp} alt="arrow" className="w-[23px] h-[18px]
        object-contain
        "/>
      </div>

    </div>
    </div>
    </>
  )
}

export default GetStarted