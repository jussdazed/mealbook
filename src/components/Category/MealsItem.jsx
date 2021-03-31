import React from 'react';
import {Link} from "react-router-dom";

const MealsItem = (props) => {
    const {strMeal, strMealThumb, idMeal} = props
    return (
        <>
            <Link to={`/category:${idMeal}`}>
            <div className="lg:m-4 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
                <img src={strMealThumb} alt="" className="overflow-hidden"/>
                <div className="p-4">
                    <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">{strMeal}</h3>
                </div>
            </div>
            </Link>

        </>
    );
};

export default MealsItem;
