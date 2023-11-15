import React, { useRef } from "react";
import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import emailjs from "@emailjs/browser";
// import styled from 'styled-components'
import "./contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ou84ovs",
        "template_m6l6s34",
        form.current,
        "ZTWWMMhqnKQS2VmB1"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contacts">
      <div className="heading">
        <h1>Contact</h1>
        <h2>
          <b>Get in touch</b>
        </h2>
      </div>
      <div className="continer">
        <div className="socials">
          <a href="https://www.linkedin.com/in/ashwini-mirajkar-b821b11b5">
            <AiOutlineLinkedin className="icon" />
          </a>
          <a href="mailto:ashw5532@gmail.com">
            <AiOutlineMail className="icon" />
          </a>
          <a href="https://wa.me/+916361799439">
            <AiOutlineWhatsApp className="icon" />
          </a>
        </div>
        <div className="form">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="email" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
