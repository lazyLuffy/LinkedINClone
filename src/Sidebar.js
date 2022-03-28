import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import "./sidebar.css";
function Sidebar() {
  const user = useSelector(selectUser);
  console.log(user);
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p className="sidebar_topicName">{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
          alt=""
        />
        <Avatar className="sidebar_avatar" src={user.photoUrl}>
          {"j"}
        </Avatar>
        <h3>{user.displayName}</h3>
        <h5>{user.email}</h5>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viwed you</p>
          <p className="sidebar_Number">2,456</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_Number">2,7859</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("Subhendu")}
        {recentItem("Amit")}
        {recentItem("Abhilash")}
        {recentItem("Rupal")}
        {recentItem("Jatin")}
      </div>
    </div>
  );
}

export default Sidebar;
