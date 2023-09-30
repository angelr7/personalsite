import { MIDNIGHT_BLUE, CSS, CenterView, OPEN_SANS } from "./common";

export const MainContainer: CSS = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: MIDNIGHT_BLUE,
};

export const HeaderContainer: CSS = {
  ...CenterView,
  display: "flex",
  padding: "2.5vmin",
  width: "100vw - 5vmin",
  flexDirection: "column",
};

export const TypedMessage: CSS = {
  color: "#FFF",
  fontSize: "4vmax",
  fontFamily: OPEN_SANS,
};

export const ContactIconContainer: CSS = {
  flex: 1,
  display: "flex",
  flexWrap: "wrap",
  padding: "2.5vmin",
  alignItems: "center",
  flexDirection: "row",
  width: "100vw - 5vmin",
  transition: "opacity 2s",
  justifyContent: "space-evenly",
};

export const ContactIconStyle: CSS = { fontSize: "5vmax", color: "#FFF" };
