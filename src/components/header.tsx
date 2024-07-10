import logoStore from '../images/logo_store.jpg';
export default function Header() {

  return (
    <div className="site-navbar py-2">

      <div className="container">
        <div className="d-flex align-items-center justify-content-between">


          <div className="flex items-center text-center">
            
            <img
              src={logoStore}
              className="rounded-full "
              alt="logo"
            />
            <a href="/">Cosmo Life Saving Drugs Pvt. Ltd.</a>
          </div>


          <div className="main-nav d-none d-lg-block">
            <nav className="site-navigation text-right text-md-center" role="navigation">
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li className="active"><a href="/">Home</a></li>
                <li className="has-children">
                  <a href="#">Products</a>
                  <ul className="dropdown">
                    <li><a href="#">Supplements</a></li>
                    <li className="has-children">
                      <a href="#">Vitamins</a>
                      <ul className="dropdown">
                        <li><a href="#">Supplements</a></li>
                        <li><a href="#">Vitamins</a></li>
                        <li><a href="#">Diet &amp; Nutrition</a></li>
                        <li><a href="#">Tea &amp; Coffee</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Diet &amp; Nutrition</a></li>
                    <li><a href="#">Tea &amp; Coffee</a></li>

                  </ul>
                </li>
                <li><a href="/about-us">About</a></li>
                <li><a href="/contact-us">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="icons">
            <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
              className="icon-menu"></span></a>
          </div>
        </div>
      </div>
    </div>

  );
}
