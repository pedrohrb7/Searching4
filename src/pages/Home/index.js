import React, { useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { useStyles } from "./style";

import SearchField from "../../components/SearchField";
import Cards from "../../components/Cards";
import { getInitialSearch } from "../../helpers/fakeService";

const Home = () => {
  const styleClass = useStyles();
  const [initialValue, setInitialValue] = useState([]);

  useEffect(() => {
    getInitialSearch().then((result) => {
      setInitialValue(result);
    });
  }, []);

  return (
    <div className={styleClass.root}>
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
      <main>
        <div className={styleClass.project}>
          <Container maxWidth="md">
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
              something has been tweeted or retweeted. <br />
              Get the code on --&gt;{" "}
            </Typography>
          </Container>
        </div>
        <Container className={styleClass.cardGrid} maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item  xs={12} sm={6} md={4}>
              <Cards initial={initialValue} />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Home;
