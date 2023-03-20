import React from "react";
import profilePic from "../assets/new-profile-pic.jpg"
import './AboutMe.css'

export default function AboutMe() {

    return (
        <div className="about">
            <h1>About Me</h1>
            <img src={profilePic} alt='profile pic' className='profilePic' />
            <p>Full stack web developer with a focus on the MERN stack.</p>
            <p>Currently based in Minneapolis, MN.</p>
            <p> Ready to turn ideas into accessible and user-centered web apps.</p>
            <p>My collection of experiences across multiple industries allows me to bring a unique perspective to my work.</p>
            <p>I am driven to use code as a problem solving tool to create engaging and impactful web apps.</p>
        </div >
    );

}