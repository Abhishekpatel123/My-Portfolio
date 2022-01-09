const { createTheme } = require("@mui/material/styles");

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6363",
      // main: orange[500],
      light: "#ffadad",
      dark: "#873232",
    },
    secondary: {
      main: "#9b4dff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // minWidth: 150,
          // fontFamily: "cursive",
          // minHeight: 50,
          // borderRadius: 10,
        },
      },
    },
  },
});

export default theme;
