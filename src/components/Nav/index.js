import React, { useState } from 'react';
import './index.css';

const Nav = (props) => {

    // initializes category state and uses 'useState()' hook to facilitate category change
    const [pages] = useState(['Projects', 'Contact', 'Resume', 'About']);

    return (
        <header>
            <ol>
                {pages.map(page => (
                    <li key={page}>
                        <a
                            href={"#" + page}
                            onClick={() => props.handlePageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ol>
            <h1>Hello!</h1>
            <h4>My name is Sara.</h4>
            <p>My professional interests include helping teams find elegant solutions in software development and
                project management.</p>
        </header>
    )
}

export default Nav;