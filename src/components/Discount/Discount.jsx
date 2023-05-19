import React from "react";
import "./discount.css";

const Discount = () => {
  return (
    <div className="banner">
      <div className="banner__body">
        <h2 className="banner__big">20 % OFF EVERYTHING!</h2>
        <p className="banner__medium">(No code needed)</p>
        <p className="banner__medium">Hurry it's for one day only</p>
        <p className="banner__small">
          See website banner for full Ts & Cs. Selected marked products exluded
          from promo
        </p>
      </div>
    </div>
  );
};

export default Discount;
