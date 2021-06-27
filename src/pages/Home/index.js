import React, { useState, useEffect } from "react";

import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  Container,
  LinearProgress,
  Link,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { SearchService } from "../../helpers";
import { useStyles } from "./style";

import Header from "../../components/Header";
import Cards from "../../components/Cards";

const Home = () => {
  const styleClass = useStyles();

  const [value, setValue] = useState([]);
  const [search, setSearch] = useState("");
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

  const onSearch = (e) => {
    e.preventDefault();
    console.log("Valor pesquisado > ", search);
    SearchService(search).then((result) => {
      if (result !== " ") {
        setLoading(false);
      }
      setValue(result);
    });
    setSearch("");
  };

  //const refreshSearch = () => {};

  useEffect(() => {
    const randomSearch = getInitialSearch();
    SearchService(randomSearch).then((result) => {
      if (result !== " ") {
        setLoading(false);
      }
      setValue(result);
    });
  }, []);

  return (
    <div className={styleClass.root}>
      <header>
        <Header />
        <AppBar position="static" className={styleClass.bgColor}>
          <Container maxWidth="lg">
            <hr />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Toolbar>
                <div className={styleClass.toolBarSearch}>
                  <form onSubmit={onSearch}>
                    <div className={styleClass.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="search..."
                      classes={{
                        root: styleClass.inputRoot,
                        input: styleClass.inputInput,
                      }}
                    />
                  </form>
                </div>
              </Toolbar>
            </div>
          </Container>
        </AppBar>
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
              Get the code and read more about this project on --&gt;{" "}
              <Link href="https://github.com/pedrohrb7/Searching4">Github</Link>
              
            </Typography>
          </Container>
        </div>
        <div className={styleClass.bgColor}>
          {loading ? (
            <LinearProgress color="secondary" />
          ) : (
            <Container className={styleClass.cardGrid} maxWidth="lg">
              <Cards data={value} />
            </Container>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
