import logoStore from '../images/logo_store.jpg';
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
                  <a href="/products">Products</a>
                  <ul className="dropdown">
                    <li><a href="/products">Pharmaceutical Tablets</a></li>
                    <li><a href="/products">Ayurvedic Pharmaceutical Syrup</a></li>
                    <li><a href="/products">Pharma Pcd Franchise</a></li>
                    <li><a href="/products">Pharmaceutical Capsules</a></li>
                    <li><a href="/products">Pharmaceutical Injection</a></li>
                    <li><a href="/products">Soft Gelatin Capsule</a></li>
                    <li><a href="/products">Oral Suspensions</a></li>
                    <li><a href="/products">Dry Syrup</a></li>
                    <li><a href="/products">Eye Ear And Nasal Drops</a></li>
                    <li><a href="/products">Pcd Pharma Franchise</a></li>
                    <li><a href="/products">Pharmaceutical Tablet</a></li>
                    <li><a href="/products">Ayurvedic Syrup</a></li>
                    <li><a href="/products">Pharmaceutical Syrup</a></li>
                    <li><a href="/products">Pharmaceutical Ointment</a></li>
                    <li><a href="/products">Antibiotic Medicines</a></li>
                    <li><a href="/products">Pharmaceutical Injectables</a></li>
                    <li><a href="/products">Amoxycillin</a></li>
                    <li><a href="/products">Pharmaceutical Injections</a></li>
                    <li><a href="/products">Aqua Probiotics</a></li>
                    <li><a href="/products">Tablets</a></li>
                    <li><a href="/products">Montelukast Sodium</a></li>
                    <li><a href="/products">Protein Powder & Energy</a></li>
                    <li><a href="/products">Immunity Booster</a></li>
                    <li><a href="/products">Eye Drops</a></li>
                    <li><a href="/products">Ophthalmic Solutions</a></li>
                    <li><a href="/products">Pharmaceutical Drops</a></li>

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
