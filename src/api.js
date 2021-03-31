import {API_URL} from './config'

const getCategories = async () => {
    const response = await fetch(API_URL + '/categories.php')
    return await response.json()
}

const getMealByName = async (name) =>{
    const response = await fetch(API_URL + '/search.php?s=' + name)
    return await response.json()
}

const getCategoryByName = async (name) =>{
    const response = await fetch(API_URL + '/filter.php?c=' + name)
    return await response.json()
}

const getMealById = async (id) =>{
    const response = await fetch(API_URL + '/lookup.php?i=' + id)
    return await response.json()
}

export {getCategories, getCategoryByName, getMealById, getMealByName}