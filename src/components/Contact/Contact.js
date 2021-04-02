import React from 'react';
import dotenv from "dotenv";
import emailjs from 'emailjs-com';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./Contact.css"
export default function Contact() {
    dotenv.config();

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm("service_7udsxzp", "template_h4zte4q", e.target, "user_NZxcclKSpk7jEh35xfIr3")
        .then((result) => {
            alert("Enviado");
        }, (error) => {
            alert("Error");
        });
        e.target.reset();
    }

  return (
    
    <Form onSubmit={sendEmail}>
        <Form.Group controlId="formBasicname">
            <Form.Control type="text" name="name" placeholder="Name"/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="text" name="subject" placeholder="Subject" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} name="message" placeholder="Write your message"/>
        </Form.Group>
        <Button variant="primary" type="submit">
            SEND MESSAGE
        </Button>
    </Form>
  );
}
