import React, { useState } from 'react'
import './contact.css'
import { Close, Email, Facebook, Github, Linkedin, Meme } from '../../asset/icon'
import {motion} from 'framer-motion'
import axios from 'axios'
const Contact = () => {
  const [openModal,setOpenModal] = useState(false)

  const handleClick = () => {
    // axios.post('/sendEmail',{
    //     to: 'shaineberdida@gmail.com',
    //     subject: 'Notify',
    //     text: '',
    //     html: ''
    // })
    setOpenModal(item => !item)
  }

  const [sender,setSender] = useState('')
  const [content,setContent] = useState('')
  const handleChange = (e) =>{
     const {value,name} = e.target
      
     if(name == 'sender'){
       setSender(value)
     }else if(name == 'message'){
       setContent(value)
     }
  }

  const handleSendEmail = () => {
    axios.post('https://backendportfolio-112r.onrender.com/sendEmail',{
        to: 'shaineberdida@gmail.com',
        subject: 'Notify',
        text: 'New Notification',
        html: `<div>
         Email: ${sender}
         <br>
         Content: ${content}
        </div>`
    })
    setContent('')
    setSender('')
  }
  
  return (
    <div className='contact-container' id='contacts'>
        <motion.h1 
          className='contact-title'
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
             duration: 1
          }}
        >Contact</motion.h1>
        <div className="contact-info">
            <motion.div 
              className="contact-radial"
              initial={{
                  opacity: 0,
                  x: '-100px'
              }}
              whileInView={{
                  opacity: 1,
                  x: '-2px'
              }}
              viewport={{
                  margin: '-200px'
              }}
              transition={{
                  duration: 1
              }}
             >
                <img src={Meme} alt="meme" />
            </motion.div>
            <motion.div 
              className="contact-radial"
              initial={{
                opacity: 0,
                x: '100px'
            }}
            whileInView={{
                opacity: 1,
                x: '2px'
            }}
            viewport={{
                margin: '-200px'
            }}
            transition={{
                duration: 1
            }}
             >
              <h1 className="contact-subtitle">GET IN TOUCH</h1>
              <p>
                 Welcom to my website if you have any question or just
                 want to say hi, feel free to contact me. I'm a fresh graduate
                 who enjoys learning and making new friends. I'll respond as 
                 quickly as possible.
              </p>
              <button className="button-54" onClick={handleClick} >SAY HI</button>
            </motion.div>
        </div>

        <motion.div 
          className="modal-container"
          animate={{
              opacity: openModal ? 1 : 0,
              zIndex: openModal ? 3 :  -1,
              x: openModal ? '20px' : '-100px'
          }}
          transition={{
             duration: 1
          }}
         >
           <div className="modal-cont">
            <label htmlFor="sender">Email</label>
              <input 
                  type="email" 
                  name="sender" 
                  id="send" 
                  placeholder='Enter Email'
                  onChange={handleChange}
              />
              <label htmlFor="message">Message</label>
              <textarea 
                    name="message" 
                    id="mess" 
                    cols="30" 
                    rows="4"
                    placeholder='Enter Message'
                    onChange={handleChange}
              />
              <button className='send-button' onClick={handleSendEmail}>Send</button>
           </div>
           <img src={Close} alt="close"  onClick={handleClick} />
        </motion.div>

        <div className="social-container">
            <a href="https://www.facebook.com/Shaine.Berdida">
                <img src={Facebook} alt="facebook" />
            </a>
            <a href="https://github.com/Shaine123">
                <img src={Github} alt="github" />
            </a>
            <a href="">
                <img src={Linkedin} alt="linkedin" />
            </a>
            <a href="">
                <img src={Email} alt="gmail" />
            </a>
        </div>
    </div>
  )
}

export default Contact
