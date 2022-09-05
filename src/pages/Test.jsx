import React from "react";

function Test() {
  return (
    <div className="container">
      <div className="navbar-details">
        <h1>Prysm</h1>
        <div className="input-container">
          <input
            className="input-user"
            type="text"
            placeholder="Cari pertanyaan mu disini"
          />
        </div>
      </div>

      <div className="container-pencarian">
        <h1 className="pencarian-result">Hasil pencarian mu ( 1 ) </h1>
        <div className="pencarian-container">
          <div className="post-container"></div>
        </div>
      </div>
    </div>
  );
}

export default Test;
