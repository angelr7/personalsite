import { useState } from "react";
import {
  AboutMeLabel,
  NavBarContainer,
  NavBarButtonStyle,
  NavBarButtonUnderline,
  NavBarButtonContainer,
} from "../styles/AboutMe";

const NavBarButton = ({ label, path }: { label: string; path: string }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        cursor: hovering ? "pointer" : "default",
      }}
      onClick={() => (window.location.href = path)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <h1 style={NavBarButtonStyle}>{label}</h1>
      <div
        id="NavBarButtonUnderline"
        style={{
          ...NavBarButtonUnderline,
          width: hovering ? "100%" : 0,
        }}
      />
    </div>
  );
};

export const NavBar = () => {
  return (
    <div style={NavBarContainer}>
      <h1
        style={{
          ...AboutMeLabel,
          alignSelf: "start",
        }}
      >
        My Skills
      </h1>
      <div style={NavBarButtonContainer}>
        <NavBarButton label="Contact" path="/contact" />
        <NavBarButton label="Home" path="/" />
      </div>
    </div>
  );
};
