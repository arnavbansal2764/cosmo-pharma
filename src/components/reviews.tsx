import reviewBg from '../images/Bg-review.jpg'
import bg1 from '../images/bg_1.jpg';
import bg2 from '../images/bg_2.jpg';
import reviewstats from '../images/reviewstats.png'
import { Star } from 'lucide-react';
export default function Reviews() {
  return (
    
    <div className="site-section bg-secondary bg-image" style={{ backgroundImage: `url(${bg1})` }}>
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: `url(${bg2})` }}>
              <div className="banner-1-inner align-self-center">
                <h2>Ratings & Reviews</h2>
                <p>
                  Experience the quality service that everyone is talking about.
                </p>
                <img src={reviewstats}></img>
              </div>
            </a>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="row">
              <div className="col-md-6 mb-4">
                <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: `url(${reviewBg})` }}>
                  <div className="ml-auto align-self-center">
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <h4 className='text-black'>
                      Mohan
                      Warangal, Telangana
                    </h4>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mb-4">
                <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: `url(${reviewBg})` }}>
                  <div className="ml-auto align-self-center">
                  <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <h4 className='text-black'>Biswajit Mandal
                      Midnapore, West Bengal</h4>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mb-4">
                <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: `url(${reviewBg})` }}>
                  <div className="ml-auto align-self-center">
                  <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <h4 className='text-black'>DUSHYANT KUMAR
                      Monghyr, Bihar</h4>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mb-4">
                <a href="#" className="banner-1 h-100 d-flex" style={{ backgroundImage: `url(${reviewBg})` }}>
                  <div className="ml-auto align-self-center">
                  <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <h4 className='text-black'>Rajendra Fula Mahajan
                      Nashik, Maharashtra</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}