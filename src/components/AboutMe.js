import React from "react";
import profilePic from "../assets/new-profile-pic.jpg"
import './AboutMe.css'

export default function AboutMe() {

    return (
        <div className="about">
            <h1>About Me</h1>
            <img src={profilePic} alt='profile pic' className='profilePic' />
            <div id="about-text">Full stack web developer with a focus on the MERN stack. Currently based in Minneapolis, MN. Willing to relocate. Ready to create engaging, impactful web apps and to use code as a problem solving tool to make the web accessible and user-centered.</div>
        </div >
    );

}