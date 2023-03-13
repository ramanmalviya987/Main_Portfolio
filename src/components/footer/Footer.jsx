import React from 'react'
import dark from '../../images/dark.jpg'
import Social from './../social/Social'
import './footer.css'
const Footer = () => {
    return (
        <div className="gpt3__footer section__padding" >
        <div className="gpt3__footer-heading" data-aos="zoom-out-down"
       data-aos-offset="200"
       data-aos-once="true" 
       data-aos-duration="1000">
          <h1 className="gradient__text">This is My Awesome Portfolio<br/>Raman Malviya </h1>
        </div>
    
       
    
        <div className="gpt3__footer-links" data-aos="flip-up"
       data-aos-offset="200"
       data-aos-once="true" 
       data-aos-duration="1000">
        
          <div className="gpt3__footer-links_div">
            <h4>Follow me on:</h4>
            <Social />
          </div>
          
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>Samar Park Colony <br />District Indore, Madhya Pradesh<br />India, 451010 </p>
            <p><a href="tel:+919926488445">+91 9926488445</a></p>
            <p><a href="mailto:mohdrehanrq0@gmail.com">raman.s.malviya@gmail.com</a></p>
          </div>
        </div>
    
        <div className="gpt3__footer-copyright">
          <p>@2021 Raman Malviya. All rights reserved.</p>
        </div>
      </div>
    )
}

export default Footer
