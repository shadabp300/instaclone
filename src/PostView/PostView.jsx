import React from "react";
import logo from "../logo.png";
import camera from "../camera.jpg";
import { useEffect, useState } from "react";
import "./PostView.css";

const PostView = () => {
  const [userData, setUserData] = useState([]);
  
  const Api= async () => {
    const res= await fetch("http://localhost:3004/user")
    const data= await res.json()
    setUserData(data)
  }
  useEffect(() => {
    Api()
  }, []);

  return (
    <>
      <div className="Container">
        <div className="header">
          <img className="logo" alt="Logo" src={logo}></img>
          <img className="camera" alt="camera" src={camera}></img>
        </div>
        <div className="">
          {userData.map((user, i) => {
            return (
              <div className="Container-2" key={i}>
                <div className="Profile">
                  <div className="f-div">
                    <div>
                      <span className="name">{user.name}</span>
                      <br />
                      <span className="location">{user.location}</span>
                    </div>
                    <div className="dot">...</div>
                  </div>
                  <div>
                    <img
                      className="image"
                      alt="profile"
                      src={user.PostImage}
                    ></img>
                  </div>
                  <div className="t-div">
                    <img className="comment" alt="comment" src="./image/comment.png"></img>
                    <span className="date">{user.date}</span>
                  </div>
                  <div className="likes">
                    {user.likes} likes
                  </div>
                  <div className="description">
                    {user.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PostView;