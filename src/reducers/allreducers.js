import { combineReducers } from 'redux';
import weatherdata from './weather-reducer';

const allreducers = combineReducers({
    data: weatherdata
});

export default allreducers;