import React from 'react';
import './preloader.css'

const Preloader = () => {
    return (
        <div className='mx-auto'>
            <div className="lds-hourglass"></div>
        </div>
    );
};

export default Preloader;
