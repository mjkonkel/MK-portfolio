// import { useState } from 'react';
import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
// import Resume from './components/Resume';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/*"
            element={<AboutMe />}
          />
          <Route
            path="/about"
            element={<AboutMe />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />
          {/* <Route
            path="/resume"
            element={<Resume />}
          /> */}
        </Routes>
        <Footer />
      </div>

    </HashRouter>
  )
}


// function App() {
//   const [currentPage, setCurrentPage] = useState('About');

//   console.log(currentPage);
//   function renderPage() {
//     if (currentPage === 'About') {
//       return <AboutMe />
//     } else if (currentPage === 'Contact') {
//       return <Contact />
//     } else if (currentPage === 'Portfolio') {
//       return <Portfolio />
//     } else {
//       return <Resume />
//     }
//   }
//   return (
//     <div className="App">
//       <div className="content-container">
//         <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage}/>
//         {renderPage()}
//       </div>
//       <footer className="footer--pin">
//         <Footer />
//       </footer>
//     </div>
//   );
// }

export default App
