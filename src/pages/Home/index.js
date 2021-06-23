import React, { useState, useEffect } from "react";

import { Typography, Container, LinearProgress, Link } from "@material-ui/core";
import { useStyles } from "./style";

import Header from "../../components/Header";
import Cards from "../../components/Cards";

import { SearchService } from "../../helpers";

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

  useEffect(() => {
    const randomSearch = getInitialSearch();
    SearchService(randomSearch).then((result) => {
      if (result !== " ") {
        setLoading(false);
      }
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
              Searching4
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
              <Link href="https://github.com/pedrohrb7/Searching4">Github</Link>
            </Typography>
          </Container>
        </div>
        <div className={styleClass.cardContainer}>
          {loading ? (
            <LinearProgress color="secondary" />
          ) : (
            <Container className={styleClass.cardGrid} maxWidth="lg">
              <Cards data={initialRandom} />
            </Container>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
