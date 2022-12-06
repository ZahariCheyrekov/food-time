import City from '../models/City.js';

export const createCity = (data) => {
    return City.create(data);
}