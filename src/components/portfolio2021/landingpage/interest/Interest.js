import React from 'react'
import './Interest.css'
import Heading from '../../../../utils/Heading/Heading'
import staticData from '../../../../data/staticData';

function Interest() {
    return (
        <div name="interest" className="interest">
            <div className="container">
                <Heading heading={staticData.interest.heading} />
                <div className="interest_content">
                    <div className="item1 medium">
                        <h3>{staticData.interest.medium[0]}</h3>
                    </div>
                    <div className="item2 large">
                        <h3>{staticData.interest.large}</h3>
                    </div>
                    <div className="item3 medium">
                        <h3>{staticData.interest.medium[1]}</h3>

                    </div>
                    <div className="item4 small">
                        <h3>{staticData.interest.small}</h3>
                    </div>
                    <div className="item5 tall">
                        <h3>{staticData.interest.tall}</h3>
                    </div>
                    <div className="item6 wide">
                        <h3>{staticData.interest.wide}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interest
