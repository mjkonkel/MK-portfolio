import resumePDF from '../assets/sample-resume.pdf'
import './Resume.css'

export default function Resume() {

    return (
        <div className="resume">
            <h1>Resume</h1>
            <a href={resumePDF} target="_blank" rel="noreferrer noopener"><button>Download my Resume</button></a>
            
            <h2>My Skills</h2>
            <ul>
                <p><b>Front-end:</b></p>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>responsive design</li>

                <p><b>Back-end:</b></p>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL and Sequelize</li>
                <li>MongoDB and Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    );

}