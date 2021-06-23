import { makeStyles } from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
  },
  
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  media: {
    height: 200,
  },

  avatar: {
    backgroundColor: red[500],
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
