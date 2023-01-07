
import React, {  useState } from 'react';
import { format } from 'date-fns';
import AppoinmentOption from '../AppoinmentOption/AppoinmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Components/Firebase/Loading/Loading';

const AvailableAppointments = ({ selected }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
const date=format(selected, 'PP')
const {data:appointmentOptions=[], refetch, isLoading}=useQuery({
    queryKey:['appoinmentOptions', date],
    queryFn:()=>fetch(`http://localhost:5000/appoinmentOptions?date=${date}`)
    .then(res => res.json())
})
if (isLoading) {
    <Loading></Loading>
}
    // useEffect(() => {
    //     fetch('http://localhost:5000/appoinmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, []);
    return (
        <section className="mt-32">
            <p className='text-center text-primary text-xl font-bold'>Available Appointment on:  {format(selected, 'PP')}</p>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  md:px-8'>
                {
                    appointmentOptions.map(option => <AppoinmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppoinmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                selectedDate={selected}
                    treatment={treatment}
                    refetch={refetch}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>

    );
};

export default AvailableAppointments;