import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from "react-router-dom";
import {getMealById} from "../api";
import Preloader from "../components/Preloader";

const MealDetails = () => {

    let {id} = useParams()
    let {goBack} = useHistory()

    const [meal, setMeal] = useState([])

    useEffect(() => {
        getMealById(id).then(r => {
            setMeal(r.meals[0])
        })
    }, [id])
    return (
        <>
            <div className="flex-grow bg-gray-200 flex items-center p-5 lg:p-10">
                <button
                    className="absolute top-24 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600"
                    onClick={goBack}>
                    Get back
                </button>
                {meal.idMeal ?
                    <div
                        className="w-full max-w-6xl rounded bg-white shadow-xl p-5 lg:p-10 mx-auto text-gray-800 relative md:text-left">
                        <div className="md:flex items-center -mx-10">
                            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                <div className="relative">
                                    <img src={meal.strMealThumb} className="w-full relative z-10" alt=""/>

                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-10">
                                <div className="mb-10">
                                    <h1 className="font-bold uppercase text-3xl mb-5 text-center">{meal.strMeal}</h1>
                                    <h2 className='font-medium text-xl mb-2'>{`Category: ${meal.strCategory}`}</h2>
                                    <h2 className='font-medium text-xl mb-4'>{`Country: ${meal.strArea}`}</h2>
                                    <p className="text-sm">{meal.strInstructions}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-xl p-5'>Video recipe:</h2>
                            <iframe src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`} width="400"
                                    height="250" frameborder="0"></iframe>

                        </div>
                    </div>
                    : <div className='max-w-screen-xl grid grid-cols-auto-fit mx-auto gap-2 py-7'><Preloader/></div>}
            </div>
        </>
    );
};

export default MealDetails;
