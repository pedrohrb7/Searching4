import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },

  gridList: {
    width: 500,
    height: 450,
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  learnMore: {
    marginLeft: "auto",
  },
}));
