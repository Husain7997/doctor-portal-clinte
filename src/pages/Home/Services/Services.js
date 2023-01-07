import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const DoctorPortalServices = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
        },
        {
            id: 2,
            name: 'Cavity FillingCavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
        },
        {
            id: 3,
            name: 'Contact us now',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
        },
    ]

    return (
        <div className="my-32">
            <div>
                <h3 className="text-primary font-bold text-center text-xl">OUR SERVICES</h3>
                <h2 className="text-center text-3xl">Services We Provide</h2>
            </div>
            <div className="text-center mt-16 gap-8 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    DoctorPortalServices.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;