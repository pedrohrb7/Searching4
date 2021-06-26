import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Container, Button, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./style";

const Header = () => {
  const styleClass = useStyles();

  return (
    <AppBar position="static" className={styleClass.bgColor}>
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
      </Container>
    </AppBar>
  );
};

export default Header;
