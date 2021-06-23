import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { useStyles } from "./style";

import SearchField from "../../components/SearchField";

const Header = () => {
  const styleClass = useStyles();

  return (
    <AppBar position="static" className={styleClass.appBar}>
      <Container maxWidth="lg">
        <Toolbar component="nav">
          <Typography className={styleClass.title} variant="h5">
            Searching4
          </Typography>
          <Link to="/">
            <Button variant="outlined" className={styleClass.menu}>
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outlined" className={styleClass.menu}>
              About
            </Button>
          </Link>
        </Toolbar>
        <hr />
        <Toolbar>
          <div className={styleClass.toolBarSearch}>
            <SearchField />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
