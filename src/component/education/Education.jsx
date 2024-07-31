import React from 'react'
import {motion} from 'framer-motion'
import './education.css'
const Education = () => {

  return (
   <div className="education-container">
      <motion.h1 
        initial = {{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        viewport={{
           amount: 'all'
        }}
        transition={{
           duration: 1
        }}
      className='education-title'>Education</motion.h1>
      <div className="white-line" >
         <div className="dot">
            <motion.p 
               className="timeline-text"
               initial={{
                x: '300px',
                opacity: 0
             }}
             whileInView={{
               x: '10px',
               opacity: 1
             }}
             viewport={{
               margin: '-200px'
             }}
            transition={{
               duration: 1
            }}
               >2024-Present</motion.p>
           <motion.div 
             className="timeLineText-details"
             initial={{
              x: '-300px',
              opacity: 0
             }}
            whileInView={{
              x: '10px',
              opacity: 1
             }}
            viewport={{
                margin: '-300px',
             }}
            transition={{
                duration: 1
             }}
           >
               <p className="timeLineText-header">4th Year BSIT</p>
                <p className="timeLineText-info">
                    In my last year as a BSIT student at NORSU, I manage to get the presedential award and 
                    proficiency in web development. I aspire to be a full stack developer or front end 
                    developer, and I am eager to improve my skills even further , while exploring new 
                    things in the world of technology.
                </p>
           </motion.div>
         </div>
         <div className="dot">
           <motion.p 
             className="timeline-text2"
             initial={{
                x: '-300px',
                opacity: 0
             }}
             whileInView={{
               x: '10px',
               opacity: 1
             }}
             viewport={{
                margin: '-200px',
             }}
            transition={{
                duration: 1
            }}
             >2023-2024</motion.p>
          <motion.div 
             className="timeLineText-details2"
             initial={{
              x: '300px',
              opacity: 0
           }}
           whileInView={{
             x: '10px',
             opacity: 1
           }}
            viewport={{
                margin: '-300px',
            }}
            transition={{
                duration: 1
            }}
           >
               <p className="timeLineText-header" style={{textAlign:'left'}}>3rd Year BSIT</p>
                <p className="timeLineText-info">
                   This was the most hectic year for me since I had to juggle
                   multiple subjects at once. Through this I was able to learn,
                   how to properly manage my time and it helped improve my critical
                   thinking skills. Through this I was able to pass all my coding 
                   projects ahead of time.
                </p>
           </motion.div>
         </div>
         <div className="dot">
         <motion.p 
             className="timeline-text3"
             initial={{
              x: '300px',
              opacity: 0
           }}
            whileInView={{
              x: '10px',
              opacity: 1
            }}
            viewport={{
              margin: '-200px'
            }}
            transition={{
                duration: 1
            }}
             >2022-2023</motion.p>
            <motion.div 
             className="timeLineText-details"
             initial={{
              x: '-300px',
              opacity: 0
             }}
            whileInView={{
              x: '10px',
              opacity: 1
             }}
            viewport={{
                margin: '-300px',
             }}
            transition={{
                duration: 1
             }}
           >
               <p className="timeLineText-header">2nd Year BSIT</p>
                <p className="timeLineText-info">
                    I was able to learn the fundamentals of programming during this 
                    time such as loops,arrays,object oriented programming and also
                    what is a programming in general. Aside from this , I began
                    to explore more about different programming languages and 
                    slowly learning on my own.
                </p>
           </motion.div>
         </div>
         <div className="dot">
         <motion.p 
             className="timeline-text4"
             initial={{
              x: '-300px',
              opacity: 0
           }}
           whileInView={{
             x: '10px',
             opacity: 1
           }}
           viewport={{
             margin: '-200px'
           }}
            transition={{
                duration: 1
            }}
             >2021-2022</motion.p>
          <motion.div 
             className="timeLineText-details2"
             initial={{
              x: '300px',
              opacity: 0
           }}
           whileInView={{
             x: '10px',
             opacity: 1
           }}
            viewport={{
                margin: '-300px',
            }}
            transition={{
                duration: 1
            }}
           >
               <p className="timeLineText-header" style={{textAlign:'left'}}>1st Year BSIT</p>
                <p className="timeLineText-info">
                   As a freshman at NORSU taking up BSIT, It was a new and frightening experience
                   especially with the online set due to covid. I was forced to adapt and 
                   learn new perspectives about programming, networking and database design. This 
                   helped me solidify my foundation and inspired me to perceiver in this degree.
                </p>
           </motion.div>
         </div>
         <div className="dot">
         <motion.p 
             className="timeline-text5"
             initial={{
              x: '300px',
              opacity: 0
           }}
           whileInView={{
             x: '10px',
             opacity: 1
           }}
           viewport={{
             margin: '-200px'
           }}
            transition={{
                duration: 1
            }}
             >2020-2021</motion.p>
               <motion.div 
             className="timeLineText-details"
             initial={{
              x: '-300px',
              opacity: 0
             }}
            whileInView={{
              x: '10px',
              opacity: 1
             }}
            viewport={{
                margin: '-300px',
             }}
            transition={{
                duration: 1
             }}
           >
               <p className="timeLineText-header">Grade 12 ICT</p>
                <p className="timeLineText-info">
                    I graduated with honors from Bayawan National HighSchool Senior High Department
                    after completing Grade 12 TVL ICT, I focused on expanding my knowledge on technology
                    and what are different paths that i can take in this field. Although, I was leanning 
                    towards web development since I was always curious on how web pages function.
                </p>
           </motion.div>
         </div>
      </div>
   </div>
  )
}

export default Education
