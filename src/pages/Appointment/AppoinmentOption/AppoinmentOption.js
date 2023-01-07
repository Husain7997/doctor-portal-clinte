import React from 'react';

const AppoinmentOption = ({ option, setTreatment }) => {
    const { slots, name } = option;
    return (
        <div className="card bg-base-100 shadow-xl p-6">
            <div className="card-body text-secondary text-center">
                <h2 className="text-center text-2xl font-bold">{name}</h2>
                <p>{slots.length >0? slots[0]:'tray another day'}</p>
                              
                <div className="card-actions justify-center">
                
                <label onClick={()=>setTreatment(option)} htmlFor="booking-modal" className="btn text-white font-bold btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</label>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;