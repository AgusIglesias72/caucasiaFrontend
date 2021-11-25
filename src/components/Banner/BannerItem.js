import React from "react";
import "./Banner.css";

const BannerItem = () => {
  return (
    <div className="banner-item">
      {/* <img src="https://via.placeholder.com/300x200" alt="" /> */}
      <div className="banner-content">
        <h3>Banner Item</h3>
        <button>Ver más</button>
      </div>
    </div>
  );
};

export default BannerItem;
