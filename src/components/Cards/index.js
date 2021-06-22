import React from "react";

import {
  Grid,
  Button,
  Typography,
  IconButton,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
} from "@material-ui/core";
import VerifiedUserSharpIcon from "@material-ui/icons/VerifiedUserSharp";

import { useStyles } from "./style";

const Cards = (props) => {
  const styleClass = useStyles();
  const values = props.data;
  //console.log("props value --> ", props);

  return (
    <div>
      <Grid container spacing={2}>
        {values &&
          values.map((value) => (
            <Grid key={value.id} item xs={12} sm={6} md={4} lg={3}>
              <Card className={styleClass.card}>
                <CardHeader
                  avatar={
                    <Avatar
                      alt={value.user.name}
                      src={value.user.profile_image_url_https}
                    />
                  }
                  action={
                    <IconButton aria-label="verified">
                      {value.user.verified ? (
                        <VerifiedUserSharpIcon color="secondary" />
                      ) : (
                        <VerifiedUserSharpIcon />
                      )}
                    </IconButton>
                  }
                  title={`${value.user.name} - @${value.user.screen_name}`}
                  subheader={value.created_at}
                />

                {value.entities.urls.expanded_url ? (
                  <CardMedia
                    className={styleClass.media}
                    image={value.entities.urls.expanded_url}
                    title={value.user.screen_name}
                  />
                ) : (
                  ""
                )}

                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {value.text}
                  </Typography>
                </CardContent>

                <CardActions disableSpacing>
                  <Button
                    href={`https://twitter.com/${value.user.screen_name}/status/${value.id_str}`}
                    target="_blank"
                  >
                    See More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Cards;
