import React from 'react';
import notfoundimg from '../../assets/images/404.jpg';

const PageNotFounde = () => {
    return (
        <div className="flex justify-center m-6">
            <img src={notfoundimg} alt="This Page Not Found" />
            
        </div>
        
    );
};

export default PageNotFounde;