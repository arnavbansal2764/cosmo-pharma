import hero1 from '../images/hero_1.jpg';
export default function Hero() {
    return (
        <>
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
                                        Legal Status of Firm
                                    </h5>
                                    <p>
                                        Limited Company (Ltd./Pvt.Ltd.)
                                    </p>
                                    <h5>
                                        Annual Turnover
                                    </h5>
                                    <p>
                                        Rs. 1 - 2 Crore
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="banner-wrap h-100">
                                <a href="#" className="h-100">
                                    <h5>
                                        Total Number of Employees
                                    </h5>
                                    <p>
                                        Upto 10 People
                                    </p>
                                    <h5>
                                        Year of Establishment
                                    </h5>
                                    <p>
                                        2021
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                            <div className="banner-wrap bg-warning h-100">
                                <a href="#" className="h-100">
                                    <h5>
                                        GST Number
                                    </h5>
                                    <p>

                                        06AAJCC7077P1ZX

                                    </p>
                                    <h5>
                                        CIN Number
                                    </h5>
                                    <p>
                                        U24299HR2021PTC097127
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}