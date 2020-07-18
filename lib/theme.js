import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f7b42c",
    },
    secondary: {
      main: "#C1C9C3",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "black",
    },
  },
  direction: "rtl",
});

export default theme;
