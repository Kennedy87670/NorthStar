import { createTheme } from "@mui/material";

export const shades = {
  primary: {
    100: "#ccdce6",
    200: "#9ab8cd",
    300: "#6795b4",
    400: "#35719b",
    500: "#024e82",
    600: "#023e68",
    700: "#012f4e",
    800: "#011f34",
    900: "#00101a",
  },
  secondary: {
    100: "#d2d2d2",
    200: "#a5a5a5",
    300: "#777777",
    400: "#4a4a4a",
    500: "#1d1d1d",
    600: "#171717",
    700: "#111111",
    800: "#0c0c0c",
    900: "#060606",
  },
  neutral: {
    100: "#ffffff",
    200: "#f0f0f0",
    300: "#e0e0e0",
    400: "#d0d0d0",
    500: "#c0c0c0",
    600: "#a0a0a0",
    700: "#808080",
    800: "#606060",
    900: "#404040",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      light: shades.neutral[100],
      main: shades.neutral[500],
      dark: shades.neutral[900],
    },
  },
});
