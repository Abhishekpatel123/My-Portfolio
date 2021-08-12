import React from 'react'
import './TextField.css'

function TextField({ label , placeholder }) {
    return (
        <div className ="textfield">
            <label>{label}</label>
            <input placeholder={placeholder} type="text" />
        </div>
    )
}

export default TextField
