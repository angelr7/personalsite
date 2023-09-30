import Showcase from "../ components/Showcase";
import BioSection from "../ components/BioSection";
import { useEffect, useState } from "react";
import { CHARCOAL_BLACK } from "../styles/common";
import { MainContainer } from "../styles/AboutMe";

export default function AboutMe() {
  const [mountShowcase, setMountShowcase] = useState(false);
  const [pageSwitchTriggered, triggerPageSwitch] = useState(false);

  useEffect(() => {
    if (pageSwitchTriggered) {
      setTimeout(() => setMountShowcase(true), 500);
    }
  }, [pageSwitchTriggered]);

  useEffect(() => {
    if (mountShowcase) {
      triggerPageSwitch(false);
    }
  }, [mountShowcase]);

  const shrinkStyle = pageSwitchTriggered
    ? { width: 0, height: 0, margin: "auto", borderRadius: "5vmax" }
    : { margin: "auto" };

  const showcaseBackground = mountShowcase
    ? { backgroundColor: CHARCOAL_BLACK }
    : {};

  return (
    <div
      style={{
        ...MainContainer,
        ...shrinkStyle,
        ...showcaseBackground,
      }}
    >
      {!mountShowcase ? (
        <BioSection triggerPageSwitch={triggerPageSwitch} />
      ) : (
        <Showcase />
      )}
    </div>
  );
}
