import hero1 from '../images/hero_1.jpg';
import infra from '../images/infra.jpg';
import infrateam from '../images/infrateam.jpg';
export default function AboutUs() {
    return (
        <div className="site-wrap">
            <div className="site-blocks-cover inner-page" style={{ backgroundImage: `url(${hero1})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 mx-auto align-self-center">
                            <div className=" text-center">
                                <h1>About Us</h1>
                                <p className='text-justify text-gray-500'>A Young Entrepreneur Sahil Gupta having sound business knowledge and a glowing STAR in horizon of business while passing through a period of Corona Disease has decided to serve the Nation with a Quality Products of Pharma and supported by Women Miss Nishtha Gupta who both are the blood of a Renowned business man. Mr. Anil Gupta who is pioneer in the field of zinc oxide & non Ferrous oxide metal.

                                    The Name & STYLE of Pharma Co. is COSMO Life Saving Drugs Pvt Ltd based at Panchkula (Haryana).

                                    The company is manager by a Professional Executives having a sound knowledge of Pharma Products. Company motto is

                                    Doctor :- Convenience

                                    Patient :- Economy

                                    Company has long Vision is all segment in the consuming time & Shine like glowing STAR in the Horizon of Pharma.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table table-hover text-center table-border ">
                <thead>
                    <tr>
                        <th scope="col">Nature of Business</th>
                        <th scope="col">Manufacturer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Additional Business</th>
                        <td><ul>
                            Wholesaler
                            <hr />
                            Supplier
                            <hr />
                            Distributor
                        </ul></td>

                    </tr>
                    <tr>
                        <th scope="row">Company CEO</th>
                        <td>Nishtha Gupta</td>

                    </tr>
                    <tr>
                        <th scope="row">Registered Address</th>
                        <td>Plot 409 Industrial Area Phase 1, Panchkula, Panchkula- 134113, Haryana, India</td>

                    </tr>
                    <tr>
                        <th scope="row">Total Number of Employees</th>
                        <td>Upto 10 People</td>

                    </tr>
                    <tr>
                        <th scope="row">Year of Establishment</th>
                        <td>2021</td>

                    </tr>
                    <tr>
                        <th scope="row">Legal Status of Firm</th>
                        <td>Limited Company (Ltd./Pvt.Ltd.)</td>

                    </tr>
                    <tr>
                        <th scope="row">Annual Turnover</th>
                        <td>Rs. 1 - 2 Crore</td>

                    </tr>
                    <tr>
                        <th scope="row">Banker</th>
                        <td>HDFC Bank</td>

                    </tr>
                    <tr>
                        <th scope="row">GST Number</th>
                        <td>06AAJCC7077P1ZX</td>

                    </tr>
                    <tr>
                        <th scope="row">CIN Number</th>
                        <td>U24299HR2021PTC097127</td>

                    </tr>
                </tbody>
            </table>
            <div className="site-section bg-light custom-border-bottom" data-aos="fade">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <div className="block-16">
                                <figure>
                                    <img src={infra} alt="Image placeholder" className="img-fluid rounded " />
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">


                            <div className="site-section-heading pt-3 mb-4">
                                <h2 className="text-black">Our Infrastructure</h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo
                                exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat
                                asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.</p>
                            <p>Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam
                                cumque recusandae, laudantium minima repellendus.</p>

                        </div>
                    </div>
                </div>
            </div>



            <div className="site-section bg-light custom-border-bottom" data-aos="fade">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-6 order-md-2">
                            <div className="block-16">
                                <figure>
                                    <img src={infrateam} alt="Image placeholder" className="img-fluid rounded" />
                                </figure>
                            </div>
                        </div>
                        <div className="col-md-5 mr-auto">


                            <div className="site-section-heading pt-3 mb-4">
                                <h2 className="text-black">We Are Trusted Company</h2>
                            </div>
                            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo
                                exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat
                                asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.</p>
                            <p className="text-black">Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam
                                cumque recusandae, laudantium minima repellendus.</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section site-section-sm site-blocks-1 border-0" data-aos="fade">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-truck text-primary"></span>
                            </div>
                            <div className="text">
                                <h2>Free Shipping</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan
                                    tincidunt fringilla.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-refresh2 text-primary"></span>
                            </div>
                            <div className="text">
                                <h2>Free Returns</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan
                                    tincidunt fringilla.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon mr-4 align-self-start">
                                <span className="icon-help text-primary"></span>
                            </div>
                            <div className="text">
                                <h2>Customer Support</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan
                                    tincidunt fringilla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}