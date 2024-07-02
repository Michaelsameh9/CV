import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarMenu from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import { BeatLoader } from 'react-spinners';



function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <>
      {
        loading ? (
          <div className='loader'>
            <BeatLoader
              color={"#627254"}
              loading={loading}
              size={75}
              aria-label="Loading Spinner"
              data-testid="loader"
            />

          </div>
        )


          : (
            <>
              <NavbarMenu/>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projact' element={<Project />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </BrowserRouter>
            <Footer />
            </>
          )}


    </>
  );
}

export default App;