import {useEffect} from 'react';
import './App.css';
import CardHolder from './components/CardHolder';
import CountryCard from './components/CountryCard';
import SearchCard from './components/SearchCard';
import BarCard from './components/BarCard';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getCountries,getCountry} from './redux';
function App(props) {
  
  props.getCountries()
  return (
    
    <>
    <div className="App">
      <div className="main-grid">
          <CardHolder/>
          <CountryCard/>
          <SearchCard/>
         <BarCard/>
      </div>
    </div>
    </>
  );
}

const mapDispatchToProps=dispatch=>{
  return bindActionCreators({getCountries,getCountry},dispatch)
}


export default connect(null,mapDispatchToProps)(App);
