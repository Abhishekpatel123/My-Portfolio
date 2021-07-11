import React from 'react'
import Heading from '../../utils/Heading/Heading'
import './Project.css'

function Project() {
    return (
        <div className="project">
            <div className="container content">
                <Heading heading="My Projects" />
                <div className="card_container">
                    {
                        [1, 2, 3, 4, 5].map(item => (
                            <div className="card">
                                <div className = "image_container">
                                    <img src="https://source.unsplash.com/WLUHO9A_xik/400x200" alt="project" />
                                </div>
                                <h2>Whatsapp clone</h2>
                                <div className="buttons">
                                    <button>LIVE</button>
                                    <button>GITHUB</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Project
