import React from 'react'
import {motion} from 'framer-motion'
import './certificaate.css'
import { CertificateImage, CertificateImage2 } from '../../asset/icon'
const Certificate = () => {
  return (
    <div className='certificate-container'>
        <motion.h1 
           className="certificate-title"
            initial={{
               opacity: 0
            }}
            whileInView={{
               opacity: 1
            }}
            viewport={{
               margin: '-200px'
            }}
            transition={{
               duration:1
            }}
        >Certificate</motion.h1>
        <div className="certMain-container">
         <motion.div 
           className="certImage-container"
            initial={{
               opacity: 0
            }}
            whileInView={{
               opacity: 1
            }}
            viewport={{
               margin: '-200px'
            }}
            transition={{
               duration:1,
               ease: 'linear'
            }}
          >
               <img src={CertificateImage} alt="cert" />
         </motion.div>
         <motion.div 
           className="certImage-container"
            initial={{
               opacity: 0
            }}
            whileInView={{
               opacity: 1
            }}
            viewport={{
               margin: '-200px'
            }}
            transition={{
               duration:1,
               ease: 'linear'
            }}
          >
               <img src={CertificateImage2} alt="cert" />
         </motion.div>
        </div>

    </div>
  )
}

export default Certificate
