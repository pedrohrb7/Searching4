import React from "react";

import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

import { useStyles } from "./style";

import SearchField from "../../components/SearchField";

const Header = () => {
  const styleClass = useStyles();

  return (
    <AppBar position="static" className={styleClass.appBar}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography className={styleClass.title} variant="h6" noWrap>
            Searching4
          </Typography>
          <div className={styleClass.search}>
            <SearchField />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
