import React, { useState, useEffect } from "react";

import { Typography, Container, LinearProgress } from "@material-ui/core";
import { useStyles } from "./style";

import Header from "../../components/Header";
import Cards from "../../components/Cards";

import { SearchService } from "../../helpers/SearchService";

const Home = () => {
  const styleClass = useStyles();
  const [initialRandom, setInitialRandom] = useState([]);
  const [loading, setLoading] = useState(true);

  const getInitialSearch = () => {
    const initialRandomValue = [
      "politic",
      "sports",
      "science",
      "technology",
      "health",
      "history",
    ];

    const randomValue =
      initialRandomValue[Math.floor(Math.random() * initialRandomValue.length)];
    console.log("random value --> ", randomValue);

    return randomValue;
  };

  const randomSearch = getInitialSearch();

  useEffect(() => {
    SearchService().then((result) => {
      if (result > 0) {
        setLoading(false);
      }
      console.log("valor retornado no result --> ", result)
      setInitialRandom(result);
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
            {console.log(
              "Valor aleatorio passado via props -- ",
              initialRandom
            )}
            <Cards data={initialRandom} />
          </Container>
        )}
      </main>
    </div>
  );
};

export default Home;
