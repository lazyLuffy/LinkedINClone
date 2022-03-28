import React from "react";
import "./widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRights">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn New</h2>
        <InfoIcon />
      </div>
      {newArticle("Jatin Is Back", "Top news -999 readers")}
      {newArticle("India Cronavirus Great Impact", "Top news -999 readers")}
      {newArticle("India Economy Great Impact", "Top news -999 readers")}
      {newArticle("Indian Hackers Great Impact", "Top news -999 readers")}
      {newArticle("Payment Gate Way Great Impact", "Top news -999 readers")}
    </div>
  );
}

export default Widgets;
