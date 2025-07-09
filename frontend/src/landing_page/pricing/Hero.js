import React from "react";
function Hero() {
  return (
    <div className="container">
        <div className="row mt-5 text-center p-5">
            <h1 >Charges</h1>
            <h5 className="text-muted">List of all charges and taxes</h5>
        </div>
      <div className="row mt-5 text-center p-5">
        <div className="col-4">
            <img src="media/images/pricingEquity.svg" style={{width:"60%"}}></img>
            <h1 className="fs-2">Free equity delivery</h1>
            <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4">
            <img src="media/images/intradayTrades.svg" style={{width:"60%"}}></img>
            <h1 className="fs-2">Intraday and F&O trades</h1>
            <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4">
            <img src="media/images/pricingMF.svg" style={{width:"60%"}}></img>
            <h1 className="fs-2">Free direct MF</h1>
            <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
