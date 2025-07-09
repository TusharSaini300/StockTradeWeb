import React, {useEffect,useState, useContext} from 'react';
import {holdings} from '../data/data';
import axios from 'axios';
import { VerticalGraph } from './VerticalGraph';
import GeneralContext from './GeneralContext';

function Holdings() {
    const [allHoldings,setAllHoldings] = useState([]);
    const { holdingsRefreshKey } = useContext(GeneralContext);

    useEffect(()=>{
        axios.get("http://localhost:3002/allHoldings").then((res)=>{
            setAllHoldings(res.data);
        });
    },[holdingsRefreshKey]);


    const labels = allHoldings.map((subArray)=>subArray["name"]);

    const data = {
        labels,
        datasets:[
            {
                label:"Stock Price",
                data: allHoldings.map((stock)=>stock.price),
                backgroundColor:"rgba(255,99,132,0.5)",
            },
        ],
    };

    return ( 
        <div className='holding-container'>
        <h3 className='title'>Holdings({allHoldings.length})</h3>
        <div className='order-table'>
            <table>
                <tr>
                    <th>Instrument</th>
                    <th>Qty.</th>
                    <th>Avg. cost</th>
                    <th>LTP</th>
                    <th>Cur. val</th>
                    <th>P&L</th>
                    <th>Net chg.</th>
                    <th>Day chg.</th>
                </tr>
                {allHoldings.map((stock,index)=>{
                    const curValue=stock.price * stock.qty;
                    const isProfit = curValue-stock.avg * stock.qty >= 0.0;
                    
                    return(
                        <tr key = {index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{curValue.toFixed(2)}</td>
                    <td>{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
                    <td>{stock.net}</td>
                    <td>{stock.day}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        <div className='row'>
            <div className='col'>

            </div>
        </div>
        <VerticalGraph data={data}/> 
        </div>
     );
}

export default Holdings;