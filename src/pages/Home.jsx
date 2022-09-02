import React from "react";

import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
function Home() {
  return (
    <>
      <div className="container ">
        <div className="sidenav ">
          <h1 className="logo">Prysm</h1>

          <a href="#about">
            {" "}
            <BiHomeAlt className="icon" />
            <span>Home</span>
          </a>
          <a href="#services">
            {" "}
            <MdOutlineExplore className="icon" />
            <span>Explore</span>
          </a>
          <a href="#clients">
            <FaRegUserCircle className="icon" />
            <span>Profile </span>
          </a>

          <img
            src="https://i.ibb.co/6sKqXGr/juicy-team-discussing-the-project.png"
            alt="juicy-team-discussing-the-project"
            border="0"
            className="img-diskusi"
            width={200}
          />
        </div>
        <div className="main col-6 ">
          <div className="top-nav">
            <h1 className="main-text">Home</h1>
            <div className="button">
              <h1 className="title">CREATE POST</h1>
            </div>
          </div>
        </div>
        <div className="rightbar col-3">
          <h1 className="recommended">Recommended</h1>
        </div>
      </div>
      <div className="navbar">
        <a href="#home">
          {" "}
          <BiHomeAlt className="icon" />
        </a>
        <a href="#news">
          {" "}
          <MdOutlineExplore className="icon" />
        </a>
        <a href="#contact">
          {" "}
          <FaRegUserCircle className="icon" />
        </a>
      </div>
    </>
  );
}

export default Home;
