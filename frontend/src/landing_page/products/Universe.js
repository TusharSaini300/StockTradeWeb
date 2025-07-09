import React from 'react';
function Universe() {
    return ( 
        <div className='container text-center'>
            <div className='row mt-5 p-5'>
                <h1 className='fs-2'>The Zerodha Universe</h1>
                <p className='mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row mt-3 p-3'>
                <div className='col-4'>
                    <img src='media/images/zerodhaFundhouse.png' style={{width:"60%"}}></img>
                    <p className='text-muted mt-3' style={{fontSize:"0.8rem", lineHeight:"0.9rem"}}>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
                </div>
                <div className='col-4'>
                    <img src='media/images/sensibullLogo.svg' style={{width:"60%"}}></img>
                    <p className='text-muted mt-4' style={{fontSize:"0.8rem", lineHeight:"0.9rem"}}>
                    Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

                    </p>
                </div>
                <div className='col-4'>
                <img src='media/images/goldenpiLogo.png' style={{width:"55%"}}></img>
                    <p className='text-muted mt-3' style={{fontSize:"0.8rem", lineHeight:"0.9rem"}}>
                    Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.

                    </p>
                </div>
            </div>
            <div className='row mt-3 p-3'>
                <div className='col-4'>
                <img src='media/images/streakLogo.png' style={{width:"50%"}}></img>
                    <p className='text-muted mt-3' style={{fontSize:"0.8rem", lineHeight:"0.9rem"}}>
                    Systematic trading platform
that allows you to create and backtest
strategies without coding.
                    </p>
                </div>
                <div className='col-4'>
                <img src='media/images/smallcaseLogo.png'></img>
                    <p className='text-muted mt-4' style={{fontSize:"0.8rem", lineHeight:"0.9rem"}}>
                    OThematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
                    </p>
                </div>
                <div className='col-4'>
                <img src='media/images/dittoLogo.png' style={{width:"35%"}}></img>
                    <p className='text-muted mt-3' style={{fontSize:"0.8rem", lineHeight:"0.9rem"}}>
                    Personalized advice on life
and health insurance. No spam
and no mis-selling.
                    </p>
                </div>
            </div>
            <button className='p-3 btn btn-primary fs-5 mt-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup for free</button>
        </div>
        
     );
}

export default Universe;