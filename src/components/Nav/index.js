import React, { useState } from "react";
import "./index.css";

const Nav = (props) => {
  // initializes category state and uses 'useState()' hook to facilitate category change
  const [pages] = useState(["Resume", "Projects", "Contact", "About"]);

  return (
    <header>
      <ol>
        {pages.map((page) => (
          <li key={page}>
            <a
              id={page}
              href={"#" + page}
              onClick={() => props.handlePageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ol>
    </header>
  );
};

export default Nav;
