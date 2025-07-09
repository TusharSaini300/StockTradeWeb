import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='hero-image' className='mb-5'></img>
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online platform in stocks, derivatives, mutual funds, and more</p>
                <button className='p-3 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Hero;