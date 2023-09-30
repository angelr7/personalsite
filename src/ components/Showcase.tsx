import { NavBar } from "./NavBar";
import { FaPython } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import { useEffect, useState } from "react";
import { TbBrandReact } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { AnimatedLanguageIcon } from "./AnimatedLanguageIcon";
import { ShowcaseIconContainer } from "./ShowcaseIconContainer";
import { SiC, SiExpo, SiMysql, SiSqlite } from "react-icons/si";
import { LanguageIcon, LanguageIconContainer } from "../styles/AboutMe";
import {
  BiLogoCss3,
  BiLogoJava,
  BiLogoApple,
  BiLogoHtml5,
  BiLogoGoLang,
  BiLogoAndroid,
  BiLogoCPlusPlus,
  BiLogoTypescript,
  BiLogoPostgresql,
} from "react-icons/bi";

export default function Showcase() {
  const [mounted, setMounted] = useState(false);
  const [fadeShowcase, setFadeShowcase] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    } else {
      setTimeout(() => {
        setFadeShowcase(true);
      }, 1000);
    }
  }, [mounted]);

  const fadeStyle = fadeShowcase ? { opacity: 1 } : {};
  const languageIconStyle = { ...LanguageIcon, ...fadeStyle };

  return (
    <>
      <NavBar />
      <ShowcaseIconContainer triggerFade={fadeShowcase} />
      <div style={LanguageIconContainer}>
        <AnimatedLanguageIcon
          name="Python"
          icon={<FaPython style={languageIconStyle} />}
        />
        <AnimatedLanguageIcon
          name="Javascript"
          icon={<IoLogoJavascript style={languageIconStyle} />}
        />
        <AnimatedLanguageIcon
          name="Typescript"
          icon={
            <BiLogoTypescript
              style={{ ...languageIconStyle, transform: "scale(1.15)" }}
            />
          }
        />
        <AnimatedLanguageIcon
          name="HTML5"
          icon={<BiLogoHtml5 style={languageIconStyle} />}
        />
        <AnimatedLanguageIcon
          name="CSS3"
          icon={<BiLogoCss3 style={languageIconStyle} />}
        />
        <AnimatedLanguageIcon
          name="React"
          icon={<TbBrandReact style={languageIconStyle} />}
        />
        <AnimatedLanguageIcon
          name="Go"
          icon={
            <BiLogoGoLang
              style={{ ...languageIconStyle, transform: "scale(2)" }}
            />
          }
        />
        <AnimatedLanguageIcon
          name="GraphQL"
          icon={<GrGraphQl style={languageIconStyle} />}
        />
        <AnimatedLanguageIcon
          name="Postgres"
          icon={<BiLogoPostgresql style={languageIconStyle} />}
        />
        <AnimatedLanguageIcon
          name="SQLite"
          icon={<SiSqlite style={languageIconStyle} />}
        />
        <AnimatedLanguageIcon
          name="MySQL"
          icon={<SiMysql style={languageIconStyle} />}
        />
        <AnimatedLanguageIcon
          name="Java"
          icon={<BiLogoJava style={languageIconStyle} />}
        />
        <AnimatedLanguageIcon
          name="C++"
          icon={<BiLogoCPlusPlus style={languageIconStyle} />}
        />
        <AnimatedLanguageIcon
          name="C"
          icon={
            <SiC style={{ ...languageIconStyle, transform: "scale(0.8)" }} />
          }
        />
        <AnimatedLanguageIcon
          name="Android"
          icon={<BiLogoAndroid style={languageIconStyle} />}
        />
        <AnimatedLanguageIcon
          name="iOS"
          icon={<BiLogoApple style={languageIconStyle} />}
        />
        <AnimatedLanguageIcon
          name="Expo"
          icon={
            <SiExpo style={{ ...languageIconStyle, transform: "scale(0.8)" }} />
          }
        />
      </div>
    </>
  );
}
