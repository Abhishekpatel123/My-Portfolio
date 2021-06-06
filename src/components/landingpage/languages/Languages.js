import React from 'react'
import languages from '../../../configs/languages'
import './Languages.css'

function Languages() {
    return (
        <div id="languages">
            <div className="container">
                <section className="content">
                    <h3 className = "content_title">TOP Languages
                    {" "}{" "}<span>to learn</span>
                    </h3>
                    <div className = "card_container">
                        {
                            languages.map(lang => (
                                <div className="lan_card">
                                    <img alt={lang.name} src={lang.img} />
                                    <div className="card_content">
                                        <h4>{lang.name}</h4>
                                        <p>{lang.title}</p>
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

export default Languages
