import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/Main/DashboardLayout";
import Main from "../../Layout/Main/Main"
import Appointment from "../../pages/Appointment/Appointment/Appointment";
// import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import MyAppointments from "../../pages/Dashboard/MyAppointment/MyAppointments";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import PageNotFounde from "../../pages/PageNotFounde/PageNotFounde";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/*',
                element: <PageNotFounde></PageNotFounde>
            },

        ]
    },
    {
path:'/dashboard',
element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
children:[
{
    path:'/dashboard',
element: <MyAppointments></MyAppointments>
}
]
    }
])
export default router;