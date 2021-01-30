import React from 'react';
import resPage from '../../utils';

const { res } = resPage

const Resume = () => {
    return (
        <div>
            <div className='badge' id='badge-pdf'>
                <a href="https://drive.google.com/file/d/1sQ9kBGvVXRuROj97ZTW61djTUFuxxBDt/view?usp=sharing"
                    target='_blank' rel="noreferrer">
                    <img id='pdf' src={res} 
                    alt='link to resume' />
                </a>
            </div>
        </div>
    )
}

export default Resume;