import { Typography } from "@mui/material";
import URL from "configs";
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
    fetch(`${URL}/feedbacks`, {
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
          <Typography variant="h3" color="secondary" gutterBottom>
            Contact us
          </Typography>
          <Typography variant="h5" color="whitesmoke">
            Never hesitate to contact{" "}
          </Typography>
          <Typography variant="caption" component="p" gutterBottom>
            feel free to ask me anything user my skills
          </Typography>
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
