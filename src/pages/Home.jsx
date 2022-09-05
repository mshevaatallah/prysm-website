import React from "react";

import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="container ">
        <div className="sidenav ">
          <h1 className="logo">Prysm</h1>

          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <BiHomeAlt className="icon" />
            <span>Home</span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/explore"
          >
            <MdOutlineExplore className="icon" />
            <span>Explore</span>
          </Link>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <FaRegUserCircle className="icon" />
            <span>Profile</span>
          </Link>

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
              <h1 className="title">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/form"
                >
                  CREATE POST
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <div className="rightbar col-3">
          <h1 className="recommended">Recommended</h1>
          <img
            src="https://i.ibb.co/jG9BkB8/juicy-girl-sending-messages-from-her-phone.png"
            alt="juicy-girl-sending-messages-from-her-phone"
            border="0"
            className="img-diskusi"
            width={200}
          />
        </div>
      </div>
      <div className="navbar">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <BiHomeAlt className="icon" />
        </Link>

        <Link style={{ textDecoration: "none", color: "white" }} to="/explore">
          <MdOutlineExplore className="icon" />
        </Link>
        <a href="#contact">
          {" "}
          <FaRegUserCircle className="icon" />
        </a>
      </div>
    </>
  );
}

export default Home;
