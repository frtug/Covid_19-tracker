import React from 'react'
import Mapy from './DrawMaps'
 function Map(props) {
    return (
        <div className="right_container">
            <h1>Statistic will showing here lets start checking the space of this block</h1>
            <div className="last_updation">
                <div className="state_name">
                        {}
                </div>
                <div className="last_time">

                </div>

            </div>
            <div className="india_maps">
            <Mapy />
            </div>
        </div>
    )
}
export default Map;
