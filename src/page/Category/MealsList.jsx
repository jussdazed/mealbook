import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import {getCategoryByName} from "../../api";
import Preloader from "../../components/Preloader";
import MealsItem from "./MealsItem";

const MealsList = () => {
    let {name} = useParams()
    let {goBack} = useHistory()
    const [category, setCategory] = useState([])

    useEffect(()=>{
        getCategoryByName(name).then(r => {setCategory(r.meals)})
    },[name])

    return (<div className='flex-grow bg-gray-200'>

            <button
                className="absolute top-24 ml-3 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600"
                onClick={goBack}>
                Get back
            </button>
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
