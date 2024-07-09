import person1 from './images/person_1.jpg';
import person2 from './images/person_2.jpg';
import person3 from './images/person_3.jpg';
import person4 from './images/person_4.jpg';
import bg1 from './images/bg_1.jpg';
import bg2 from './images/bg_2.jpg';
import Header from './components/header';
import Hero from './components/hero';
import PopularProducts from './components/popularproducts';
import Footer from './components/footer';
function App() {

  return (
    <>
      <div className="site-wrap">

        <Header />

        <Hero />

        <PopularProducts />

        

        <div className="site-section bg-secondary bg-image" style={{ backgroundImage: `url(${bg1})` }}>
          <div className="container">
            <div className="row align-items-stretch">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: `url(${bg2})` }}>
                  <div className="banner-1-inner align-self-center">
                    <h2>Pharma Products</h2>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae ex ad minus rem odio voluptatem.
                    </p>
                  </div>
                </a>
              </div>
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: `url(${person1})` }}>
                      <div className="banner-1-inner ml-auto align-self-center">
                        <h2>Rated by Experts</h2>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 mb-4">
                    <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: `url(${person2})` }}>
                      <div className="banner-1-inner ml-auto align-self-center">
                        <h2>Best Sellers</h2>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 mb-4">
                    <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: `url(${person3})` }}>
                      <div className="banner-1-inner ml-auto align-self-center">
                        <h2>Cosmetics</h2>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 mb-4">
                    <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: `url(${person4})` }}>
                      <div className="banner-1-inner ml-auto align-self-center">
                        <h2>Rated by Experts</h2>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
            <div className="row mb-5">
              <div className="col-12">
                <h2 className="site-section-heading text-center">Blog</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src={person1} alt="Image placeholder" className="img-fluid" />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">How to find good medicine</a></h3>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sit!</p>
                    <p className="text-primary font-weight-bold">Read More</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src={person2} alt="Image placeholder" className="img-fluid" />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">How to find good medicine</a></h3>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sit!</p>
                    <p className="text-primary font-weight-bold">Read More</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4">
                <div className="block-4 text-center">
                  <figure className="block-4-image">
                    <img src={person3} alt="Image placeholder" className="img-fluid" />
                  </figure>
                  <div className="block-4-text p-4">
                    <h3><a href="#">How to find good medicine</a></h3>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sit!</p>
                    <p className="text-primary font-weight-bold">Read More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
        
      </div>
    </>
  );
}

export default App;
