import React from 'react';
import {Link} from "react-router-dom";

const CategoryItem = (props) => {
    const { strCategory, strCategoryThumb, strCategoryDescription} = props
    return (
        <div>

            <div className="lg:m-3 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white">
                <img src={strCategoryThumb} alt="" className="overflow-hidden"/>
                <div className="p-4">
                    <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">{strCategory}</h3>
                    <p className="text-justify">{strCategoryDescription.slice(0,60)}...</p>
                    <div className="mt-5 text-center">
                        <Link to={`/category/${strCategory}`}
                           className="hover:bg-gray-700 rounded-full py-2 px-3 font-semibold hover:text-white bg-gray-400 text-gray-100">Read
                            More</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryItem;
