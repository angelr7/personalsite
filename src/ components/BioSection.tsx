import React, { useEffect, useState } from "react";
import Spacer from "../ components/Spacer";
import {
  AboutMeLabel,
  BioText,
  ButtonContainer,
  Expander,
  LinkButton,
  LinkButtonText,
  PictureFrame,
  Slider,
} from "../styles/AboutMe";
import { CenterView, MIDNIGHT_BLUE } from "../styles/common";

export default function BioSection({
  triggerPageSwitch,
}: {
  triggerPageSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [opacity, setOpacity] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [bioOpacity, setBioOpacity] = useState(0);
  const [fadeButton, setFadeButton] = useState(false);

  useEffect(() => {
    if (!opacity) {
      setTimeout(() => setOpacity(1), 500);
      setTimeout(() => setBioOpacity(1), 1000);
    }
  }, [opacity]);

  const buttonFadeStyle = fadeButton ? { opacity: 0 } : {};
  const textHoverStyle = hovering ? { color: MIDNIGHT_BLUE } : {};
  const backgroundHoverStyle = hovering ? { backgroundColor: "#FFF" } : {};

  return (
    <>
      <Spacer width="100vw" height="5vmin" />
      <div style={Expander} />
      <div style={PictureFrame} />
      <Spacer width="100vw" height="2.5vmin" />
      <h1
        style={{
          opacity,
          ...AboutMeLabel,
        }}
      >
        About Me
      </h1>
      <Spacer width="100vw" height="2.5vmin" />
      <h1
        style={{
          ...BioText,
          opacity: bioOpacity,
        }}
      >
        Hello, I'm Angel, a dynamic and versatile computer scientist with a
        passion for bringing digital visions to life. Armed with a Bachelor of
        Science degree in Computer Science from Stanford University, I have
        cultivated a diverse skill set and a wealth of practical experience that
        make me your go-to choice for freelance work.
      </h1>
      <div
        style={{
          ...CenterView,
          ...ButtonContainer,
        }}
      >
        <div
          id="LinkButton"
          style={{
            ...LinkButton,
            ...buttonFadeStyle,
            ...backgroundHoverStyle,
          }}
          onClick={() => {
            setFadeButton(true);
            triggerPageSwitch(true);
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <h1 style={{ ...LinkButtonText, ...textHoverStyle }}>
            See What I Can Do
          </h1>
        </div>
        <div style={Slider} />
      </div>
    </>
  );
}
