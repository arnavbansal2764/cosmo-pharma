import product1 from '../images/pharmatablet.png';
import product2 from '../images/ayurvedic-syrup.png';
import product3 from '../images/pcd-pharma.png';
import product4 from '../images/pharmacapsule.png';
export default function PopularProducts() {
  return (

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
            <a href="shop-single.html"> <img src={product1} alt="Image" className="p-4 rounded-xl" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Pharmaceutical Tablets </a></h3>
            <ul className='text-dark px-10 text-center mt-3'>
              <li>
                Azithromycin 250mg Tablets

              </li>
              <li>
                Paracetamol Tablets (dolo pack)

              </li>
              <li>
                Ketorolac Tromethamine 10 Mg

              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html"> <img src={product2} alt="Image" className='p-4 rounded-xl' /></a>
            <h3 className="text-dark"><a href="shop-single.html">Ayurvedic Pharmaceutical Syrup</a></h3>
            <ul className='text-dark px-10 mt-3 text-center py-2'>
              <li>
                Ayurvedic Syrup For Kidney Stone

              </li>
              <li>
                Multivitamins & Multiminerals With Antiocidants Syrup

              </li>
              <li>
                Ambroxol Hcl Terbutaline Guaiphenesin Syrup

              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html"> <img src={product3} alt="Image" className='p-4 rounded-xl' /></a>
            <h3 className="text-dark"><a href="shop-single.html">Pharma Pcd Franchise
            </a></h3>
            <ul className='text-dark px-10 mt-3 text-center py-2'>
              <li>
                Levofloxacin 500 Mg

              </li>
              <li>
                Ginseng Ginko Omega 3 Fatty Acid Vitamin Mineral

              </li>
              <li>
                Azithromycin 100 Mg Suspension

              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">

            <a href="shop-single.html"> <img src={product4} alt="Image" className='p-4 rounded-xl' /></a>
            <h3 className="text-dark"><a href="shop-single.html">Pharmaceutical Capsules</a></h3>
            <ul className='text-dark px-10 mt-3 text-center py-2'>
              <li>
                Omeprazole Capsules Ip

              </li>
              <li>
                Rabeprazole Sodium Domperidone Sr Capsules

              </li>
              <li>
                Pantoprazole Domperidone Sr Capsules

              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <a href="shop.html" className="btn btn-primary px-4 py-3">View All Products</a>
          </div>
        </div>
      </div>
    </div>
  )
}