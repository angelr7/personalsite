import {
  CSS,
  OPEN_SANS,
  CenterView,
  MIDNIGHT_BLUE,
  FullScreenContainer,
  LIGHT_GRAY,
} from "./common";

export const MainContainer: CSS = {
  ...CenterView,
  ...FullScreenContainer,
  display: "flex",
  flexDirection: "column",
  backgroundColor: MIDNIGHT_BLUE,
};

export const AnimatedIntroText: CSS = {
  color: "#FFF",
  fontSize: "5vmax",
  fontFamily: OPEN_SANS,
};

export const IntroLink: CSS = {
  color: LIGHT_GRAY,
  fontSize: "2vmax",
  fontFamily: OPEN_SANS,
  transition: "color 0.5s",
};

export const AnimatedLinkSlider: CSS = {
  top: 0,
  right: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  transition: "width 1s ease-in",
  backgroundColor: MIDNIGHT_BLUE,
};
