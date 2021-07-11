import React, { useEffect } from 'react'
import FeedbackIllustration from '../src/assets/FeedbackIllustration'
import './Feedback.css'

function Feedback() {

    useEffect(() => {
        const progressItems = document.querySelectorAll('.progressItem');
        const progressItem = document.querySelector('.progressItem');
        progressItem.addEventListener('hover', function () {
            console.log('hovered ')
        })
    }, [])
    return (
        <div name="feedback" className="feedback">
            <div className="container">
                <h3 className="content_title">Feedback<span>to update</span>
                </h3>
                <div className="feedback_content">

                    <div className="feedbackIllustration">
                        <FeedbackIllustration
                            width="70%"
                            height="70%"
                            color="orange"
                        />
                    </div>
                    <form className="feedback_form">
                        <div className="field_content">
                            <label for="name" >Name</label>
                            <input
                                className="input"
                                type="text"
                                name="name"
                                placeholder="Enter your good name"
                            />
                        </div>

                        <div className="field_content">
                            <label for="rate">Rate it</label>
                            <div className="progress">
                                <div className="progressItem">33%</div>
                            </div>
                        </div>

                        <div className="field_content">
                            <label for="suggestion">Suggestion</label>
                            <textarea
                                id="suggesstion "
                                name="suggestion"
                                placeholder="Please then us your region for giving this score hrer 👍"
                                className="input"
                                rows={10}
                            />
                        </div>
                        <button type="submit" className="feetback_btn">
                            SEND FEEDBACK
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Feedback
