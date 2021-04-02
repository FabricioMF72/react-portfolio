import React from 'react'
import Skill from '../Skill/Skill'
import "./SkillList.css"
const SkillList = () => {
    return (
        <div className="skill-container">
            <span className="section-title">Skills</span>
            <Skill name="JavaScript" progress="80"/>
            <Skill name="React" progress="80"/>
            <Skill name="Redux" progress="75"/>
            <Skill name="Html" progress="90"/>
            <Skill name="Css" progress="80"/>
            <Skill name="NodeJs" progress="80"/>
            <Skill name="MongoDB" progress="90"/>
            <Skill name="MySql" progress="90"/>
            <Skill name="GraphQL" progress="80"/>
            <Skill name="Bootstrap" progress="90"/>
        </div>
    )
}

export default SkillList
