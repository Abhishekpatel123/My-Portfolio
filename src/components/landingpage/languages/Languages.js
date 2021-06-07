import React from 'react'
import languages from '../../../configs/languages'
import './Languages.css'

function Languages() {
    return (
        <div className="language">
            <div className="container">
                <section className="language_content">
                    <h3 className="content_title">TOP Languages
                    {" "}{" "}<span>to learn</span>
                    </h3>
                    <div className="card_container">
                        {
                            languages.map(lang => (
                                <div className="card">
                                    <div className="card_top">
                                        <img alt={lang.name} src={lang.img} />
                                        <h4
                                        className = "orange_text_h4"
                                        >{lang.name}</h4>
                                    </div>
                                    <p>{lang.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </section>


            </div>
        </div>
    )
}

export default Languages
