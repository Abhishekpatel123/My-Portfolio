import React, { useState } from "react";
import "./Contact.css";
function Contact() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setInput((pre) => ({ ...pre, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    const URL = "http://localhost:1337/feedbacks";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((result) => {
        console.log(result, "result");
        alert("Succesfully submitted feedback.");
      })
      .catch((err) => console.log(err, "err"));
  };

  return (
    <div name="contact" className="contact">
      <div className="container contact_content">
        <div className="right">
          <h3 className="sub_heading my-12">Contact us</h3>
          <h1 className="heading my-12">Never hesitate to contact </h1>
          <p className="my-12">feel free to ask me anything user my skills</p>
          <div className="form">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              className="input"
              rows="10"
              name="message"
              placeholder="Message"
              onChange={handleChange}
            />
            <button onClick={handleSubmit} className="feet_btn ">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
