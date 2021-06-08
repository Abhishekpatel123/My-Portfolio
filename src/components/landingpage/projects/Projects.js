import React from 'react'
import './Projects.css'

function Projects() {
    return (
        <div className="projects">
            <div className="container" >
                <section className="projects_content">
                    <h3 className="content_title">TOP PROJECTS
                    {" "}{" "}<span>to learn</span>
                    </h3>
                    <div className="projects_container">
                        <div className="projects_working">
                            <h4 className="status">Working  {" "}{" "}(03)</h4>
                            <div className="card_container">
                                {
                                    [1, 2, 3, 4].map(ele => (
                                        <div className="project_card">
                                            <img />
                                            <h5>chat bot</h5>
                                            <p>this is a chatbot which in made up of dialgflow and html css javacript nodejs and mongodb</p>
                                            <div className="tags">
                                                <button>Mern</button>
                                                <button>dialgflow</button>
                                                <button>graphql</button>
                                            </div>
                                            <div className="bottom">

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="projects_inprogress">
                            <h4 className="status">In progress</h4>
                            <div className="card_container">
                                {
                                    [1, 2, 3, 4].map(ele => (
                                        <div className="project_card">
                                            <img />
                                            <h5>chat bot</h5>
                                            <p>this is a chatbot which in made up of dialgflow and html css javacript nodejs and mongodb</p>
                                            <div className="tags">
                                                <button>Mern</button>
                                                <button>dialgflow</button>
                                                <button>graphql</button>
                                            </div>
                                            <div className="bottom">
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="projects_completed">
                            <h4 className="status">Completed</h4>
                            <div className="card_container">
                                {
                                    [1, 2, 3, 4].map(ele => (
                                        <div className="project_card">
                                            <img />
                                            <h5>chat bot</h5>
                                            <p>this is a chatbot which in made up of dialgflow and html css javacript nodejs and mongodb</p>
                                            <div className="tags">
                                                <button>Mern</button>
                                                <button>dialgflow</button>
                                                <button>graphql</button>
                                            </div>
                                            <div className="bottom">
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Projects
