// Kevin is recommending 'styled-components' with 'react-icons' for basic components with max customization
import React, { useState } from 'react';

import './index.css';

import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Home from './pages/Home';

import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  // 1st parameter is value of state and 2nd is the 'setter' which allows state to change; passing initial state '0' to useState(); note that useState() always returns an array
  const [currentPage, handlePageChange] = useState('/');
  // this is used to differentially render content; on small screens the content is accessed by clicking on the navbar elements, on larger screens the content is layed out on one single, long page so that it can be accessed via scrolling OR by navigating with the navbar links.
  const wideScreen = window.innerWidth > 875;
  
  const renderPage = () => {
    switch (currentPage) {
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />
      case 'Resume':
        return <Resume />;
      case 'About':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div id='app'>
      <Nav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main>
        {!wideScreen ? (
          <div>{renderPage(currentPage)}</div>
        ) : (
          <div>
          <Home></Home>
          <About></About>
          <Projects></Projects>
          <Resume></Resume>
          <Contact></Contact>
        </div>  
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}


export default App;
