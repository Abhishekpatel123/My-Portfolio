const { createTheme } = require("@mui/material/styles");
const { orange } = require("@mui/material/colors");

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      light: orange[200],
      dark: orange[700],
    },
    secondary: {
      main: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 150,
          fontFamily: "cursive",
          minHeight: 50,
          borderRadius: 10,
        },
      },
    },
  },
});

export default theme;
