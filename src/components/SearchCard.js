import React, { useState, useEffect } from "react";
import "./component.scss";
import { FaSearch } from "react-icons/fa";
import SearchCountry from "./SearchCountry";
import Covid from "./Covid";
import { connect } from "react-redux";
function SearchCard(props) {
  const [countries, setCountries] = useState(props.countries);
useEffect(()=>{

    setCountries(props.countries)
},[props.loading])
  const onChange = (e) => {
    const SearchTerm = e?e.target.value:'';
    const possibleResults =props.countries&& props.countries.filter((country) =>
      country.country.toLowerCase().includes(SearchTerm.toLowerCase())
    );
    setCountries(possibleResults)
  };
  return (
    <div className="search">
      <div className="search-card">
        <div className="search-holder">
          <input
            type="text"
            className="search-text"
            placeholder="Country Name"
            onChange={onChange}
          />
          <FaSearch className="icon" />
        </div>
        <div className="countries">{
            !props.loading && countries.map(country=>{
                return(
                    <SearchCountry
                    country={country.country}
                    img={country.countryInfo.flag}
                    cases={country.cases}
                    name={country.countryInfo.iso2}
                  />
                )
            })
        }</div>
      </div>
      <Covid />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { countries: state.countries,loading:state.loading };
};

export default connect(mapStateToProps, null)(SearchCard);
