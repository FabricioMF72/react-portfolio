import React from 'react'
import "./Experience.css"
const Experience = ({name, timelapse, description}) => {
    return (
        <div className="experience-content">
            <span className="section-title">{name}</span> <br/>
            <span className="experience-timelapse">{timelapse}</span> <br/>
            <span className="experience-description">{description}</span> <br/>
        </div>
    )
}

export default Experience

