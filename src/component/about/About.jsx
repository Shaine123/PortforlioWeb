import React, {  useRef } from 'react'
import {motion, useInView} from 'framer-motion'
import './about.css'
import { AboutImg1, AboutImg2, AboutImg3, AboutImg4 } from '../../asset/icon'
const About = () => {
  const checkRef = useRef(null)
  const isInView = useInView(checkRef, {
     margin: '-200px'
  })


  return (
     <div style={{scrollBehavior: 'unset'}}>
       <div  ref={checkRef} id='about'>
           <motion.div 
             initial ={{
                opacity: 0
             }}
             whileInView={{
                opacity: 1
             }}
             viewport={{
               margin: '-200px'
             }}
             transition={{ 
               duration: 1
             }}
             className='about-container'
           >
              <h1 className='About-title'>About</h1>
               <div className="about-info">
                    <motion.div className="about-details"
                      animate={{
                         x: isInView ? "0%" : "-120%"
                      }}
                      transition={{
                         duration: 1
                      }}
                     >
                        <h1 className='textTitle'>
                           Hi again,  
                           <span className='textTitleSpan'>
                               I'm Shaine Berdida
                           </span>
                        </h1>
                        <p className='text1'>
                          I am currently a Fresh Graduate at Negros Oriental State University,. I got interested in computers and programming 
                          during highschool since I was an avid visitor of my local computer shop. This paved the way for me to be inspired 
                          and fascinated with everything related to technology.
                        </p>  
                        <p className="text2">
                           Upon entering college I took up a degree of Bachelor of Science in Information Technology which allowed me to gain a much
                           deeper understanding about programming and solidified my basic knowledge. I learned the importance of HTML, CSS and Javascript 
                           which helped me in comprehending much more advance topics.
                        </p>
                        <p className="text3">
                           During my Senior Year in College, I was able to further improve my knowledge in programming being able to utilized frameworks such 
                           as React JS and other technology like Electron JS, React Native, Express,NodeJs ,Mogodb etc. As a final projects in my senior year 
                           I developed a Enhanced Library Management System which utilized QR Code technology, this was developed using React JS and Electron.
                           Furthermore, I also building Android Based Mapping Application which allowed students in the campus to be able to easily find 
                           there way, this was built using React Native. I want to further improve my knowledge in programming especially in webdevelopment
                           and I'm eager to accept any opoturnity that will be given to me.
                        </p>
                    </motion.div>
                    <motion.div className= "about-image"
                       animate={{
                         x: isInView ? '0%' : '100%'
                       }}
                       transition={{
                         duration: 1
                       }}
                    >
                         <div className="about-image-container">
                            <img src={AboutImg2} alt="ab2" />
                         </div>
                         <div className="about-image-container">
                            <img src={AboutImg1} alt="ab2" />
                         </div>
                         <div className="about-image-container">
                            <img src={AboutImg3} alt="ab2" />
                         </div>
                         <div className="about-image-container">
                            <img src={AboutImg4} alt="ab2" />
                         </div>
                    </motion.div>
               </div>

           </motion.div>
       </div>
     </div>
  )
}

export default About
