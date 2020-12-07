import React from "react";
import "./component.scss";
import {
  FaGlobeEurope,
  FaSkullCrossbones,
  FaBullseye,
  FaShieldAlt,
} from "react-icons/fa";
import thousands from 'thousands';
import {connect} from 'react-redux'
import {motion} from 'framer-motion'

function Card({ icon, color,label,number }) {
  const style = {
    white: {
      textColor: "#000",
      bgColor: "#FFF",
      borderColor:"#a1a2af"
    },
    blue: {
      textColor: "#FFF",
      bgColor: "#00b3ff",
      borderColor:"#FFF"
    },
    red: {
      textColor: "#FFF",
      bgColor: "#ff79ae",
      borderColor:"#FFF"
    },
  };
  let theme = style[color]; 
  return (
    <motion.div 
    transition={{duration:.8}}
    whileHover={{ scale: 1.1,opacity:.8 }}
    style={{backgroundColor:theme.bgColor,border:`1px solid ${theme.borderColor}`}} className="card">
      {icon}
  <p style={{color:theme.textColor}} >{label}</p>
  <h3 style={{color:theme.textColor}}>{thousands(number)}</h3>
    </motion.div>
  );
}

function CardHolder({country}) {
  const {cases,deaths,active,recovered}=country
  return (
    <div className="card-holder">
      <Card label="Total Cases"   number={cases}  color="blue"  icon={<FaGlobeEurope style={{color:'#FFF'}} className="icon" />} />
      <Card label="Total Deaths"  number={deaths}  color="red"   icon={<FaSkullCrossbones style={{color:'#FFF'}} className="icon" />} />
      <Card label="Active Cases"  number={active}  color="white" icon={<FaBullseye style={{color:'#a1a2af'}} className="icon" />} />
      <Card label="Recovered Cases" number={recovered} color="white" icon={<FaShieldAlt style={{color:'#a1a2af'}} className="icon" />} />
    </div>
  );
}
const mapStateToProps=state=>{
  return {country:state.selectedCountry}
}
export default connect(mapStateToProps,null)(CardHolder);
