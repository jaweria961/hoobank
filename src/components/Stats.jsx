import React from 'react'
import styles from '../style';
import {stats} from '../constants'

const Stats = () => {
  return (
   <>
   <section className = {`${styles.flexCenter}
   flex-row flex-wrap sm:mb-20 mb-6`}>

    {
    stats.map((stat)=>{
        return(
            <>
            <div key= {stat.id} className= {`flex-1 flex justify-start
            items-center flex-row m-3 ss:ml-5 ml-3
            `}>
              <h4 className="font-poppins font-semibold xs:text-[30px]
              text-[20px] ss:ml-5 ml-3 xs:leading-[53px] leading-[43px] text-white
              ">
                {stat.value}
              </h4>
              

              <p className="font-poppins font-normal xs:text-[15px]
              text-[10[x] ss:ml-3 ml-5 xs:leading-[26px] leading-[21px] text-gradient">
                {stat.title}
              </p>
            </div>
            
            </>
        )
      })
    }




   </section>
   
   </>
  )
}

export default Stats