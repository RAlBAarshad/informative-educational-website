import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import GitHubIcon from '@material-ui/icons/GitHub';
import CommentIcon from '@material-ui/icons/Comment';
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">

      <div>
        <ThumbUpAltIcon className="icon" />
        <p> Like </p>
      </div>

      <div>
        <GitHubIcon className="icon"/>
        <p> GitHub </p>
      </div>

      <div>
        < CommentIcon className="icon" />
        <p> Comments </p>
      </div>

    </div>
  )
}

export default Footer;