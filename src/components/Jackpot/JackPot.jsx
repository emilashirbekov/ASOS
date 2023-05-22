import React from "react";
import "./JackPot.css";

const JackPot = () => {
  return (
    <div className="bannerj">
      <div className="banner__bodyj">
        <img
          src="https://content.asos-media.com/-/media/homepages/unisex/homepages/2023/feb/2023-spinner/web_spinner_gbl_215x40.gif"
          alt="spinner gif"
        />
        <h2 className="banner__bigj">UP TO +30% OFF OUTLET STUFF!</h2>
        <p className="banner__bigj">it's mystery-deal time...</p>
        <p className="banner__mediumj">
          use code: <span>JACKPOT</span>
        </p>
        <p className="banner__smallj">
          Outlet items only. See website banner for Ts&Cs. Selected marked
          products excluded from promo. POOL-PROOF JEWELS Holiday-friendly
          accessories SHOP NOW
        </p>
      </div>
    </div>
  );
};

export default JackPot;
