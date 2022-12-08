import City from '../models/City.js';


export const getCity = (id) => {
    return City.findById(id);
}

export const getCities = () => {
    return City.find();
}

export const createCity = (data) => {
    return City.create(data);
}