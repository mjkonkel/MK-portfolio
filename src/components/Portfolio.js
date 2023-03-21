import React from "react";
import gitPic from "../assets/github-mark.png"
import './Portfolio.css'

export default function Portfolio() {

    return (
        <div>
            <h1 className="project-header">My Projects</h1>
            <div className="wrapper">


                <div className="project">
                    <div className="desc">
                        <h2>The Bird Spotter</h2>
                        <p>A web app used for searching recent sightings of birds in any area. Users can learn facts about the birds and add them to their list of birds they want to see.</p>
                        <p>Built with: jQuery, JavaScript, HTML, CSS, Tailwind, Leaflet, OpenStreetMap</p>
                    </div>
                    <a href='https://github.com/mjkonkel/bird-tracker' target="_blank" rel="noreferrer noopener">
                        <img className='gitPic' src={gitPic} alt='GitHub icon' />
                    </a>
                    <a href="https://mjkonkel.github.io/bird-tracker/" target="_blank" rel="noreferrer noopener">
                        <section>
                            <figure className="figure" id="figure-bird"></figure>
                        </section>
                    </a>
                </div>

                <div className="project">
                    <div className="desc">
                        <h2>Webblog</h2>
                        <p>A full stack app that uses the Model-View-Controller (MVC) framework. It is a tech blog where users can create and view posts about web development.</p>
                        <p>Built with: MySQL2, Express.js, Sequelize, dotenv, bcrypt, express-handlebars, Bootstrap, express-session</p>
                    </div>
                    <a href='https://github.com/mjkonkel/tech-blog' target="_blank" rel="noreferrer noopener">
                        <img className='gitPic' src={gitPic} alt='GitHub icon' />
                    </a>
                    <a href="https://techblogblog.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <section>
                            <figure className="figure" id="figure-blog"></figure>
                        </section>
                    </a>
                </div>

                <div className="project">
                    <div className="desc">
                        <h2>5-Day Forecast</h2>
                        <p>This app uses APIs from OpenWeatherMap to find the current weather conditions for cities. Users can search for a city and the app saves previous searches in local storage.</p>
                        <p>Built with: JavaScript, HTML, CSS, Bootstrap, OpenWeatherMap APIs</p>
                    </div>
                    <a href='https://github.com/mjkonkel/weather-forecast' target="_blank" rel="noreferrer noopener">
                        <img className='gitPic' src={gitPic} alt='GitHub icon' />
                    </a>
                    <a href="https://mjkonkel.github.io/weather-forecast/" target="_blank" rel="noreferrer noopener">
                        <section>
                            <figure className="figure" id="figure-weather"></figure>
                        </section>
                    </a>
                </div>

                <div className="project">
                    <h2>Work Day Scheduler</h2>
                    <a href='https://github.com/mjkonkel/work-day-scheduler' target="_blank" rel="noreferrer noopener">
                        <img className='gitPic' src={gitPic} alt='GitHub icon' />
                    </a>
                    <a href="https://mjkonkel.github.io/work-day-scheduler/" target="_blank" rel="noreferrer noopener">
                        <section>
                            <figure className="figure" id="figure-work"></figure>
                        </section>
                    </a>
                </div>

                <div className="project">
                    <h2>Just Another Text Editor</h2>
                    <a href='https://github.com/mjkonkel/jate-editor' target="_blank" rel="noreferrer noopener">
                        <img className='gitPic' src={gitPic} alt='GitHub icon' />
                    </a>
                    <a href="https://sleepy-bayou-08147.herokuapp.com/" target="_blank" rel="noreferrer noopener">
                        <section>
                            <figure className="figure" id="figure-jate"></figure>
                        </section>
                    </a>
                </div>

                <div className="project">
                    <h2>Password Generator</h2>
                    <a href='https://github.com/mjkonkel/password-gen' target="_blank" rel="noreferrer noopener">
                        <img className='gitPic' src={gitPic} alt='GitHub icon' target="_blank" rel="noreferrer noopener" />
                    </a>
                    <a href="https://mjkonkel.github.io/password-gen/" target="_blank" rel="noreferrer noopener">
                        <section>
                            <figure className="figure" id="figure-password"></figure>
                        </section>
                    </a>
                </div>

            </div>
        </div>

    )

}