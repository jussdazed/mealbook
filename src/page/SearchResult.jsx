import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getMealByName} from "../api";

const SearchResult = () => {
    const {name} = useParams()
    const [meal, setMeal] = useState([])

    useEffect(() => {getMealByName(name).then(r => setMeal[r.meals])},[name])

    return (
        <div>

        </div>
    );
};

export default SearchResult;
