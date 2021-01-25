import axios from 'axios';
import {BASE_URL, COMPANY, STARLINK, NEXT_LAUNCH, ROCKETS} from './constants';


export const getInfo = () => axios.get(`${BASE_URL}${COMPANY}`);
export const getSatelites = () => axios.get(`${BASE_URL}${STARLINK}`);
export const getLaunch = () => axios.get(`${BASE_URL}${NEXT_LAUNCH}`);
export const getRockets = () => axios.get(`${BASE_URL}${ROCKETS}`);
    

