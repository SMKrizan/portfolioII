import React from 'react';
import images from '../../utils';

const { portrait, LIBug, GitHub, stack } = images

const About = () => {
    console.log('images: ', images)
    return (
        <section>
            <div id="portrait-me">
                <img src={portrait} alt="photographic portrait of Sara Krizan" />
            </div>
            <h3>About <span id='text'>Me</span></h3>
            <p>I am a full stack web developer and project manager with a decade of experience providing administrative support for legal, scientific, and not-for-profit businesses.</p>
            <div>
                <div className='badge' id='badge-li'>
                    <a href= "https://www.linkedin.com/in/smkrizan/" target='_blank' rel="noreferrer">
                        <img id='li'
                        src={LIBug}
                        alt= 'https://www.linkedin.com/in/smkrizan/' />
                    </a>
                </div>
            </div>
            <div>
                <div className='badge' id='badge-gh'>
                    <a href= "https://github.com/SMKrizan" target='_blank' rel="noreferrer">
                        <img id='gh'
                        src={GitHub}
                        alt= 'https://github.com/SMKrizan' />
                    </a>
                </div>
            </div>
            <div>
                <div className='badge' id='badge-so'>
                    <a href= "https://stackoverflow.com/users/14132348/smkrizan?tab=profile" target='_blank' rel="noreferrer">
                        <img id='so'
                        src={stack}
                        alt= 'https://stackoverflow.com/users/14132348/smkrizan?tab=profile' />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;