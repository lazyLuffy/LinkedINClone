import React, { useEffect, useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubcriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/Event";
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay";
import "./feed.css";
import InputOption from "./InputOption";
// import { Avatar } from "@material-ui/core";
import firebase from "firebase";
import { db } from "./Firebase";
import Post from "./Post";
import FlipMove from "react-flip-move";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";

// console.log(db);
function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  // console.log("User", user);

  useEffect(() => {
    db.collection("Posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("Posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photourl: user.profileUrl ? user.profileUrl : "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <button type="submit" onClick={sendPost}>
              send
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOption Icon={ImageIcon} title="Image" color="#70B5F9" />
          <InputOption Icon={SubcriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalenderViewDayIcon}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(
          ({
            data: { id, name, message, description, photourl, timeStamp },
          }) => (
            <Post
              id={id}
              name={name}
              description={description}
              message={message}
            />
          )
        )}
      </FlipMove>
    </div>
  );
}

export default Feed;
