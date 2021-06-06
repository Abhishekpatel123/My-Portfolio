import React from 'react'
import AppDevelopment from '../../../assets/AppDevelopment'
import skills from '../../../configs/skills'
import './Skills.css'

function Skills() {
    return (
        <div id="skills">
            <div className="container">
                <section className="content">
                    <h3 className="content_title">TOP SKILLS
                    {" "}{" "}<span>to learn</span>
                    </h3>
                    <div className="card_container">
                        {
                            skills.map(({
                                id, SVG, name, title
                            }) => (
                                <div key={id} className="skill_card">
                                    <div>
                                        {SVG}
                                        <h4>{name}</h4>
                                    </div>
                                    <div className="card_content">
                                        <p >{title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Skills
