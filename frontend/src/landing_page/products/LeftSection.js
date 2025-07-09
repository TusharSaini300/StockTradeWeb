import React from 'react';
function LeftSection({imageURL, productName, productDesc, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6 p-5'>
                    <img src={imageURL}/>
                </div>
                <div className='col-6 mt-5 p-5'>
                    <h1 className='fs-2'>{productName}</h1>
                    <p style={{lineHeight:"1.8rem"}}>{productDesc}</p>
                    <div className='mt-3'>
                    <a href={tryDemo}style={{textDecoration:"none"}}>Try Demo →</a>
                    <a href={learnMore} style={{textDecoration:"none", marginLeft:"4rem"}}>Learn More →</a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'></img></a>
                    <a href={appStore} style={{marginLeft:"4rem"}}><img src='media/images/appstoreBadge.svg'></img></a>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;