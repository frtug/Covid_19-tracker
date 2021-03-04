import React from 'react'



function Table(props) {

    const Show = props.statewise.filter(state => state.statecode !== 'TT').map((data) =>{
                    return(
                        <tr key={data.id}>
                            <td>{data.state}</td>
                            <td>{data.confirmed}</td>
                            <td>{data.active}</td>
                            <td>{data.recovered}</td>
                            <td>{data.deaths}</td>
                        </tr>
                    );                
                })
    

    return (
        <div className="show_table">
           <table>
                <tr>
                    <th>State/UT</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
                
                {Show}
                
            </table>
        </div>
    )
}
 export default Table;
