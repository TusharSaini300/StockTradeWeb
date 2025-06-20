import React, {useState,useEffect} from 'react';
import axios from 'axios';

function Positions() {

    const [allPositions,setAllPositions] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3002/allPositions").then((res)=>{
            setAllPositions(res.data);
        });
    },[]);

    return ( 
        <div className='position-table'>
        <h3 className='title'>Positions({allPositions.length})</h3>
        <div className='order-table'>
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>LTP</th>
                            <th>Cur. val</th>
                            <th>P&L</th>
                            <th>Day chg.</th>
                        </tr>
                        {allPositions.map((stock,index)=>{
                            const curValue=stock.price * stock.qty;
                            const isProfit = curValue-stock.avg * stock.qty >= 0.0;
                            
                            return(
                                <tr key = {index}>
                            <td>{stock.product}</td>
                            <td>{stock.name}</td>
                            <td>{stock.qty}</td>
                            <td>{stock.avg.toFixed(2)}</td>
                            <td>{stock.price.toFixed(2)}</td>
                            <td>{curValue.toFixed(2)}</td>
                            <td>{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
                            <td>{stock.day}</td>
                        </tr>
                            )
                        })}
                    </table>
                </div>
        </div>
     );
}

export default Positions;