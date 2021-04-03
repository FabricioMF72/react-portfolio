import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { FiGithub } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-social">
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/fabricio_mflores/">
                        <FiInstagram/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/FabricioMF72">
                        <FiGithub/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fabricio-murillo-flores-4352a4126/">
                        <FiLinkedin/>
                    </a>
            </div>
            <div className="footer-text">
                Copyright © 2021 Fabricio Murillo Flores.
            </div>
        </div>
    )
}

export default Footer
