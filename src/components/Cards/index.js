import React from "react";

import {
  Button,
  Typography,
  IconButton,
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Tooltip,
} from "@material-ui/core";

// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
import VerifiedUserSharpIcon from "@material-ui/icons/VerifiedUserSharp";

import { useStyles } from "./style";

const Cards = (props) => {
  const styleClass = useStyles();
  const values = props.initial;
  // console.log("PROPS --> ", values);

  return (
    <div>
      {values &&
        values.map((value) => (
          <Card key={value.id} className={styleClass.card}>
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
                    <VerifiedUserSharpIcon color="primary" />
                  ) : (
                    <VerifiedUserSharpIcon />
                  )}
                </IconButton>
              }
              title={`${value.user.name} - @${value.user.screen_name}`}
              subheader={value.created_at}
            />

            <CardMedia
              className={styleClass.media}
              image={value.user.profile_banner_url}
              title={value.user.screen_name}
            />

            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {value.text}
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              {/* <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}

              <Tooltip enterDelay={800} leaveDelay={500} title="Soon">
                <Button size="small" color="secondary">
                  See More
                </Button>
              </Tooltip>
            </CardActions>
          </Card>
        ))}
    </div>
  );
};

export default Cards;
