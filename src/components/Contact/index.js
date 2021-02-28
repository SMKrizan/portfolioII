import React from 'react';
import './index.css';

const Contact = () => {
    return (
        <section>
            <h1 data-testid='h1tag'>Get in Touch</h1>
            <address>
                <span id='location'>Madison</span>, Wisconsin<br />
                T: + <span id='phone'>1 608-622-0717<br /></span>
                E: <span id='email'><a href="mailto:smkrizan@gmail.com">SMKrizan@gmail.com</a></span>
            </address>
        </section>
    );
}

export default Contact;