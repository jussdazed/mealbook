import React from 'react';
import {Link} from "react-router-dom";
import Search from "./Search";


const Header = () => {
    return (
        <div className='bg-red-400'>
            <div className='flex flex-wrap justify-around py-5'>
                <Link to='/mealbook/'>
                    <h1 className='text-3xl font-bold'>Meals book</h1>
                </Link>
                <Search/>
            </div>
        </div>
    );
};

export default Header;
