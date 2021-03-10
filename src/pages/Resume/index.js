import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf';
import resPage from '../../utils';
import './index.css';

const { res } = resPage

const Resume = () => {
    const [ numPages, setNumPages ] = useState(null);
    const [ pageNumber, setPageNumber ] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    
    return (
        <div>
            <h1 className='resume'><span className='reg'>current</span><span className='bold'> Resume</span></h1>
            <div className='resume'>
            <div className='badge' id='pdf'>
                <a href="https://drive.google.com/file/d/1sQ9kBGvVXRuROj97ZTW61djTUFuxxBDt/view?usp=sharing"
                    target='_blank' rel="noreferrer">
                    <img id='pdf' src={res} 
                    alt='link to resume' />
                </a>
            </div>
            </div>
        </div>
    )
}

export default Resume;