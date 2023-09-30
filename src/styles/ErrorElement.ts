import { CHARCOAL_BLACK, CSS } from "./common";

export const MainContainer: CSS = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: CHARCOAL_BLACK,
};

export const ErrorTitle: CSS = {
  margin: 0,
  color: "#FFF",
  maxWidth: "80vw",
  fontSize: "4vmax",
  textAlign: "center",
  fontFamily: '"Open Sans", sans-serif',
};

export const ErrorText: CSS = {
  margin: 0,
  color: "#FFF",
  fontSize: "2vmax",
  fontFamily: '"Open Sans", sans-serif',
};
