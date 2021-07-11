import React from 'react'
import './Interest.css'
import Heading from '../../../utils/Heading/Heading'

function Interest() {
    return (
        <div name="interest" className="interest">
            <div className="container">
                <Heading heading="Development Interests" />
                <div className="interest_content">
                    <div className="item1 medium">
                        <h3>PROGRAMMING</h3>
                    </div>
                    <div className="item2 large">
                        <h3>Robotic</h3>
                    </div>
                    <div className="item3 medium">
                        <h3>INOVATION</h3>

                    </div>
                    <div className="item4 small">
                        <h3>SATTVIC FOOD</h3>
                    </div>
                    <div className="item5 tall">
                        <h3>RUNNING COMPANIES</h3>
                    </div>
                    <div className="item6 wide">

                        <h3>LEARNING</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interest
