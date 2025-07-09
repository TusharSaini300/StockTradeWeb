import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/largestBroker.svg'></img>
                </div>
                <div className='col-6 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6 p-5'>
                        <ul>
                            <li>Future and Options</li>
                            <li>Commodity derivatives</li>
                            <li>currency derivatives</li>
                        </ul>
                        </div>
                        <div className='col-6 p-5'>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt</li>
                            </ul>
                        </div>
                    </div>
                     <img src='media/images/pressLogos.png' style={{width:"90%"}}></img>
                </div>
            </div>

        </div>
     );
}

export default Awards;