import React, { useState, useEffect } from "react";

import { Typography, Container, LinearProgress } from "@material-ui/core";
import { useStyles } from "./style";

import Header from "../../components/Header";
import Cards from "../../components/Cards";

import { getInitialSearch } from "../../helpers/fakeService";

const Home = () => {
  const styleClass = useStyles();
  const [initialValue, setInitialValue] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInitialSearch().then((result) => {
      setInitialValue(result);
    });
  }, []);

  return (
    <div className={styleClass.root}>
      <header>
        <Header />
      </header>
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
        {loading ? (
          <LinearProgress color="secondary" />
        ) : (
          <Container className={styleClass.cardGrid} maxWidth="lg">
            <Cards initial={initialValue} />
          </Container>
        )}
      </main>
    </div>
  );
};

export default Home;
