import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
  const history = useHistory();
  return (
    //BEM
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIcon className="arrow-icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header-icon" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header-img"
          src="/images/header.png"
          alt="perfect date logo"
        />
      </Link>

      <Link to="/chats">
        <IconButton>
          <SendIcon className="header-icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
