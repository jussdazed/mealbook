import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import { getMealByName} from "../../api";
import Preloader from "../../components/Preloader";
import SearchResultItem from "./SearchResultItem";

const SearchResult = () => {
    let {name} = useParams()
    let {goBack} = useHistory()
    const [search, setSearch] = useState([])

    useEffect(()=>{
        getMealByName(name).then(r => {setSearch(r.meals)})
    },[name])

    return (<div className='flex-grow bg-gray-200'>

            <button
                className="absolute top-24 ml-3 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-green-500 rounded shadow ripple hover:shadow-lg hover:bg-green-600"
                onClick={goBack}>
                Get back
            </button>
            <h1 className='font-bold text-center pt-5 text-3xl'>{name}</h1>
            <div className='max-w-screen-xl grid grid-cols-auto-fit mx-auto gap-2 py-7'>

                {search.length ? search.map((el, index)=>(
                    <SearchResultItem key={index} {...el}/>
                )): <Preloader/> }
            </div>
        </div>
    );
};

export default SearchResult;
