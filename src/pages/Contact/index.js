import React from 'react';
import image from '../../utils';
import './index.css';

const { cameo } = image;

const Contact = () => {
    return (
        <section className='contact'>
            <img src={cameo} alt='cameo portrait of Sara Krizan' id='cameo' />
            <h1 className='contact'><span className='reg'>get </span>
                <span className='bold'>in <br/>Touch</span></h1>
            <address>
                <span id='location'>Madison</span>, Wisconsin<br />
                T: + <span id='phone'>1 608-622-0717<br /></span>
                E: <span id='email'>
                    <a href="mailto:smkrizan@gmail.com">SMKrizan@gmail.com</a></span>
            </address>
        </section>
    );
}

export default Contact;