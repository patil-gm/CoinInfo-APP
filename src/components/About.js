import React from 'react'
import GP from './images/team/gp3.png'
import Navbar from "./Navbar";
import './style.css'
const about = () => {
  return (

    
    
    <div>
      <Navbar/>
      <p>.</p>
      <p>.</p>
      <p>.</p>
        <div className='about'>
        <div className="container aos-init aos-animate" data-aos="fade-up">
        <div className="d-flex  justify-content-center">
        <div className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up"
          data-aos-delay="200">
          <div className="content">
            <h3>Who am I</h3>
            <h2>3rd year UnderGrad student @PICT, Pune.</h2>
            <p style={{color:'black'}}>
              I am looking for a position in a organization where I can launch my career and learn new skills, expand my knowledge, contribute my ideas and be mentored towards a successful career.
            </p>

          </div>
        </div>


        <div className="col-lg-4 col-md-6 d-flex align-items-stretch team">
          <div className="member" >

            <div className="member-img">
              <img src={GP} className="img-fluid" alt=""/>
              <div className="social">

                <a href="https://www.linkedin.com/in/ghanashyam-patil-9b7280230" target="__blank"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="https://www.github.com/patil-gm" target="__blank"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>

            <div className="member-info">
              <h4>Ghanashyam Patil</h4>
              <p>Persuing My engineering degree in Computer Science. Have Good knowledge of Data Structures & 
                Algorithms , Competitive Programming, Web Devlopement & MERN stack</p>
            </div>

          </div>
        </div>


      </div>
    </div>
        </div>
    
    
    </div> 
  )
}

export default about