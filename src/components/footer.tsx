export default function Footer (){
    return(
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
              
              <div className="col-md-6 col-lg-3">
                <div className="block-5 mb-5">
                  <h3 className="footer-heading mb-4">Contact Info</h3>
                  <ul className="list-unstyled">
                    <li className="address">Cosmo Life Saving Drugs Private Limited
                    Plot 62, Budhanpur, Panchkula - 134113, Haryana, India</li>
                    <li className="phone"><a href="tel://23923929210">+91 08047310007</a></li>
                   
                  </ul>
                </div>
                
              </div>
            </div>
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <p>
                  Copyright &copy;
                  {new Date().getFullYear()} 
                   All rights reserved | This template is made by
                  <a href="https://www.linkedin.com/in/arnav-bansal-5716b9220/" target="_blank" rel="noopener noreferrer"> Arnav Bansal</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
    )
}