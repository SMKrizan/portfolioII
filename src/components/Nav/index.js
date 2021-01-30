import React, {useState} from 'react';

const Nav = (props) => {

  // initializes category state and uses 'useState()' hook to facilitate category change
  const [pages] = useState(['About', 'Projects', 'Contact', 'Resume']);

    return (
        <header>
            <ul>
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
            </ul>
            <h1>Hello!</h1>
            <h4>My name is Sara M. Krizan.</h4>
            <p>My profesional interests include helping teams find elegant solutions in software development and
                project management.</p>
        </header>
    )
}

export default Nav;