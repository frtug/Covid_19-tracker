import React,{useState} from 'react'
import Mapy from './DrawMaps'

 function Map(props) {
    const [state,setState] = useState([])

    
   
    const getInfo = (stateCode) =>{
        setState(stateCode) 
    }
    const stateInfo = props.Data.filter(code => code.statecode === state).map(filteredState =>{
        return(
            <div className="all_stats" key="{filteredState.id}">
                        <div className="stats active">{filteredState.active}</div>
                        <div className="stats confirmed">{filteredState.confirmed}</div>
                        <div className="stats recoverd">{filteredState.recovered}</div>
                        <div className="stats deaths">{filteredState.deaths}</div>
            </div>
        );
    })
    const stateName = props.Data.filter(code => code.statecode === state).map(filteredState  =>{
                 return(
                        <div className="zone_data" key="{filteredState.id}">
                            <div className="zone1">{filteredState.state}</div>
                            <div className="zone2">{filteredState.lastupdatedtime}</div>
                        </div>
                    );                
                })
                 
    



    return (
        <div className="right_container">
            <div className="state_info">
                <div className="all_stats">
                    <div className="stats active">Active</div>
                    <div className="stats confirmed">Confirmed</div>
                    <div className="stats recoverd">Recovered</div>
                    <div className="stats deaths">Deaths</div>
                </div>
            {stateInfo}
            </div>
            <div className="last_updation">
                {stateName}
            </div>
            <div className="india_maps">
                <Mapy getInfo = {getInfo}/>
            </div>
        </div>
    )
}
export default Map;
