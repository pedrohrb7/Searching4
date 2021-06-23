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
            Sobre
          </Typography>
          <Typography paragraph={true}>
            Somos a <strong>4-Front! </strong>
            Uma equipe formada por quatro desenvolvedores que estão em busca de
            novos conhecimentos e desafios profissionais. Cada integrante tem
            suas habilidades e áreas de especialidade, e unidos formamos um time
            capacitado para desenvolvimento web completo.
          </Typography>
          <Typography paragraph={true}>
            Nossos projetos priorizam a responsividade e a qualidade de
            interação para que seu site seja acessível nos diferentes
            dispositivos de seus usuários. Nossos serviços contemplam desde o
            design da interface até toda a programação Front-End. Fazemos
            aplicação de HTML, CSS e JavaScript puros, ou com os frameworks
            Angular e React.
          </Typography>
          <Typography paragraph={true}>
            Este site é resultado de um dos projetos da Capacitação em Front-end
            da Cocreare Academy, que teve como objetivo o desenvolvimento de um
            site responsivo integrado com a API da rede social Twitter.
          </Typography>

          <Container>
            <Typography variant="h4" className={styleClass.title} gutterBottom>
              Nossa Equipe
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
                              aria-label="add to shopping cart"
                            >
                              <GitHubIcon fontSize="large" />
                            </IconButton>
                          </Link>
                          <Link href={team.linkedin} target="_blank">
                            <IconButton
                              color="primary"
                              aria-label="add to shopping cart"
                            >
                              <LinkedInIcon fontSize="large" />
                            </IconButton>
                          </Link>
                          <Link href={`mailto:${team.email}`}>
                            <IconButton
                              color="primary"
                              aria-label="add to shopping cart"
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
