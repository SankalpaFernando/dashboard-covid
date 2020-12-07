import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';

const SET_DATA="SET_DATA";
const SET_COUNTRIES="SET_COUNTRIES"
const SET_SELECTED_COUNTRY="SET_SELECTED_COUNTRY"
const SET_LOADING="SET_LOADING"
const SET_HISTORICAL_DATA="SET_HISTORICAL_DATA"


const Reducer =(state={data:[],country:'',countries:[],loading:false,selectedCountry:[]},action)=>{
    switch(action.type){
        case SET_DATA:
            return {...state,data:action.payload}
        case SET_LOADING:
            return {...state,loading:action.payload}
        case SET_SELECTED_COUNTRY:
            return {...state,selectedCountry:action.payload}
        case SET_COUNTRIES:
            return {...state,countries:action.payload}
        case SET_HISTORICAL_DATA:
            return {...state,historicalData:action.payload}
        default:
            return state
    }
}

export const getCountries=()=>{
    return async dispatch=>{
        dispatch({type:SET_LOADING,payload:true})
        const data = await axios.get('https://corona.lmao.ninja/v2/countries?sort=country');
        const historicalData = await (await axios.get('https://corona.lmao.ninja/v2/historical')).data;
        const conjugatedData=data.data.map(country=>{
            let history=historicalData.filter(d=>d.country===country.country).map(c=>c.timeline)[0]
            return {...country,history}
        })
        const countryName=await (await axios.get('https://ipwhois.app/json/')).data.country;
        const selectedCountry = conjugatedData.filter(country=>country.country===countryName)[0]
        dispatch({type:SET_SELECTED_COUNTRY,payload:selectedCountry})
        dispatch({type:SET_COUNTRIES,payload:conjugatedData})
        dispatch({type:SET_LOADING,payload:false})
    } 
}
export const getCountry=(name)=>{
    return async (dispatch,getState)=>{
        const {countries}=getState();
        dispatch({type:SET_LOADING,payload:true})
        const data = countries.filter(country=>country.country===name)[0]
        dispatch({type:SET_SELECTED_COUNTRY,payload:data})
        dispatch({type:SET_LOADING,payload:false})
    }
}




const store = createStore(Reducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;