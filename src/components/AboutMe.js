import React from "react";
import profilePic from "../assets/new-profile-pic.jpg"
import './AboutMe.css'

export default function AboutMe() {

    return (
        <div className="about">
            <h1>About Me</h1>
            <img src={profilePic} alt='profile pic' className='profilePic' />
            <div class="about-text">After college, I was passionate about sustainable agriculture and envisioned myself on the forefront of a revolution in changing how we eat. I started by working at various urban farms, but found I wanted a more technical challenge. This eventually led me to coding, which allows me to think creatively and work with passionate colleagues to solve complex problems. Nonetheless, I believe my past experiences continue to inform the work I do every day with web development. My drive to make positive change and collaborate with a community of innovative thinkers and problem solvers remains. With coding, I look forward to being challenged every day knowing there is always something new to learn.</div>
            <div class="about-text">Full stack web developer with a focus on the MERN stack. Currently based in Minneapolis, MN. Willing to relocate.</div>
        </div >
    );

}