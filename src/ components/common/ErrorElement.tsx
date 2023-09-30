import Spacer from "../Spacer";
import "../../styles/ErrorElement.css";
import { useRef } from "react";
import { useRouteError } from "react-router";
import { Button, ButtonText } from "../../styles/common";
import {
  ErrorText,
  ErrorTitle,
  MainContainer,
} from "../../styles/ErrorElement";

export const ErrorElement = () => {
  const error: any = useRouteError();
  const usePointer = useRef(false);
  return (
    <div style={MainContainer}>
      <Spacer width="100vw" height="20vh" />
      <h1 style={ErrorTitle}>{"Uh oh! Something went wrong! :("}</h1>
      <Spacer width="100vw" height="15vh" />
      <h1 style={ErrorText}>{error.data.replace("Error: ", "")}</h1>
      <div style={{ flex: 1 }} />
      <button
        id="ErrorElementButton"
        style={Button}
        onClick={() => (window.location.href = "/")}
        onMouseEnter={() => (usePointer.current = true)}
        onMouseLeave={() => (usePointer.current = false)}
      >
        <h1 style={ButtonText}>Back to Home</h1>
      </button>
      <Spacer width="100vw" height="10vh" />
    </div>
  );
};
