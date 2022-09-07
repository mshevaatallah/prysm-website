import React, { useContext, useState, useEffect } from "react";

import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { Context } from "../App";

function Home({ setIsAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "post");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef, orderBy("date", "desc"));

      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  // const deletePost = async (id) => {
  //   const postDoc = doc(db, "posts", id);
  //   await deleteDoc(postDoc);

  const setLogin = useContext(Context);

  return (
    <>
      <div className="container ">
        <div className="sidenav ">
          <h1 className="logo">Prysm</h1>

          <Link
            style={{ textDecoration: "none", color: "white", display: "flex" }}
            to="/"
          >
            <BiHomeAlt className="icon" />
            <span>Home</span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", display: "flex" }}
            to="/explore"
          >
            <MdOutlineExplore className="icon" />
            <span>Explore</span>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", display: "flex" }}
            to="/profile"
          >
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
          {postLists.map((post) => {
            return (
              <>
                <div className="postingan-container">
                  <div className="profile-home">
                    <img src={post.author.photo} className="photo-profile" />
                    <h3 className="username-profile">{post.author.name}</h3>
                  </div>
                  <div className="judul-post">
                    <h1 className="h1-judul">{post.title}</h1>
                    <a className="info" href="">
                      {post.postText}
                    </a>
                  </div>
                  {/* <div className="deletePost">
                    {isAuth && post.author.id === auth.currentUser.uid && (
                      <button
                        onClick={() => {
                          deletePost(post.id);
                        }}
                      >
                        {" "}
                        &#128465;
                      </button>
                    )}
                  </div> */}
                </div>
              </>
            );
          })}
        </div>
        <div className="rightbar col-3">
          <h1 className="recommended">Recommended</h1>
          <img
            src="https://i.ibb.co/jG9BkB8/juicy-girl-sending-messages-from-her-phone.png"
            alt="juicy-girl-sending-messages-from-her-phone"
            border="0"
            className="img-diskusi2"
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
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <FaRegUserCircle className="icon" />
        </Link>
      </div>
    </>
  );
}

export default Home;
