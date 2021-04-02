import React from 'react'
import "./ProyectCard.css"
const ProyectCard = ({title, subtitle, img, demoUrl, gitHubUrl, description}) => {
    return (
            <div className="proyect-card">
                <div className="proyect-img">
                    <img src={img} alt={title}/>
                </div>
                <div className="content">
                    <div className="title">{title}</div>
                    <div className="sub-title">{subtitle}</div>
                    <p>{description}</p>
                </div>
                <div className="proyect-card-btn">
                    <a href={gitHubUrl} target="_blank" rel="noreferrer" className={gitHubUrl ? '' : 'disable'}>GitHub</a>
                    <a href={demoUrl} target="_blank" rel="noreferrer" className={demoUrl ? '' : 'disable'}>Demo</a>
                    
                </div>
               
            </div>
    )
}

export default ProyectCard
