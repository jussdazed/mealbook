import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getCategoryByName} from "../../api";
import Preloader from "../Preloader";
import MealsItem from "./MealsItem";

const MealsList = () => {
    let {name} = useParams()
    const [category, setCategory] = useState([])

    useEffect(()=>{
        getCategoryByName(name).then(r => {setCategory(r.meals)})
    },[name])

    return (<div className='flex-grow bg-gray-200'>
        <h1 className='font-bold text-center pt-5 text-3xl'>{name}</h1>
        <div className='max-w-screen-xl grid grid-cols-auto-fit mx-auto gap-2 py-7'>

            {category.length ? category.map((el, index)=>(
                <MealsItem key={index} {...el}/>
            )): <Preloader/> }
        </div>
        </div>
    );
};

export default MealsList;
