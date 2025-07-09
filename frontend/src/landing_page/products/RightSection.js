import React from 'react';
function RightSection({productName,productDesc,ImageURL,learnMore}) {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6 mt-5 p-5'>
                    <h1 className='fs-2 mt-5'>{productName}</h1>
                    <p style={{lineHeight:"1.8rem"}}>{productDesc}</p>
                    <a href={learnMore} style={{textDecoration:"none"}} className='mt-3'>Learn More →</a>
                </div>
                <div className='col-6'>
                    <img src={ImageURL}></img>
                </div>
            </div>
        </div>
     );
}

export default RightSection;