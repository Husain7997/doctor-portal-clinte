import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/ContextProvider/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            selectedDate: date,
            treatment: treatment.name,
            patient: name,
            name,
            slot,
            phone,
            email

        }
        console.log(booking);
        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('booking confirmed')
                    refetch()
                }
                else{
                    toast.error(data.message)
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" readOnly placeholder={date} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            <option  ></option>
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName
                        } placeholder="Name" readOnly className="input input-bordered w-full max-w-xs" />
                        <input name='email' defaultValue={user?.email} readOnly type="email" placeholder="email" className="input input-bordered w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <br />
                        <input type="submit" value="Submit" className="btn w-full max-w-xs " />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;