const { createTheme } = require("@mui/material/styles");

const { palette } = createTheme();

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Mono", "monospace"].join(","),
  },
  palette: {
    primary: {
      dark: "#020c1b",
      main: "#0a192f",
      light: "#112240",

      // main: "#ff6363",
      // // main: orange[500],
      // light: "#ffadad",
      // dark: "#873232",
    },
    secondary: {
      main: "#9b4dff",
    },
    slate: palette.augmentColor({
      color: { dark: "#495670", main: "#8892b0", light: "#a8b2d1" },
    }),

    text: {
      ...palette.text,
      ...palette.slate,
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
