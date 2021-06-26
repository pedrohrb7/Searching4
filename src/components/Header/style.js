import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  bgColor: {
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
}));
