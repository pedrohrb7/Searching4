import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  avatar: {
    display: "flex",
    marginTop: theme.spacing(-8),
    width: theme.spacing(12),
    height: theme.spacing(12),
  },

  cardActions : {
    display: "flex",
    justifyContent: "center",
  },
  
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  title: {
    textAlign: "center",
  },

  media: {
    height: 200,
  },

  memberName: {
    marginTop: 5,
    display: "flex",
    justifyContent: "center",
  },
}));
