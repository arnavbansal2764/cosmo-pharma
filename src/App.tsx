import Header from './components/header';
import Hero from './components/hero';
import PopularProducts from './components/popularproducts';
import Footer from './components/footer';
import Reviews from './components/reviews';
import ContactForm from './components/contactform';
function App() {

  return (
    <>
      <div className="site-wrap">

        <Header />

        <Hero />

        <PopularProducts />

        <Reviews/>
        
        <ContactForm/>
      <Footer/>
        
      </div>
    </>
  );
}

export default App;
