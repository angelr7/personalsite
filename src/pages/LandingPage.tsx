import "../styles/LandingPage.css";
import {
  AnimatedIntroText,
  AnimatedLinkSlider,
  IntroLink,
  MainContainer,
} from "../styles/LandingPage";
import Spacer from "../ components/Spacer";
import { useEffect, useRef, useState } from "react";
import { LIGHT_GRAY } from "../styles/common";

const INTRO_TEXT = "Hi, I'm Angel!";

export default function LandingPage() {
  const loaded = useRef(false);
  const currCharIdx = useRef(0);
  const [introText, setIntroText] = useState("");
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
    } else if (currCharIdx.current < INTRO_TEXT.length) {
      setTimeout(() => {
        setIntroText(INTRO_TEXT.slice(0, ++currCharIdx.current));
      }, 75);
    } else {
      const link = document.getElementById("IntroLink");
      const linkSlider = document.getElementById("AnimatedLinkSlider");
      if (link && linkSlider) {
        linkSlider.style.width = "0";
      }
    }
  }, [loaded, introText]);

  const colorChangeStyle = hovering ? { color: "#FFF" } : { color: LIGHT_GRAY };

  return (
    <div style={MainContainer}>
      <h1 style={AnimatedIntroText}>{introText}</h1>
      <Spacer width="100vw" height="10vh" />
      <div style={{ position: "relative" }}>
        <a
          href="/about"
          id="IntroLink"
          style={{ ...IntroLink, ...colorChangeStyle }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          Learn more about me
        </a>
        <div id="AnimatedLinkSlider" style={AnimatedLinkSlider} />
      </div>
    </div>
  );
}
