import React from 'react'
import { Link } from 'react-router-dom';
import {arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className = "info-box">
        <p className = "font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className = "neo-brutalism-white neo-btn">
            {btnText}
            <img src = {arrow} className = "w-4 h-4 object-contain"/>
        </Link>
    </div>

)

const renderContent = {
    1: (
        <h1 className = "sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I'm <span className = "font-semibold">Yashika</span>🌟
            <br/>A <span className = "font-semibold">Computer Science</span> student from Toronto, Canada
        </h1>
    ),
    2: (
        <InfoBox 
            text = "Completed 2 Internships in Software Development and Automation Engineering👩‍💻"
            link = "/about"
            btnText = "Learn More"
        />
    ),
    3: (
        <InfoBox 
            text = "Building and Contributing to technically diverse projects along the way, check those out here🤓"
            link = "/projects"
            btnText = "View Projects"
        />
    ),
    4: (
        <InfoBox 
            text = "Want to know more about me? Feel free to reach out!☕"
            link = "/contact"
            btnText = "Let's Connect"
        />
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo