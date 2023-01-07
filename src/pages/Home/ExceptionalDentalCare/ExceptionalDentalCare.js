import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const ExceptionalDentalCare = () => {
    return (
        <section className="hero md:px-32 ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} alt='treatment' className="lg:w-1/3 rounded-lg shadow-2xl" />
                <div className='lg:ml-32 lg:w-1/3'>
                    <h1 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="text-white font-bold btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default ExceptionalDentalCare;