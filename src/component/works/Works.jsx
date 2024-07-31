import React from 'react'
import './works.css'
import {motion} from 'framer-motion'
import { Works1, Works2, Works3, Works4, Works5, Works6, Works7, Works8, Works9 } from '../../asset/icon'
const Works = () => {
  return (
    <div className='works-container'>
       <motion.h1 
         className="works-title"
         initial ={{
           opacity: 0
         }}
         whileInView={{
           opacity:1
         }}
         viewport={{
           margin: '-200px'
         }}
         transition={{
           duration: 1
         }}
        >Works</motion.h1>
        <div className="main-project">
          <motion.div 
             className="radial-bg"
            initial={{
               opacity: 0,
               x: '-100px'
            }}
            whileInView={{
               opacity: 1,
                x: '20px'
            }}
            viewport={{
                margin: '-200px'
            }}
            transition={{
               duration: 1
            }}
          >
              <h2 className="mainproject-title">4th Year Capstone Project</h2>
              <h2 className="mainproject-subtitle">Enhanced Library Management System</h2>
              <p className="project-description">
                It is a desktop application designed to make the overall process in the Library
                much more easier. It utilizes react ecosystem for building the UI and is builth
                on top of Electron JS. This finished project was developed within two months, 
                resulting in positive feedback from the library staff and IT instructors.
              </p>
              <p className="project-description2">
                The main objective of this system to lessen the time needed for students to login
                in the library and aid the library staff in there day to day task.
              </p>

              <p className="project-languages">
                Technologies
              </p>
              <div className="progress-bar">
                 <div className="progress"></div>
                 <div className="progress"></div>
                 <div className="progress"></div>
                 <div className="progress"></div>
                 <div className="progress"></div>
              </div>
              <ul>
                 <li>React JS</li>
                 <li>Electron JS</li>
                 <li>Express JS</li>
                 <li>Node JS</li>
                 <li>MongoDB</li>
              </ul>
              
          </motion.div>
          <motion.div 
             className="radial-bg"
             initial={{
              opacity: 0,
              x: '100px'
           }}
            whileInView={{
                opacity: 1,
                x: '20px'
            }}
            viewport={{
                margin: '-200px'
            }}
            transition={{
                duration: 1
            }}
          >
          <img src={Works1} alt="work1" />
          </motion.div>
        </div>
        <div className="main-project">
          <motion.div 
             className="radial-bg"
            initial={{
               opacity: 0,
               x: '-100px'
            }}
            whileInView={{
               opacity: 1,
                x: '20px'
            }}
            viewport={{
                margin: '-200px'
            }}
            transition={{
               duration: 1
            }}
          >
              <h2 className="mainproject-title">4th Year Capstone Project 2</h2>
              <h2 className="mainproject-subtitle">Android Based Mapping System</h2>
              <p className="project-description">
                This is an android application that is intended to help students in 
                navigating around the campus. The system is builth using React Native and
                has adapted the google api for the navigating aspect of the system. This
                finished application has been developed in a span of 2 months which resulted
                in high favorabilty amount the respondents.
              </p>
              <p className="project-description2">
                The main goal of this application is to be able to assist new students 
                in navigating around the campus without experiencing any difficulties
                in locating a specific location in the campus.
              </p>

              <p className="project-languages">
                Technologies
              </p>
              <div className="progress-bar2">
                 <div className="progress"></div>
                 <div className="progress"></div>
                 <div className="progress"></div>
                 <div className="progress"></div>
              </div>
              <ul className='ul2'>
                 <li>React Native</li>
                 <li>Node JS</li>
                 <li>Express JS</li>
                 <li>MongoDB</li>
              </ul>
              
          </motion.div>
          <motion.div 
             className="radial-bg"
             initial={{
              opacity: 0,
              x: '100px'
           }}
            whileInView={{
                opacity: 1,
                x: '20px'
            }}
            viewport={{
                margin: '-200px'
            }}
            transition={{
                duration: 1
            }}
          >
          <img src={Works2} alt="work2" />
          </motion.div>
        </div>
        <div className="main-project">
          <motion.div 
             className="radial-bg"
            initial={{
               opacity: 0,
               x: '-100px'
            }}
            whileInView={{
               opacity: 1,
                x: '20px'
            }}
            viewport={{
                margin: '-200px'
            }}
            transition={{
               duration: 1
            }}
          >
              <h2 className="mainproject-title">Full Stack Project</h2>
              <h2 className="mainproject-subtitle">LocalLit: Book Supplies</h2>
              <p className="project-description">
                This is a web based eccomerce application designed to ensure that 
                the consumers are able to receive there books at an affordable price.
                LocalLit is built using the react ecosystem incorporating mongodb as 
                its database while also integrating a google auth authentication.
              </p>
              <p className="project-description2">
                The main goal of this web application is to help local book sellers
                be able to sell there books to consumers wihtout paying a large 
                amoutns of money. LocalLit provides a way for sellers to have an 
                online presence at an affordable price.
              </p>

              <p className="project-languages">
                Technologies
              </p>
              <div className="progress-bar3">
                 <div className="progress"></div>
                 <div className="progress"></div>
                 <div className="progress"></div>
                 <div className="progress"></div>
                 <div className="progress"></div>
                 <div className="progress"></div>
              </div>
              <ul className='ul2'>
                 <li>React JS</li>
                 <li>Node JS</li>
                 <li>Express JS</li>
                 <li>MongoDB</li>
                 <li>React Router</li>
                 <li>React Redux</li>
              </ul>
              
          </motion.div>
          <motion.div 
             className="radial-bg"
             initial={{
              opacity: 0,
              x: '100px'
           }}
            whileInView={{
                opacity: 1,
                x: '20px'
            }}
            viewport={{
                margin: '-200px'
            }}
            transition={{
                duration: 1
            }}
          >
          <img src={Works9} alt="work2" />
          </motion.div>
        </div>
        <div className="side-projects">
           <motion.div 
              className="sideproject-container"
             initial={{
               opacity: 0,
               width: '50px'
             }}
             whileInView={{
               opacity: 1,
               width: '50vw'
             }}
             viewport={{
               margin: '-200px'
             }}
             transition={{
               duration: 1
             }}
            >
              <div className="sideproject-image">
                  <img src={Works3} alt="works3" />
              </div>
              <div className="sideproject-text">
                 <h2>Etch-a Sketch </h2>
                 <p>
                    A classic game where you are able to write 
                    in etachap pad and enjoy writing anything 
                    to your hearts content.
                 </p>
              </div>
           </motion.div>
           <motion.div 
             className="sideproject-container"
             initial={{
              opacity: 0,
              width: '50px'
            }}
            whileInView={{
              opacity: 1,
              width: '50vw'
            }}
            viewport={{
              margin: '-200px'
            }}
            transition={{
              duration: 1
            }}
            >
             <div className="sideproject-image">
                  <img src={Works4} alt="works4" />
              </div>
              <div className="sideproject-text">
                 <h2>Weather App </h2>
                 <p>
                    This is  a weather app application that is able to
                     check the state of weather within the week by utilizing
                     a weather api in order gather accurate and updated
                     information.
                 </p>
              </div >
           </motion.div>
           <motion.div 
             className="sideproject-container"
             initial={{
              opacity: 0,
              width: '50px'
            }}
              whileInView={{
                opacity: 1,
                width: '50vw'
              }}
              viewport={{
                margin: '-200px'
              }}
              transition={{
                duration: 1
              }}
            >
             <div className="sideproject-image">
                  <img src={Works5} alt="works5" />
              </div>
              <div className="sideproject-text">
                 <h2>Task Bee</h2>
                 <p>
                    Task Bee is a todo app that uses a unique ui and is able 
                    to take down notes for the user. The application caters to
                    all the common features of any todo app but is builth with 
                    a more unique ui and state management process compared to
                    simple todo apps.
                 </p>
              </div>
            </motion.div>
           <motion.div 
             className="sideproject-container"
             initial={{
              opacity: 0,
              width: '50px'
            }}
              whileInView={{
                opacity: 1,
                width: '50vw'
              }}
              viewport={{
                margin: '-200px'
              }}
              transition={{
                duration: 1
              }}
            >
             <div className="sideproject-image">
                  <img src={Works6} alt="works6" />
              </div>
              <div className="sideproject-text">
                 <h2>Realstate DemoWebsite</h2>
                 <p>
                    This is a frontend realstate website that is focused only
                    on the design aspects to ensure that users visiting this
                    website will have an enjoyable experience. This is a static
                    website that is intended for UI and UX experience.
                 </p>
              </div>
          </motion.div>
          <motion.div 
            className="sideproject-container"
            initial={{
              opacity: 0,
              width: '50px'
            }}
            whileInView={{
              opacity: 1,
              width: '50vw'
            }}
            viewport={{
              margin: '-200px'
            }}
            transition={{
              duration: 1
            }}
           >
             <div className="sideproject-image">
                  <img src={Works7} alt="works7" />
              </div>
              <div className="sideproject-text">
                 <h2>Drum App</h2>
                 <p>
                   This is a drum application that allow users to be able 
                   to play certain instruments. The application was built
                   using javascript and provides a fun experience for users
                   who enjoy instruments.
                 </p>
              </div>
          </motion.div>
          <motion.div 
            className="sideproject-container"
            initial={{
              opacity: 0,
              width: '50px'
            }}
            whileInView={{
              opacity: 1,
              width: '50vw'
            }}
            viewport={{
              margin: '-200px'
            }}
            transition={{
              duration: 1
            }}
           >
             <div className="sideproject-image">
                  <img src={Works8} alt="works8" />
              </div>
              <div className="sideproject-text">
                 <h2>Solarsystem CSS</h2>
                 <p>
                    This is a solarsystem website that is builth purely
                    using css and html. All the animation used in the 
                    site is accomplished with vanila css. In order
                    to provide the illusion of a solar system.
                 </p>
              </div>
          </motion.div>
        </div>
    </div>
  )
}

export default Works
