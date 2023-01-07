import React from 'react';

const InfoDoctorPortal = ({portalData}) => {
    const {name, description, icon, bgClass} = portalData;;
    return (
        <div className={`card card-side shadow-xl px-8 text-white ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                
            </div>
        </div>
    );
};

export default InfoDoctorPortal;