import React from 'react'
import './project.css'
import { motion } from 'framer-motion'
import ProjectContain from './projectContain/ProjectContain'
import Nextflix from '../../images/netflix.webp'
import Portfolio from '../../images/portfolio.jpeg'


const Project = () => {
 
    return (
        <div className="gpt3__blog section__padding" id="blog" >
        <div className="gpt3__blog-heading" 
       data-aos="fade-right"
       data-aos-offset="200"
       data-aos-once="true" 
       data-aos-duration="1000"
        >
          <h1 className="gradient__text">Websites promote you 24/7:<br /> No employee will do that.</h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupB"
          >
            <ProjectContain 
            imgUrl={Nextflix} date="Netflix Clone" 
            text="This is a Netflix  clone integrate with Firebase with React JS"
             link=" https://netflix-clone-19af9.web.app/"
             tagOne="React JS"
             tagTwo="React Router"
             tagThree="Firebase"
             tagFour=""
             />
            <ProjectContain 
            imgUrl={Portfolio} date="Portfolio"
             text="This is my previous portfolio made in React JS"
              link="https://ramanmalviya987.github.io/Main_Portfolio/"
              tagOne="React Js"
             tagTwo="email Js"
             tagThree="CSS3" />
           
          </div>
        </div>
      </div>
    )
}

export default Project
