import "react-toastify/dist/ReactToastify.css";
import { BiMailSend } from "react-icons/bi";
import { FaCircleInfo } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import {
  ContactIconContainer,
  ContactIconStyle,
  HeaderContainer,
  MainContainer,
  TypedMessage,
} from "../styles/ContactPage";

const MESSAGE = "Contact Me Today!";
const EMAIL = "ar7@stanford.edu";

const ContactIcon = ({
  icon,
  link,
  onClick,
}: {
  link: string;
  icon: JSX.Element;
  onClick?: () => void;
}) => {
  const [hovering, setHovering] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={onClick ? onClick : () => (window.location.href = link)}
      style={{
        display: "flex",
        position: "relative",
        flexDirection: "column",
        cursor: hovering ? "pointer" : "default",
      }}
    >
      {icon}
      <div
        style={{
          bottom: "-15px",
          height: "1vmin",
          position: "absolute",
          backgroundColor: "#FFF",
          transition: "width 0.25s",
          width: hovering ? "100%" : 0,
        }}
      />
    </div>
  );
};

export default function ContactPage() {
  const currIndex = useRef(0);
  const [mounted, setMounted] = useState(false);
  const [startFade, setStartFade] = useState(false);
  const [displayMessage, setDisplayMessage] = useState("");
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    } else {
      setStartAnimation(true);
    }
  }, [mounted]);

  useEffect(() => {
    if (startAnimation && currIndex.current < MESSAGE.length) {
      setTimeout(() => {
        setDisplayMessage(MESSAGE.slice(0, currIndex.current + 1));
        currIndex.current++;
      }, 100);
    } else if (currIndex.current === MESSAGE.length) {
      setStartFade(true);
    }
  }, [currIndex, displayMessage, startAnimation]);

  return (
    <div style={MainContainer}>
      <div style={HeaderContainer}>
        <h1 style={TypedMessage}>{displayMessage}</h1>
      </div>
      <div style={{ ...ContactIconContainer, opacity: startFade ? 1 : 0 }}>
        <ContactIcon
          icon={<BsLinkedin style={ContactIconStyle} />}
          link="https://www.linkedin.com/in/angel-ruiz-4a17941b0"
        />
        <ContactIcon
          link="https://github.com/angelr7"
          icon={<BsGithub style={ContactIconStyle} />}
        />
        <ContactIcon
          link={EMAIL}
          onClick={() => {
            navigator.clipboard.writeText(EMAIL);
            toast.info("Email copied to clipboard", {
              theme: "dark",
              draggable: true,
              autoClose: 2000,
              closeOnClick: true,
              pauseOnHover: true,
              progress: undefined,
              position: "top-center",
              hideProgressBar: false,
            });
          }}
          icon={<BiMailSend style={ContactIconStyle} />}
        />
      </div>
      <ToastContainer
        draggable
        rtl={false}
        closeOnClick
        pauseOnHover
        theme="dark"
        pauseOnFocusLoss
        autoClose={5000}
        newestOnTop={false}
        position="top-center"
        hideProgressBar={false}
        progressStyle={{ backgroundColor: "#FFF" }}
        icon={<FaCircleInfo style={{ color: "#FFF" }} />}
      />
    </div>
  );
}
