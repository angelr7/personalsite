import { useState } from "react";
import { LanguageIconLabel, LanguageName } from "../styles/AboutMe";

export const AnimatedLanguageIcon = ({
  name,
  icon,
}: {
  name: string;
  icon: JSX.Element;
}) => {
  const [hovering, setHovering] = useState(false);
  return (
    <div
      id="LanguageIconParent"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{ position: "relative", cursor: "pointer" }}
    >
      {icon}
      <div
        style={{
          ...LanguageIconLabel,
          width: hovering ? "100%" : 0,
        }}
      >
        <h1 style={{ ...LanguageName, opacity: hovering ? 1 : 0 }}>{name}</h1>
      </div>
    </div>
  );
};
