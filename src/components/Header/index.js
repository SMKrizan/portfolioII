import React, { useState } from 'react';
import Nav from '../Nav';

const Header = () => {
    // initializing category state and using 'useState()' hook to enable category change
    const [categories] = useState(['Projects', 'About', 'Contact']);

    // 1st parameter is value of state and 2nd is the 'setter' which allows state to change; passing initial state '0' to useState(); note that useState() always returns an array
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <section>
            <h1>Hello!</h1>
            <h4>My name is Sara M. Krizan.</h4>
            <p>I am interested in helping teams find elegant solutions in software development and
                project management.</p>
            <Nav
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            />
        </section>
    )
}

export default Header;