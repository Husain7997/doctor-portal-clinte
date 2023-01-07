import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div style={{ background: `url(${appointment})`,
        backgroundSize: "cover"
        }} className="hero mt-32 text-white md:p-16">
                <div className="card flex-shrink-0 w-full max-w-sm ">
                <h4 className="text-xl py-4 font-bold text-info text-center">Contact Us</h4>
                    <h1 className="text-4xl  text-white text-center">Stay connected with us</h1>
                    <div className="card-body">
                    <input type="email" placeholder="email" className="input w-full max-w-xs" />
                    <input type="text" placeholder="subject" className="input w-full max-w-xs" />
                    <textarea height="136px" className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                        
                    <button className="text-white font-bold btn btn-primary bg-gradient-to-r from-primary to-secondary">Submit</button>
                    </div>
                </div>
        </div>
    );
};

export default ContactUs;