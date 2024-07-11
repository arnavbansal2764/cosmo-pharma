import product1 from '../images/pharmatablet.png';
import product2 from '../images/ayurvedic-syrup.png';
import product3 from '../images/pcd-pharma.png';
import product4 from '../images/pharmacapsule.png';
import pharmainject from '../images/pharma-inject.jpg';
import gelatincapsule from '../images/gelatincapsule.jpg'
import oralsuspension from '../images/oral-suspension.jpg'
import drysyrup from '../images/drysyrup.jpg'
import pharmadrops from '../images/pharmadrops.jpg'
import opthalmicsol from '../images/opthalmicsol.jpg'
import eyedrops from '../images/eyedrops.jpg'
import immunitybooster from '../images/immunitybooster.jpg'
import proteinpow from '../images/proteinpow.jpg'
import montelakust from '../images/montelakust.jpg'
import tablets from '../images/tablets.jpg'
import aquapros from '../images/aquapros.jpg'
import pharmainjections from '../images/pharmainjections.jpg'
import amoxy from '../images/amoxy.jpg'
import pharmainjectable from '../images/pharmainjectable.jpg'
import antibioticsmedi from '../images/antibioticsmedi.jpg'
import pharmaointment from '../images/pharmaointment.jpg'
import pharmasyrup from '../images/pharmasyrup.jpg'
import ayurvedicsyrup from '../images/ayurvedicsyrup.jpg'
import pharmapcd from '../images/pcdpharma.jpg'
export default function Product() {

    return (
        <div className="site-wrap">
            <div className="bg-light py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-0"><a href="/">Home</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Store</strong></div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <div>
                                <img src={product1} alt="Image" className="p-4 rounded-xl w-full h-48" />
                            </div>
                            <h3 className="text-dark"><a href="/products">Pharmaceutical Tablets </a></h3>
                            <ul className='text-dark px-10 text-center mt-3'>
                                <li>Azithromycin 250mg Tablets</li>
                                <li>Paracetamol Tablets (dolo pack)</li>
                                <li>Ketorolac Tromethamine 10 Mg</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={product2} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Ayurvedic Pharmaceutical Syrup</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Ayurvedic Syrup For Kidney Stone</li>
                                <li>Multivitamins & Multiminerals With Antioxidants Syrup</li>
                                <li>Ambroxol Hcl Terbutaline Guaiphenesin Syrup</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={product3} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Pharma Pcd Franchise</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Levofloxacin 500 Mg</li>
                                <li>Ginseng Ginko Omega 3 Fatty Acid Vitamin Mineral</li>
                                <li>Azithromycin 100 Mg Suspension</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={product4} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Pharmaceutical Capsules</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Omeprazole Capsules Ip</li>
                                <li>Rabeprazole Sodium Domperidone Sr Capsules</li>
                                <li>Pantoprazole Domperidone Sr Capsules</li>
                            </ul>
                        </div>

                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={pharmainject} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Pharmaceutical Injection</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Ceftriaxone & Sulbactam 1.5gm Injection</li>
                                <li>Cefoperazone Sulbactam For Injection</li>
                                <li>Pantoprazole For Injection 40 Mg</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={gelatincapsule} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Soft Gelatin Capsule</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Diclofenac Diethylamine Linseed Oil Methyl Salicylate & Menthol Gel</li>
                                <li>Omega 3 Fatty Acid And Multivitamins Capsule</li>
                                <li>Calcium Citrate Malate Methylcobalamin Viatamin D3 Vitamin K2-7 Zinc Oxide & Magnesium Oxide</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={oralsuspension} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Oral Suspensions</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Ofloxacin Metronidazole Suspension</li>
                                <li>Paracetamol Phenylephrine Hydrochloride Chlorpheniramine Maleate Suspension</li>
                                <li>Aceclofenac Paracetamol Oral Suspension</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={drysyrup} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Dry Syrup</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Paracetamol Mefenamic Acid Suspension</li>
                                <li>Amoxycillin 200mg Clavulanic Acid 28.5mg</li>
                                <li>Amoxicillin 400 57 Clavulanate Potassium</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={eyedrops} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Eye Ear And Nasal Drops</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Sodium Carboxymethyl-Cellulose Ophthalmic Ear Drops</li>
                                <li>Moxifloxacin 0.5% Ketorolac 0.5% Eye Drops</li>
                                <li>Timolol Maleate Eye Drops</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={pharmapcd} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Pcd Pharma Franchise</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Cyproheptadine And Tricholine Citrate Syrup</li>
                                <li>Ayurvedic Liver Tonic Syrup</li>
                                <li>Fungal Diastase Pepsin Syrup</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={tablets} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Pharmaceutical Tablet</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Pre & Probiotic Capsule</li>
                                <li>Coszyme 3D Syrup</li>
                                <li>Cissus Quadrangularis</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={ayurvedicsyrup} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Ayurvedic Syrup</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Ayurvedic Kidney Stone Removal Syrup</li>
                                <li>Kidney Stone & UTI Infection Syrup</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={pharmasyrup} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Pharmaceutical Syrup</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Ayurvedic Syrup For Kidney Stone Syrup</li>
                                <li>Cefixime</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={pharmaointment} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Pharmaceutical Ointment</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Hydroquinone, Tretinoin & Mometasone Furoate Cream</li>
                                <li>Ofloxacin Ornidazole Itraconazole & Clobetasol Cream</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={antibioticsmedi} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Antibiotic Medicines</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Amoxicillin Clavulanate Lactobacillus</li>
                                <li>Cefpodoxime Tablet</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={pharmainjectable} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Pharmaceutical Injectables</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Ketorolac Tromethamine</li>
                                <li>Pharma Franchise</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={amoxy} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Amoxycillin</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Amox Clavu Tabs</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={pharmainjections} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Pharmaceutical Injections</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Cefoperazone Sulbactam Injection</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={aquapros} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Aqua Probiotics</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Casdic Aqua Injection</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={tablets} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Tablets</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Thysin Chymotrypsin Tablets</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={montelakust} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Montelukast Sodium</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Montelukast Sodium & Levocetirizine Tablets</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={proteinpow} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Protein Powder & Energy</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Dextrose Ascorbic Acid Instant Energy</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={immunitybooster} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Immunity Booster</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Ayurvedic Immunity Booster Syrup</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={eyedrops} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Eye Drops</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Moxifloxacin Ophthalmic Eye Drop</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className='row'>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={opthalmicsol} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Ophthalmic Solutions</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Carboxymethyl Cellulose Ophthalmic Solution</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 text-center item mb-4">
                            <a href="/products"><img src={pharmadrops} alt="Image" className='p-4 rounded-xl' /></a>
                            <h3 className="text-dark"><a href="/products">Pharmaceutical Drops</a></h3>
                            <ul className='text-dark px-10 mt-3 text-center py-2'>
                                <li>Cefpodoxime Proxetil Oral Suspension</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}