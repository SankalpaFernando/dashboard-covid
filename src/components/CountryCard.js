import React from 'react';
import './component.scss';
import {FaUser} from 'react-icons/fa'
import {connect} from 'react-redux'
import {motion} from 'framer-motion'
function CountryCard({country,loading}) {
    return (
       
           <motion.div
        transition={{duration:.8}}
        whileHover={{ opacity:.8 }}
        className="country-card">
            <p>Affected Country</p>
            <h1>{!loading &&country &&country.country}</h1>
        </motion.div>
       
        
    )
}
const mapStateToProps=state=>{
    return {country:state.selectedCountry,loading:state.loading}
}

export default connect(mapStateToProps,null)(CountryCard)
