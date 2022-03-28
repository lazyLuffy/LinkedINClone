import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpAltOutLinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutLinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutLinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutLinedIcon from "@material-ui/icons/SendOutlined";

const Post = forwardRef(({ id, name, description, message, photourl }, ref) => {
  // console.log("hey i am post", name);
  return (
    <div ref={ref} className="post">
      <div className="post_header">
        <Avatar src={photourl}>{"j"}</Avatar>
        <div className="postInfo">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="postBody">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={ThumbUpAltOutLinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutLinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutLinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutLinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});
export default Post;
