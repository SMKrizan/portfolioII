import React, { useEffect } from 'react';

const Nav = (props) => {
    
    const { 
        categories = [],
        currentCategory,
        setCurrentCategory,
    } = props;

    
    return (
        <ul className='flex-row'>
            <li>
                <a href="#about" >About me</a>
            </li>
            <li>
                <a href="#projects">Featured Projects</a>
            </li>
            <li>
                <a href="#contact">Get in Touch</a>
            </li>
            <li>
                <a href="#resume">Resume</a>
            </li>
        </ul>

    )
}

export default Nav;