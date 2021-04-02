import React from 'react'
import Experience from '../Experience/Experience'
import "./ExperienceList.css"
import data from "../../data"
const ExperienceList = () => {
    return (
        <div className="experience-container">
            <span className="section-title">Experience</span> <br/>
            {data.experiences.map((experience) => (
                <Experience name={experience.name} timelapse={experience.timelapse} description={experience.description}  />
            ))}
        </div>
    )
}

export default ExperienceList

