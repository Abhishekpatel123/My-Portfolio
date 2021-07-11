import React from 'react'
import './Contact.css'
import ContactIllustration from '../../../assets/images/contact'
function Contact() {
    return (
        <div name = "contact" className="contact">
            <div className="container contact_content" >
                <ContactIllustration width = "100%" height = "100%"  />
                {/* <div className="left"> */}
                {/* </div> */}
                <div className="right">
                    <h3 className="sub_heading my-12" >Contact us</h3>
                    <h1 className="heading my-12">Never hesitate to  contact </h1>
                    <p className="my-12">feel free to ask me anything user my skills</p>
                    <div className="form">
                        <input className="input" type="text" name="name" placeholder="Name" />
                        <input className="input" type="email" name="email" placeholder="Email" />
                        <textarea className="input" rows="10" name="message" placeholder="Message" />
                        <button className="feet_btn ">SUBMIT</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
