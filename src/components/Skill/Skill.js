import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
const Skill = ({name,progress}) => {
    return (
        <div className="skill-content">
            <span>{name}</span>
            <ProgressBar now={progress} />
        </div>
    )
}

export default Skill
