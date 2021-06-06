import React from 'react'
import './Feedback.css'

function Feedback() {
    return (
        <div id="feedback">
            <div className="container">
                <div className="content">
                    <h3 className="content_title">Feedback
                    {" "}{" "}<span>to update</span>
                    </h3>

                    <form>
                        <div className="field_content">
                            <label for = "name" >Name</label>
                            <input
                                className="input"
                                type="text"
                                name="name"
                                placeholder="Enter your good name"
                            />
                        </div>
                        <div className="field_content">
                            <label for = "suggestion">Suggestion</label>
                            <textarea
                                name="suggestion"
                                placeholder="Enter your suggestion 👍"
                                className="input"
                            />
                        </div>
                        <button type = "submit" className = "feetback_btn">
                            Feed
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Feedback
