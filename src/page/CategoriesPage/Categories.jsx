import React, {useEffect, useState} from 'react';
import {getCategories} from "../../api";
import Preloader from "../../components/Preloader";
import CategoryItem from "./CategoryItem";


const Categories = () => {

    const [categoriesList, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCategories().then(r => {
            setCategories(r.categories)
            setLoading(false)
        })
    }, [])

    return (

        <div className='flex-grow bg-gray-200'>
            <h1 className='font-bold text-center pt-5 text-3xl'>Categories</h1>
            <div className='max-w-screen-xl grid grid-cols-auto-fit mx-auto gap-2 py-7'>
                {loading ? <Preloader/> : categoriesList.map((meal, index) => (
                    <CategoryItem key={index} {...meal}/>)
                )}
            </div>
        </div>
    );
};

export default Categories;
