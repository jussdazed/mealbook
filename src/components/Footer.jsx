import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-red-400">
                <p className='items-center p-3'>© {new Date().getFullYear()} Copyright Text</p>
            </div>
        </div>
    );
};

export default Footer;
