import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selected, setSelected] = useState (new Date());
    return (
        <div>
         <AppoinmentBanner
         selected={selected}
         setSelected={setSelected}
         ></AppoinmentBanner>
         <AvailableAppointments
         selected={selected}
         ></AvailableAppointments>
        </div>
    );
};

export default Appointment;