import React, { Component } from 'react'
import Table from './Table'
import Map from './Map'

class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            Statewise : [],
            GraphData : [],
            DayRecord:[],
        }
    }
    componentDidMount() {
        fetch('https://api.covid19india.org/data.json')
          .then(res => res.json())
          .then((data) =>{
            this.setState({ Statewise : data.statewise, GraphData : data.cases_time_series})

            console.log(this.state.Statewise);
            console.log(this.state.GraphData);

          })
          fetch('https://api.covid19india.org/states_daily.json')
          .then(res => res.json())
          .then((data) =>{
            this.setState({ DayRecord : data.states_daily.slice(data.states_daily.length -22, data.states_daily.length -1 ) })

            console.log(this.state.DayRecord);
          })

          .catch(console.log());
          
      }
    render() {
        return (
            <div className="container"> 
                <div className="left">  
                <div className="top">  
                    <div className="logo_class">
                        <img src= "/assets/images/logo.png" alt="Logo Images" />
                        
                    </div>
                    <header>
                            <h1>India Covid-19 Tracker</h1>
                            <p>Lets all pray to make a earth a better place</p>
                        </header>
                </div>
                    <div className="data_class">
                        
                        <div className="card card-graph">
                            I am Graph Lets all pray to make a earth a better place Lets all pray to make a earth a better place Lets all pray to make a earth a better place
                        </div>
                        <div className="card card-table">
                            <Table statewise = {this.state.Statewise}/>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="map-header">
                        <h1>India Map</h1>
                        <p>Hover over the state for more detail</p>
                    </div>
                    <div className="card card-map">
                        <Map />
                    </div>
                </div>

            </div>
        )
    }
}
 export default MainComponent
