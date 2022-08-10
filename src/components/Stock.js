import React from "react";
import PortfolioContainer from "./PortfolioContainer";

function Stock({ stock, addToPortfolio }) {
  const { name, price } = stock;

  function handleClick(e) {
    e.preventDefault();
    if (portfolio.find(stock)) {
      removeFromPortfolio(stock);
    } else {
    addToPortfolio(stock);
    }}

  return (
    <div>
      <div className="card" onClick={(e) => handleClick(e)}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
