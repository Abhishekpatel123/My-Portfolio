import React from 'react'
import './Heading.css'

function Heading({ heading }) {
    return (
        <div className="heading">
            <h1>{heading}</h1>
        </div>
    )
}

export default Heading
