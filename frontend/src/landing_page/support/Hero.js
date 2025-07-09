import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5 mt-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href='#' style={{textDecoration:"none", color:"#fff"}}>Track Tickets</a>
            </div>
            <div className='row ms-5 pb-5 mb-5'>
                <div className='col-6'>
                <h4 className='mb-5'>Search for an answer or browse help topics to create a ticket</h4>
                <input className='mb-5' placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' /><br/>
                <a href="#">Track account opening</a> 
                <a href="#">Track segment activation</a> 
                <a href="#">Intraday margins </a>
                <a href="#">Kite user manual</a>
                </div>
                <div className='col-6'>
                    <h4 className='mb-3'>Featured</h4>
                    <ol>
                        <li><a href=''>Surveillance measure on scrips - December 2024</a></li>
                        <li><a href=''>Rights Entitlements listing in December 2024</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;