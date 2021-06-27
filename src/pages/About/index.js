import React, { useEffect, useState } from "react";

import {
  Avatar,
  Card,
  CardMedia,
  CardActions,
  CardActionArea,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Typography,
  Link,
} from "@material-ui/core";
import { useStyles } from "./style";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineSharp from "@material-ui/icons/MailOutlineSharp";

import Header from "../../components/Header";

import { TeamService } from "../../helpers";

import BackgroundCard from "../../image/background-card.jpg";

export default function About() {
  const styleClass = useStyles();
  const [team, setTeam] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    TeamService().then((result) => {
      if (result !== " ") {
        setLoading(false);
      }
      setTeam(result);
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Container maxWidth="lg">
          <Typography variant="h2" className={styleClass.title}>
            About
          </Typography>
          <Typography paragraph={true}>
            We're <strong>4-Front!</strong>A team formed by four developers looking for new
            knowledge and professional challenges. Each member has their skills
            and areas of expertise, and together we form a team capable to build web applications.
          </Typography>
          <Typography paragraph={true}>
            Our projects prioritize the responsiveness and quality of
            interaction with different screen sizes. Our services range from the interface design to all
            Front-End programming. We do application of pure HTML, CSS and
            JavaScript, or with Angular and React.
          </Typography>
          <Typography paragraph={true}>
            This site is the result of one of the Front-end Training projects of
            NewTab Academy, which aimed to develop a Responsive website
            integrated with Twitter social network API.
          </Typography>

          <Container>
            <Typography variant="h4" className={styleClass.title} gutterBottom>
              Our Team
            </Typography>
            {loading ? (
              <CircularProgress color="secondary" />
            ) : (
              <Grid container spacing={2}>
                {team &&
                  team.map((team) => (
                    <Grid item lg={4}>
                      <Card>
                        <CardActionArea>
                          <CardMedia
                            className={styleClass.media}
                            image={BackgroundCard}
                            title={`${team.name}`}
                          />
                          <CardContent>
                            <Avatar
                              className={styleClass.avatar}
                              src={team.picture}
                            />
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                              className={styleClass.memberName}
                            >
                              {team.name}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textPrimary"
                              component="p"
                            >
                              {team.intro}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions className={styleClass.cardActions}>
                          <Link href={team.github} target="_blank">
                            <IconButton
                              color="primary"
                            >
                              <GitHubIcon fontSize="large" />
                            </IconButton>
                          </Link>
                          <Link href={team.linkedin} target="_blank">
                            <IconButton
                              color="primary"
                            >
                              <LinkedInIcon fontSize="large" />
                            </IconButton>
                          </Link>
                          <Link href={`mailto:${team.email}`}>
                            <IconButton
                              color="primary"
                            >
                              <MailOutlineSharp fontSize="large" />
                            </IconButton>
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            )}
          </Container>
        </Container>
      </main>
    </div>
  );
}
