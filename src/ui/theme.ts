const choices = {
  vermilion: "#DB3022",
  black: "#222222",
  white: "#fff",
  gray: "#9B9B9B",
  scarlet: "#F01F0E",
  eucalyptus: "#2AA952",
  alabaster: "#F9F9F9",
}

const defaultTheme = {
  colors: {
    primary: choices.vermilion,
    black: choices.black,
    white: choices.white,
    gray: choices.gray,
    error: choices.scarlet,
    success: choices.eucalyptus,
    background: choices.alabaster,
    outline: choices.white,
    fontBase: choices.black,
    fontInverted: choices.white,
    fontPrimary: choices.vermilion,
    fontMuted: choices.gray,
  },
  fontSizes: {
    headline: 34,
    headline2: 24,
    headline3: 18,
    body: 16,
    body2: 14,
    caption: 12,
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
  },
}

export default defaultTheme
