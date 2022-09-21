
import React from 'react'
import styles from '../style'
import {discount, robot} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <>
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className = {`flex-1 ${styles.flexStart} ml-5 flex-col xl:px-0 sm:px-20 px-6`}>

<div  className = "flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10] mb-2">

<img src={discount} alt="discount" className= "w-32px h-[32]" />
<p className = {`${styles.paragraph} ml-2`}>
<span className = "text-white mr-2"> 20%</span>
discount For {" "} 
<span className='text-white ml-2'>1 Month</span>
</p>



</div>

<div className= "flex flex-row justify-between items-center w-full">
<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white leading-[75px]">
  The Next  <br className = "sm:block hidden"/>
  {""}
  <span className='text-gradient'> Generation</span>
  {" "}

 
</h1>
<div className="ss:flex hidden md:ml-0 mr-0">
<GetStarted />

</div>
</div>
<h1 className="flex-1 font-poppins font-semibold  ss:text-[62px] text-[42px]
text-white leading-[100px]">
  

  Payment Method.
</h1>
<p className={`${styles.paragraph} max-w-[100%] mt-0 `}>
Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees.

</p>

    </div>
    <div className={`flex-1 flex ${styles.flexCenter}`}>  
  
      <img src={robot} alt="Discount Info" className="w-[80%] h-[100%] 
      relative z-[5] ml-5 mr-0 "/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[40%] h-[35%] rounded-full
        bottom-40 white__gradient" />
         <div className="absolute z-[0] w-[40%] h-[50%] 
        bottom-20 blue__gradient" />
    </div>
   <div className= {`ss:hidden ${styles.flexCenter}`}>
    <GetStarted />

   </div>
    </section>
    
    </>
  )
}

export default Hero