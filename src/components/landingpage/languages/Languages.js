import React, { useEffect } from 'react'
import languages from '../../../configs/languages'
import Heading from '../../../utils/Heading/Heading'
import './Languages.css'

function Languages() {
    const observe = new IntersectionObserver((entries, observe) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return true
            }
            console.log(entry.target, 'card')
            entry.target.classList.toggle('fade-in')
            observe.unobserve(entry.target)
        })
    }, {})
    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            observe.observe(card)
        })
    }, [])

    return (
        <div name="language" className="language">
            <div className="container">
                <Heading heading="Skills" />
                <section className="language_content">
                    <h3 className="content_title">Profesional Skills
                        {" "}{" "}<span>I've worked with the following technologies.</span>
                    </h3>
                    <div className="card_container">
                        {
                            languages.map(lang => (
                                <div className="lang_outer_card" key={lang.id}>

                                    <div className="lan_inner_card">
                                        <div className="card_front card" >
                                            <h1>{lang.name1}</h1>
                                        </div>

                                        <div className="card_back card" >
                                            <h1>{lang.name2}</h1>
                                        </div>
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

// {/* <div className="card">
//                                     <div className="card_top">
//                                         <img alt={lang.name} src={lang.img} />
//                                         <h4
//                                             className="orange_text_h4"
//                                         >{lang.name}</h4>
//                                     </div>
//                                     <p>{lang.title}</p>
//                                 </div> */}