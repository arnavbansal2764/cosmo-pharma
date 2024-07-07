// import { useState } from 'react';
import logoStore from '../images/logo_store.jpg';
// import { Menu } from 'lucide-react';

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // <div className="site-navbar py-2">
    //   <div className="container">
    //     <div className="d-flex align-items-center justify-content-between">
    //       <div>
    //         <div className="flex items-center">
    //           <img
    //             src={logoStore}
    //             className="h-4 w-4 rounded-full lg:mr-3"
    //             alt="logo"
    //           />
    //           <a href="/">Cosmo Life Saving Drugs Private Limited</a>
    //         </div>
    //       </div>
    //       <div className="main-nav hidden lg:block">
    //         <nav className="site-navigation text-right text-md-center" role="navigation">
    //           <ul className="site-menu js-clone-nav d-none d-lg-block">
    //             <li className="has-children">
    //               <a href="#">Products</a>
    //               <ul className="dropdown">
    //                 <li>
    //                   <a href="#">Supplements</a>
    //                 </li>
    //                 <li className="has-children">
    //                   <a href="#">Vitamins</a>
    //                   <ul className="dropdown">
    //                     <li>
    //                       <a href="#">Supplements</a>
    //                     </li>
    //                     <li>
    //                       <a href="#">Vitamins</a>
    //                     </li>
    //                     <li>
    //                       <a href="#">Diet &amp; Nutrition</a>
    //                     </li>
    //                     <li>
    //                       <a href="#">Tea &amp; Coffee</a>
    //                     </li>
    //                   </ul>
    //                 </li>
    //                 <li>
    //                   <a href="#">Diet &amp; Nutrition</a>
    //                 </li>
    //                 <li>
    //                   <a href="#">Tea &amp; Coffee</a>
    //                 </li>
    //               </ul>
    //             </li>
    //             <li>
    //               <a href="about.html">About</a>
    //             </li>
    //             <li>
    //               <a href="contact.html">Contact</a>
    //             </li>
    //           </ul>
    //         </nav>
    //       </div>
    //       <div className="">
    //         <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700" />
    //       </div>
    //     </div>
    //   </div>
    //   {isMenuOpen && (
    //     <div className="lg:hidden">
    //       <nav className="site-navigation text-center" role="navigation">
    //         <ul className="site-menu js-clone-nav">
    //           <li className="has-children">
    //             <a href="#">Products</a>
    //             <ul className="dropdown">
    //               <li>
    //                 <a href="#">Supplements</a>
    //               </li>
    //               <li className="has-children">
    //                 <a href="#">Vitamins</a>
    //                 <ul className="dropdown">
    //                   <li>
    //                     <a href="#">Supplements</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Vitamins</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Diet &amp; Nutrition</a>
    //                   </li>
    //                   <li>
    //                     <a href="#">Tea &amp; Coffee</a>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li>
    //                 <a href="#">Diet &amp; Nutrition</a>
    //               </li>
    //               <li>
    //                 <a href="#">Tea &amp; Coffee</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a href="about.html">About</a>
    //           </li>
    //           <li>
    //             <a href="contact.html">Contact</a>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //   )}
    // </div>
    <div className="site-navbar py-2">

      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="site-logo">
            <div className="flex items-center">
              <img
                src={logoStore}
                className="h-4 w-4 rounded-full lg:mr-3"
                alt="logo"
              />
              <a href="/">Cosmo Life Saving Drugs Private Limited</a>
            </div>
            </div>
          </div>
          <div className="main-nav d-none d-lg-block">
            <nav className="site-navigation text-right text-md-center" role="navigation">
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li className="active"><a href="index.html">Home</a></li>
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
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
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
