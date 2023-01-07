import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import bgHeader from '../../../assets/images/bg.png';


import { DayPicker } from 'react-day-picker';


const AppoinmentBanner = ({selected, setSelected}) => {
    
    return (
        <div style={{
            background: `url(${bgHeader})`,
            backgroundSize: "cover"
        }} className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse py-40">
                <img src={chair} alt='doctor chiar' className="md:w-1/2 rounded-lg shadow-2xl" />
                <div className='md:px-12'>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;