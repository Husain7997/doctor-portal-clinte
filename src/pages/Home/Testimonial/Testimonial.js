import React from 'react';

const Testimonial = ({review}) => {
    const { name, description, icon, location } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
            </div>
            <div className="flex p-4 items-center">
                <figure><img className="rounded" src={icon} alt="Shoes" /></figure>
                <div className="pl-6">
                    <h4 className="card-title">{name}</h4>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;