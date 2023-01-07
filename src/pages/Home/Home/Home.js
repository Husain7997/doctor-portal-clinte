import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import ExceptionalDentalCare from '../ExceptionalDentalCare/ExceptionalDentalCare';
import MakeAnAppointment from '../MakeAnAppointment/MakeAnAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonial/Testimonials';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Services></Services>
           <ExceptionalDentalCare></ExceptionalDentalCare>
           <MakeAnAppointment></MakeAnAppointment>
           <Testimonials></Testimonials>
           <ContactUs></ContactUs>
        </div>
    );
};

export default Home;