import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  getDoc,
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  docRe,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Details() {
  let params = useParams();
  let navigate = useNavigate();
  const id = params.id;

  const [Post, setPost] = useState("");
  const postsCollectionRef = doc(db, "post", id);
  useEffect(() => {
    const getPost = async () => {
      await getDoc(postsCollectionRef).then((doc) => {
        setPost(doc.data(), doc.id);
      });
    };

    getPost();
  }, []);

  return (
    <div className="container-details">
      <div className="navbar-details">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <h1>Prysm</h1>
        </Link>

        <div className="buttons-kembali" onClick={() => navigate("/")}>
          <IoArrowBack className="icons-kembali" size={30} />
          <h1 className="title-kembali">Kembali</h1>
        </div>
      </div>
      <div className="details-container">
        {/* <div className="profile">
          <div className="picture"></div>
          <h3 className="username-awal">{Post.author.name}</h3>
        </div> */}
        <div className="content">
          <h1>{Post.title}</h1>
          <p className="isi-content">{Post.postText}</p>
        </div>
        <div className="garis"></div>
        <div className="comment">
          <div className="picture-kecil"></div>
          <div className="komen">
            <h3 className="username">y</h3>
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
