import logoStore from '../images/logo_store.jpg';
import bg1 from '../images/bg_1.jpg';
import reviewBg from '../images/Bg-review.jpg'
export default function Header() {

  return (
    <div className="site-navbar py-2" style={{ backgroundImage: `url(${reviewBg})` }}>

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
                    <li><a href="#">Pharmaceutical Tablets</a></li>
                    <li><a href="#">Ayurvedic Pharmaceutical Syrup</a></li>
                    <li><a href="#">Pharma Pcd Franchise</a></li>
                    <li><a href="#">Pharmaceutical Capsules</a></li>
                    <li><a href="#">Pharmaceutical Injection</a></li>
                    <li><a href="#">Soft Gelatin Capsule</a></li>
                    <li><a href="#">Oral Suspensions</a></li>
                    <li><a href="#">Dry Syrup</a></li>
                    <li><a href="#">Eye Ear And Nasal Drops</a></li>
                    <li><a href="#">Pcd Pharma Franchise</a></li>
                    <li><a href="#">Pharmaceutical Tablet</a></li>
                    <li><a href="#">Ayurvedic Syrup</a></li>
                    <li><a href="#">Pharmaceutical Syrup</a></li>
                    <li><a href="#">Pharmaceutical Ointment</a></li>
                    <li><a href="#">Antibiotic Medicines</a></li>
                    <li><a href="#">Pharmaceutical Injectables</a></li>
                    <li><a href="#">Amoxycillin</a></li>
                    <li><a href="#">Pharmaceutical Injections</a></li>
                    <li><a href="#">Aqua Probiotics</a></li>
                    <li><a href="#">Tablets</a></li>
                    <li><a href="#">Montelukast Sodium</a></li>
                    <li><a href="#">Protein Powder & Energy</a></li>
                    <li><a href="#">Immunity Booster</a></li>
                    <li><a href="#">Eye Drops</a></li>
                    <li><a href="#">Ophthalmic Solutions</a></li>
                    <li><a href="#">Pharmaceutical Drops</a></li>

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
