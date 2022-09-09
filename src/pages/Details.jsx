import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import {
  getDoc,
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  docRe,
  onSnapshot,
  arrayUnion,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";

function Details({ isAuth }) {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  let params = useParams();
  let navigate = useNavigate();
  const id = params.id;

  const [Post, setPost] = useState([]);
  const postsCollectionRef = doc(db, "post", id);
  const commentRef = doc(db, "post", id);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  // const deletePost = async (id) => {
  //   const postDoc = doc(db, "post", id);
  //   await deleteDoc(postDoc);
  // };
  useEffect(() => {
    const docRef = doc(db, "post", id);
    onSnapshot(docRef, (snapshot) => {
      setComments(snapshot.data().comments);
    });
  }, []);
  useEffect(() => {
    const docRef = doc(db, "post", id);
    onSnapshot(docRef, (snapshot) => {
      setPost({ ...snapshot.data(), id: snapshot.id });
    });
  }, [Post]);

  const handleChangeComment = (e) => {
    if (e.key === "Enter") {
      updateDoc(commentRef, {
        comments: arrayUnion({
          userName: Post.author.name,
          comment: comment,
          createdAt: new Date(),
        }),
      }).then(() => {
        setComment("");
      });
    }
  };
  const handleDeleteComment = (comment) => {
    console.log(comment);
    updateDoc(commentRef, {
      comments: arrayRemove(comment),
    })
      .then((e) => {
        console.log(e);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <div className="profile">
          <img src={Post.author?.photo} alt="" className="photo-profile" />
          <h3 className="username-awal">{Post.author?.name}</h3>
        </div>
        <div className="content">
          <h1>{Post.title}</h1>
          <p className="isi-content">{Post.postText}</p>
        </div>
        <div className="garis"></div>

        <div className="isi-input">
          <input
            className="input-details"
            type="text"
            placeholder="Tulis jawaban kamu"
            minLength={10}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            onKeyUp={(e) => {
              handleChangeComment(e);
            }}
          />
        </div>
      </div>
      <div className="komentar-post">
        <h1 className="h1-komen">Komentar Lainnya</h1>
        {Post.comments?.map((c) => (
          <div className="comment">
            <img src={Post.author?.photo} alt="" className="picture-kecil" />
            <div className="komen">
              <h3 className="username">{c.userName}</h3>
              <h3 className="jawaban">{c.comment}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;
