import React from 'react'
import './component.scss'
import thousands from 'thousands';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getCountry} from '../redux'
function SearchCountry({country,img,cases,name,getCountry}) {
    const onClick=()=>{
        getCountry(country)
    }
    return (
        <div className="search-country" onClick={onClick} >
            <div className="flag" style={{backgroundImage:`url(${img})`}}/>
    <p className="country">{country}</p>
    <p className="number">{thousands(cases)}</p>
        </div>
    )
}
const mapDispatchToProps=dispatch=>{
    return bindActionCreators({getCountry},dispatch)
}
export default connect(null,mapDispatchToProps)(SearchCountry)
