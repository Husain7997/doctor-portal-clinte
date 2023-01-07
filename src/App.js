
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router.js/Router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="mx-auto max-w-[1440px]">
     <RouterProvider router={router}>

     </RouterProvider>
     <Toaster />
    </div>
  );
}

export default App;
