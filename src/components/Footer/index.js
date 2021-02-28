import React from 'react';
import Emoji from '../Emoji';
import './style.css';

const Footer = () => {
    return (
        <footer>
            <h5>
                <Emoji symbol='©' /> Copyright 2020 | Made with <Emoji label='heart' symbol='💗' /> & <Emoji symbol='☕' label='tea' /> by Sara Krizan
            </h5>
        </footer>
    )
}

export default Footer;