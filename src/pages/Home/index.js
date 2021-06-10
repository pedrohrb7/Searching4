import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import SearchSharp from "@material-ui/icons/SearchSharp";

import { useStyles } from "./style";
import SearchField from "../../components/SearchField";

const Home = () => {
  const styleClass = useStyles();

  return (
    <div className={styleClass.root}>
      <AppBar position="static">
        <Container container maxWidth="lg">
          <Toolbar>
            <Typography className={styleClass.title} variant="h6" noWrap>
              Searching
              <SearchSharp className={styleClass.logo} />4
            </Typography>
            <div className={styleClass.search}>
              <SearchField />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <div className={styleClass.project}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Searching 4Four
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              This is a project made with ReactJS using Twitter API to search
              something has been tweeted or retweeted. See more about on --&gt; 
            </Typography>
          </Container>
        </div>
      </main>
    </div>
  );
};

export default Home;
