import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio }) {

  const portfolioList = portfolio.map(stock => (<Stock stock={stock} key={stock.id} portfolio={portfolio} />));
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList}
    </div>
  );
}

export default PortfolioContainer;
