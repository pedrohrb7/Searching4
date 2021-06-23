import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#1c273a",
  },

  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "block",
    },
  },

  menu: {
    color: "white",
    border: "1px solid white",
    marginLeft: 15,
  },

  toolBarSearch: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
      cursor: "pointer",
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(3),
    },
  },
}));
