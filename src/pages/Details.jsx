import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
function Details() {
  return (
    <div className="container-details">
      <div className="navbar-details">
        <h1>Prysm</h1>
        <div className="buttons-kembali">
          <IoArrowBack className="icons-kembali" size={30} />
          <h1 className="title-kembali">Kembali</h1>
        </div>
      </div>
      <div className="details-container">
        <div className="profile">
          <div className="picture"></div>
          <h3 className="username-awal">@akusayangibu</h3>
        </div>
        <div className="content">
          <h1>Apa itu HTML ?</h1>
          <p className="isi-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            repudiandae facere illo obcaecati, quasi officiis ipsam magni rem
            sed sint exercitationem blanditiis, voluptatem atque impedit
            mollitia quos cupiditate aperiam eius.
          </p>
        </div>
        <div className="garis"></div>
        <div className="comment">
          <div className="picture-kecil"></div>
          <div className="komen">
            <h3 className="username">@akusayangibu</h3>
            <h3 className="jawaban">caranya lu buka anuan brok</h3>
          </div>
        </div>
        <div className="isi-input">
          <input
            className="input-details"
            type="text"
            placeholder="Tulis jawaban kamu"
            minLength={30}
          />
          <FaTelegramPlane size={30} className="send" />
        </div>
      </div>
      <div className="details-container"></div>
    </div>
  );
}

export default Details;
