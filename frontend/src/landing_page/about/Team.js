import React from 'react';
function Team() {
    return ( 
        <div className='container'>
             <div className='row'>
                    <h1 className='text-center fs-2 mb-5'>People</h1>
                    <div className='col text-center'>
                        <img src='media/images/nithinKamath.jpg' style={{borderRadius:"50%", width:"50%"}}></img>
                        <h4 className='mt-5'>Nithin Kamath</h4>
                        <h6 className='mt-3 text-muted'>Founder, CEO</h6>
                    </div>
                    <div className='col mt-5' style={{fontSize:"1.1rem"}}>
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the<br/> hurdles he faced during his decade long stint as a trader. Today,<br/> Zerodha has changed the landscape of the Indian broking industry.</p>
                        <p>
                        He is a member of the SEBI Secondary Market Advisory Committee<br/> (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p>
                        Playing basketball is his zen.
                        </p>
                    </div>
                </div>
        </div>
     );
}

export default Team;