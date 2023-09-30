import Spacer from "./Spacer";
import { useState } from "react";
import { TbUserCode } from "react-icons/tb";
import { MdOutlineAppShortcut } from "react-icons/md";
import { FaComputer, FaRobot } from "react-icons/fa6";
import {
  ShowcaseIconCover,
  ShowcaseIconStyle,
  ShowcaseIconHeader,
  ShowcaseIconParent,
  ShowcaseDescriptionText,
  ShowcaseIconContainerStyle,
  ShowcaseDescriptionContainer,
} from "../styles/AboutMe";

interface ShowcaseIconProps {
  name: string;
  icon: JSX.Element;
  descriptionItems: string[];
}
const ShowcaseIcon = ({ name, icon, descriptionItems }: ShowcaseIconProps) => {
  const [hovering, setHovering] = useState(false);
  const hoverStyle = hovering ? { cursor: "pointer" } : {};
  const showcaseDescriptionStyle = hovering
    ? { height: "100%", opacity: 1 }
    : {};
  return (
    <div
      style={ShowcaseIconParent}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div style={{ ...ShowcaseIconCover, ...hoverStyle }}>
        {icon}
        <Spacer width="100%" height="2.5vmax" />
        <h1 style={ShowcaseIconHeader}>{name}</h1>
      </div>
      <div
        style={{
          ...ShowcaseDescriptionContainer,
          ...showcaseDescriptionStyle,
        }}
      >
        {descriptionItems.map((item, index) => {
          const last = index === descriptionItems.length - 1;
          return (
            <h1
              key={index}
              style={{
                ...ShowcaseDescriptionText,
                marginBottom: last ? "2.5vmin" : 0,
              }}
            >
              {item}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

export const ShowcaseIconContainer = ({
  triggerFade,
}: {
  triggerFade: boolean;
}) => {
  return (
    <div
      style={{ ...ShowcaseIconContainerStyle, opacity: triggerFade ? 1 : 0 }}
    >
      <ShowcaseIcon
        name="Web Development"
        descriptionItems={[
          `When it comes to the web, I'm a true full-stack developer.`,
          `Whether I'm building your frontend, your backend, or both, I have years of experience working
        with the best tools in the industry.`,
          `I made this entire website from scratch using React, Typescript, and CSS.`,
        ]}
        icon={<FaComputer style={ShowcaseIconStyle} />}
      />
      <ShowcaseIcon
        name="App Development"
        descriptionItems={[
          `I have 3+ years of experience developing mobile applications, and have
        built apps for iOS and Android using Java, React Native, and Swift.`,
          `If you'd like me to develop or work on an app in Kotlin or Flutter,
        I have experience those languages as well.`,
        ]}
        icon={<MdOutlineAppShortcut style={ShowcaseIconStyle} />}
      />
      <ShowcaseIcon
        name="Tutoring and Consulting"
        descriptionItems={[
          `With a bachelor's degree in computer systems, I have a strong knowledge
        of all computer concepts, and can answer a variety of questions ranging from
        general concepts to high-level systems design.`,
          `I have experience teaching computer science and other subjects as a tutor and
        TA at Stanford, and would be happy to do so for you as well. Check out the Contact
        page for more!`,
        ]}
        icon={<TbUserCode style={ShowcaseIconStyle} />}
      />
      <ShowcaseIcon
        name="Bots and Automation"
        descriptionItems={[
          `I have extensive experience with automation in a variety of different programming
        languages.`,
          `I've built bots for Discord, and I have done web scraping with BeatifulSoup and
        Selenium in both Python and Javascript. I'd be happy to build you a custom bot or script
        that is tailored to your needs!`,
        ]}
        icon={<FaRobot style={ShowcaseIconStyle} />}
      />
    </div>
  );
};
