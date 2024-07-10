import ContactForm from "./contactform";
import Hero from "./hero";
import PopularProducts from "./popularproducts";
import Reviews from "./reviews";

export default function Home () {
    return(
        <>
        <Hero/>
        <PopularProducts/>
        <Reviews/>
        <ContactForm/>
        
        </>
    )
}