import City from '../models/City.js';


export const getCities = () => {
    return City.find();
}

export const createCity = (data) => {
    return City.create(data);
}