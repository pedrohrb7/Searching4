import React, { useEffect, useState } from "react";

import {
  Avatar,
  Button,
  Card,
  CardMedia,
  CardActions,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Typography,
  CircularProgress,
  Link,
} from "@material-ui/core";
import { useStyles } from "./style";

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
          <Typography variant="h4" className={styleClass.title}>
            Nossa Equipe
          </Typography>
          {!loading ? (
            <Grid container>
              <Grid item lg={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      className={styleClass.media}
                      image={BackgroundCard}
                      title="Contemplative Reptile"
                    />
                    <Avatar aria-label="recipe" className={styleClass.avatar} />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          ) : (
            <CircularProgress color="secondary" />
          )}
        </Container>
      </main>
      {/* <img src={BackgroundCard} alt="background card" className="card-img" /> */}
    </div>
  );
}
