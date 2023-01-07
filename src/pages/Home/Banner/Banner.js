import React from 'react';
import bgHeader from '../../../assets/images/bg.png';
import chair from '../../../assets/images/chair.png';
import InfoDoctorPortal from '../InfoDoctorPortal/InfoDoctorPortal';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Banner = () => {
const InfoDoctorPortalDatas=[
    {
        id:1,
        name: 'Opening Hours',
        description: 'Lorem Ipsum is simply dummy text of the pri',
        icon:clock,
        bgClass: 'bg-primary'
    },
    {
        id:2,
        name: 'Visit our location',
        description: 'Brooklyn, NY 10036, United States',
        icon:marker,
        bgClass: 'bg-accent'
    },
    {
        id:3,
        name: 'Contact us now',
        description: '+000 123 456789',
        icon:phone,
        bgClass: 'bg-primary'
    },
]

    return (
        <div style={{ background: `url(${bgHeader})`,
        backgroundSize: "cover"
        }}>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse py-40">
                    <img src={chair} alt='doctor chiar' className="md:w-1/2 rounded-lg shadow-2xl" />
                    <div className='px-6'>
                        <h1 className="text-4xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="text-white font-bold btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-3 px-8'>
                {
                  InfoDoctorPortalDatas.map(portalData=><InfoDoctorPortal
                  key={portalData.id}
                  portalData={portalData}
                  ></InfoDoctorPortal>)  
                }

            </div>
        </div>
    );
};

export default Banner;