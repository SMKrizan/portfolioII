import React, { useState } from 'react';
import './index.css';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {

  // 1st parameter is value of state and 2nd is the 'setter' which allows state to change; passing initial state '0' to useState(); note that useState() always returns an array
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Projects':
        return <Projects />;
      case 'Contact':
        return <Contact />
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Nav
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main>
      <div>{renderPage(currentPage)}</div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
