
import hero1 from './images/hero_1.jpg';
import product1 from './images/product_01.png';
import product2 from './images/product_02.png';
import product3 from './images/product_03.png';
import product4 from './images/product_04.png';
import product5 from './images/product_05.png';
import product6 from './images/product_06.png';
import person1 from './images/person_1.jpg';
import person2 from './images/person_2.jpg';
import person3 from './images/person_3.jpg';
import person4 from './images/person_4.jpg';
import bg1 from './images/bg_1.jpg';
import bg2 from './images/bg_2.jpg';
import Header from './components/header';

function App() {
  return (
    <div className="site-wrap">
      <Header/>

      <div
        className="site-blocks-cover"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
              <div className="site-block-cover-content ">
                <h2 className="sub-title">
                  Effective Medicine, New Medicine Everyday
                </h2>
                <h1>Welcome To Cosmo Life Saving Drugs Private Limited</h1>
                <p>
                  <a href="#" className="btn btn-primary px-5 py-3">
                    Shop Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row align-items-stretch section-overlap">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="banner-wrap bg-primary h-100">
                <a href="#" className="h-100">
                  <h5>
                    Free <br /> Shipping
                  </h5>
                  <p>
                    Amet sit amet dolor
                    <strong>
                      Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </strong>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="banner-wrap h-100">
                <a href="#" className="h-100">
                  <h5>
                    Season <br /> Sale 50% Off
                  </h5>
                  <p>
                    Amet sit amet dolor
                    <strong>
                      Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </strong>
                  </p>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="banner-wrap bg-warning h-100">
                <a href="#" className="h-100">
                  <h5>
                    Buy <br /> A Gift Card
                  </h5>
                  <p>
                    Amet sit amet dolor
                    <strong>
                      Lorem, ipsum dolor sit amet consectetur adipisicing.
                    </strong>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="title-section text-center col-12">
              <h2 className="text-uppercase">Popular Products</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 col-lg-4 text-center item mb-4">
              <span className="tag">Sale</span>
              <a href="shop-single.html">
                {' '}
                <img src={product1} alt="Image" />
              </a>
              <h3 className="text-dark">
                <a href="shop-single.html">Bioderma</a>
              </h3>
              <p className="price">
                <del>95.00</del> &mdash; $55.00
              </p>
            </div>
            <div className="col-sm-6 col-lg-4 text-center item mb-4">
              <a href="shop-single.html">
                {' '}
                <img src={product2} alt="Image" />
              </a>
              <h3 className="text-dark">
                <a href="shop-single.html">Chanca Piedra</a>
              </h3>
              <p className="price">$70.00</p>
            </div>
            <div className="col-sm-6 col-lg-4 text-center item mb-4">
              <a href="shop-single.html">
                {' '}
                <img src={product3} alt="Image" />
              </a>
              <h3 className="text-dark">
                <a href="shop-single.html">Umcka Cold Care</a>
              </h3>
              <p className="price">$120.00</p>
            </div>

            <div className="col-sm-6 col-lg-4 text-center item mb-4">
              <a href="shop-single.html">
                {' '}
                <img src={product4} alt="Image" />
              </a>
              <h3 className="text-dark">
                <a href="shop-single.html">Cetyl Pure</a>
              </h3>
              <p className="price">
                <del>45.00</del> &mdash; $20.00
              </p>
            </div>
            <div className="col-sm-6 col-lg-4 text-center item mb-4">
              <a href="shop-single.html">
                {' '}
                <img src={product5} alt="Image" />
              </a>
              <h3 className="text-dark">
                <a href="shop-single.html">CLA Core</a>
              </h3>
              <p className="price">$38.00</p>
            </div>
            <div className="col-sm-6 col-lg-4 text-center item mb-4">
              <a href="shop-single.html">
                {' '}
                <img src={product6} alt="Image" />
              </a>
              <h3 className="text-dark">
                <a href="shop-single.html">Poo Pourri</a>
              </h3>
              <p className="price">$89.00</p>
            </div>
          </div>
        </div>
      </div>

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
              <h2 className="site-section-heading text-center">New Arrivals</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="#" className="block-5">
                <figure className="block-5-image">
                  <img src={product1} alt="" className="img-fluid" />
                </figure>
                <div className="block-5-text">
                  <h3 className="text-primary">Bioderma</h3>
                  <p className="price">$55.00</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="#" className="block-5">
                <figure className="block-5-image">
                  <img src={product2} alt="" className="img-fluid" />
                </figure>
                <div className="block-5-text">
                  <h3 className="text-primary">Chanca Piedra</h3>
                  <p className="price">$70.00</p>
                </div>
              </a>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <a href="#" className="block-5">
                <figure className="block-5-image">
                  <img src={product3} alt="" className="img-fluid" />
                </figure>
                <div className="block-5-text">
                  <h3 className="text-primary">Umcka Cold Care</h3>
                  <p className="price">$120.00</p>
                </div>
              </a>
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

      <footer className="site-footer border-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="footer-heading mb-4">Navigations</h3>
                </div>
                <div className="col-md-6 col-lg-4">
                  <ul className="list-unstyled">
                    <li><a href="#">Sell online</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Shopping cart</a></li>
                    <li><a href="#">Store builder</a></li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-4">
                  <ul className="list-unstyled">
                    <li><a href="#">Mobile commerce</a></li>
                    <li><a href="#">Dropshipping</a></li>
                    <li><a href="#">Website development</a></li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-4">
                  <ul className="list-unstyled">
                    <li><a href="#">Point of sale</a></li>
                    <li><a href="#">Hardware</a></li>
                    <li><a href="#">Software</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <h3 className="footer-heading mb-4">Promo</h3>
              <a href="#" className="block-6">
                <img src={product1} alt="Image placeholder" className="img-fluid rounded mb-4" />
                <h3 className="font-weight-light  mb-0">Finding Your Perfect Shoes</h3>
                <p>Promo from January 15 &mdash; 25, 2019</p>
              </a>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="block-5 mb-5">
                <h3 className="footer-heading mb-4">Contact Info</h3>
                <ul className="list-unstyled">
                  <li className="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
                  <li className="phone"><a href="tel://23923929210">+2 392 3929 210</a></li>
                  <li className="email">emailaddress@domain.com</li>
                </ul>
              </div>
              <div className="block-7">
                <form action="#" method="post">
                  <label htmlFor="email_subscribe" className="footer-heading">Subscribe</label>
                  <div className="form-group">
                    <input type="text" className="form-control py-4" id="email_subscribe" placeholder="Email"/>
                    <input type="submit" className="btn btn-sm btn-primary" value="Send"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <p>
                Copyright &copy;
                {new Date().getFullYear()}
                All rights reserved | This template is made with
                <i className="icon-heart" aria-hidden="true"></i> by
                <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
