import React from 'react';
import Emoji from '../Emoji';

const Footer = () => {
    return (
        <footer>
            <h6>
                <Emoji symbol='©' /> Copyright 2020 | Made with <Emoji label='heart' symbol='💗' /> & <Emoji symbol='☕' label='tea' /> by Sara Krizan
            </h6>
        </footer>
    )
}

export default Footer;