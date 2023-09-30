import "../styles/AboutMe.css";
import {
  CHARCOAL_BLACK,
  CSS,
  CenterView,
  FullScreenContainer,
  GUNMETAL_GRAY,
  MIDNIGHT_BLUE,
  OPEN_SANS,
  configureAnimation,
} from "./common";

/* 
  Screen 1
*/
export const MainContainer: CSS = {
  display: "flex",
  ...FullScreenContainer,
  flexDirection: "column",
  backgroundColor: MIDNIGHT_BLUE,
  transition: "border-radius 0.5s, width 0.5s, height 0.5s",
};

export const Expander: CSS = {
  width: "100vw",
  height: "30vmin",

  ...configureAnimation({
    animationName: "Shrink",
    animationDuration: "0.5s",
    animationTimingFunction: "ease-out",
  }),
};

export const PictureFrame: CSS = {
  width: "15vmax",
  height: "15vmax",
  alignSelf: "center",
  borderRadius: "7.5vmax",

  // Img config
  backgroundSize: "300%",
  backgroundPositionY: "-3.25vmax",
  backgroundPositionX: "-12.5vmax",
  backgroundImage: `url(/angel_picture.png)`,

  ...configureAnimation({
    animationName: "FadeIn",
    animationDuration: "0.5s",
    animationTimingFunction: "ease-out",
  }),
};

export const AboutMeLabel: CSS = {
  color: "#FFF",
  fontSize: "3vmax",
  alignSelf: "center",
  fontFamily: OPEN_SANS,
  transition: "opacity 1s",
};

export const BioText: CSS = {
  width: "80vw",
  color: "#FFF",
  fontSize: "1.5vmax",
  alignSelf: "center",
  textAlign: "center",
  lineHeight: "7.5vmin",
  fontFamily: OPEN_SANS,
  transition: "opacity 1s",
};

export const ButtonContainer: CSS = {
  flex: 1,
  width: "100vw",
  display: "flex",
  position: "relative",
  flexDirection: "column",
};

export const LinkButton: CSS = {
  opacity: 1,
  padding: "15px",
  borderRadius: "5px",
  borderColor: "#FFF",
  position: "relative",
  borderStyle: "solid",
  backgroundColor: MIDNIGHT_BLUE,
  transition: "opacity 0.125s, background-color 0.5s",
};

export const LinkButtonText: CSS = {
  color: "#FFF",
  fontSize: "1.5vmax",
  fontFamily: OPEN_SANS,
  transition: "color: 0.5s",
};

export const Slider: CSS = {
  ...CenterView,
  right: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: MIDNIGHT_BLUE,

  ...configureAnimation({
    animationDelay: "1s",
    animationDuration: "2s",
    animationName: "ButtonGrow",
    animationTimingFunction: "ease-out",
  }),
};

/*
  Screen 2
*/
export const NavBarContainer: CSS = {
  display: "flex",
  padding: "2.5vmin",
  flexDirection: "row",
  width: "100vw - 5vmin",
};

export const NavBarButtonContainer: CSS = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-evenly",
};

export const NavBarButtonStyle: CSS = {
  ...AboutMeLabel,
  alignSelf: "auto",
  fontSize: "2.5vmin",
};

export const NavBarButtonUnderline: CSS = {
  height: "5px",
  backgroundColor: "#FFF",
  transition: "width 0.5s",
};

export const ShowcaseIconContainerStyle: CSS = {
  flex: 1,
  opacity: 0,
  paddingTop: 0,
  display: "flex",
  flexWrap: "wrap",
  cursor: "pointer",
  alignItems: "center",
  flexDirection: "row",
  width: "100vw - 5vmin",
  paddingLeft: "2.5vmin",
  paddingRight: "2.5vmin",
  paddingBottom: "2.5vmin",
  transition: "opacity 1s",
  justifyContent: "space-evenly",
};

export const ShowcaseIconParent: CSS = {
  width: "20vmax",
  height: "20vmax",
  position: "relative",
  borderRadius: "1vmin",
  backgroundColor: GUNMETAL_GRAY,
};

export const ShowcaseIconStyle: CSS = {
  color: "#FFF",
  fontSize: "5vmax",
};

export const ShowcaseIconCover: CSS = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
};

export const ShowcaseIconHeader: CSS = {
  color: "#FFF",
  maxWidth: "80%",
  fontSize: "2vmax",
  textAlign: "center",
  fontFamily: OPEN_SANS,
};

export const ShowcaseDescriptionContainer: CSS = {
  top: 0,
  left: 0,
  height: 0,
  opacity: 0,
  width: "100%",
  display: "flex",
  overflow: "scroll",
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "#FFF",
  transition: "opacity 0.5s, height 0.5s",
  borderRadius: ShowcaseIconParent.borderRadius,
};

export const ShowcaseDescriptionText: CSS = {
  maxWidth: "80%",
  fontSize: "1.25vmax",
  textAlign: "center",
  marginTop: "2.5vmin",
  color: CHARCOAL_BLACK,
  fontFamily: OPEN_SANS,
};

export const LanguageIconContainer: CSS = {
  width: "100vw",
  display: "flex",
  flexWrap: "wrap",
  alignSelf: "center",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-evenly",
};

export const LanguageIcon: CSS = {
  opacity: 0,
  color: "#FFF",
  margin: "2.5vmin",
  fontSize: "2.5vmax",
  transition: "opacity 1s",
};

export const LanguageName: CSS = {
  opacity: 0,
  color: "#FFF",
  fontSize: "2vmin",
  fontFamily: OPEN_SANS,
  transition: "opacity 0.5s",
};

export const LanguageIconLabel: CSS = {
  left: 0,
  height: "25%",
  ...CenterView,
  top: "-1.25vmin",
  display: "flex",
  cursor: "default",
  position: "absolute",
  transition: "width 0.5s",
};
