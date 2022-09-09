import React, { useContext } from "react";
import { BiDoorOpen } from "react-icons/bi";
import { db, auth } from "../firebase-config";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Context } from "../App";
function Profile({ setIsAuth }) {
  const setLogin = useContext(Context);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setLogin(false);
      // setIsAuth(false);
      // window.location.pathname = "/login";
    });
  };
  return (
    <div className="container-details">
      <div className="navbar-form">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <h1>Prysm</h1>
        </Link>
        <div className="buttons " onClick={signUserOut}>
          <div className="button-1 cancel">
            <h2 className="title-1">
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  display: "flex",
                }}
                to="/"
              >
                <BiDoorOpen
                  size={20}
                  style={{
                    marginRight: "10px",
                  }}
                />
                <span>Log out</span>
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
