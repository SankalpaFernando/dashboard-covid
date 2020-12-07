import React from 'react'
import {Line} from 'react-chartjs-2'
import './component.scss'
import {connect} from 'react-redux'
function BarCard({country,loading}) {
  let history,state;
  const PerDayCalculate=(values)=>{
    const accurateValue=[];
    values.forEach((value,index)=>{
        if(index===0) return
        
        let v= value-values[index-1]
        accurateValue.push(v)
    })
    return accurateValue
  }
  if(country.history){
     history=country.history;
    state={
      labels: Object.keys(history.cases),
      datasets: [
        {
          label: 'Cases',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: '#bcacfd',
          borderWidth: 2,
          fill:false,
          data: PerDayCalculate(Object.values(history.cases))
        },
        {
          label: 'Deaths',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: '#ff79ae',
          borderWidth: 2,
          fill:false,
          data: PerDayCalculate(Object.values(history.deaths))
        },
        {
          label: 'Recovered',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: '#46e4b2',
          borderWidth: 2,
          fill:false,
          data: PerDayCalculate(Object.values(history.recovered))
        }
      ]
    }
  }
    
    return (
       !loading&&(<div className="bar-chart">
            <Line
          data={state}
          options={{
              responsive:true,
              scales: {
                xAxes: [{
                    
                    gridLines: {
                        display:false,
                    }
                }],
                yAxes: [{
                    ticks: {
                        display: false
                    },        
                    gridLines: {
                        // display:false
                    }   
                }]
            },
            title:{
              display:false,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'bottom'
            },
          }}
        />
        </div>)
    )
}
const mapStateToProps=state=>{
  return {country:state.selectedCountry,loading:state.loading}
}
export default connect(mapStateToProps,null)(BarCard)
