import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/header';
import Loading from './components/loading';
import Home from './components/home';
import Footer from './components/footer';
import AboutUs from './components/aboutus';
import ContactForm from './components/contactform';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (

    <div className="site-wrap">
      <BrowserRouter>
        <Header />
        <div className='flex-1'>
          {isLoading ? (
            <Loading />
          ) : (
            <div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/contact-us' element={<ContactForm/>}/>
              </Routes>
              <Footer />
            </div>
          )}
        </div>
      </BrowserRouter>

    </div>

  );
}

export default App;
