import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';
import Testimonial from './Testimonial';

const Testimonials = () => {

    const PeopleReview = [
        {
            id: 1,
            name: 'Nil Nil Nilanjona',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            icon: people1,
            location: 'Moulvibazar'
        },
        {
            id: 2,
            name: 'Tanni',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            icon: people2,
            location: 'sylhet'
        },
        {
            id: 3,
            name: 'Winson Herry',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            icon: people3,
            location: 'California'
            
        },
    ]
    return (
        <section className='mt-32  md:ml-10'>
            <div style={{ background: `url(${quote})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'right',
        backgroundSize:'15%'
        }}>
                <h4 className="text-xl py-4 font-bold text-info">Testimonial</h4>
                <h1 className="text-3xl font-bold ">What Our Patients Says</h1>
            </div>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:px-8'>
                {
                    PeopleReview.map(review => <Testimonial
                        key={review.id}
                        review={review}
                    ></Testimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;