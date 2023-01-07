import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'

const MakeAnAppointment = () => {
    return (
        <section style={{ background: `url(${appointment})`,
        backgroundSize: "cover"
        }} className="hero mt-48 ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctor} alt='treatment' className="md:w-1/3 hidden md:block rounded-lg -mt-24" />
                <div className='md:ml-32 lg:w-1/2'>
                    <h4 className="text-xl py-4 font-bold text-info">Appointment</h4>
                    <h1 className="text-3xl font-bold text-white">Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="text-white font-bold btn btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default MakeAnAppointment;