export type CSS = React.CSSProperties;

export const LIGHT_GRAY = "#CCC";
export const GUNMETAL_GRAY = "#333";
export const CHARCOAL_BLACK = "#111";
export const MIDNIGHT_BLUE = "#001F3F";
export const OPEN_SANS = '"Open Sans", sans-serif';

export const FullScreenContainer: CSS = {
  width: "100vw",
  height: "100vh",
};

export const CenterView: CSS = {
  alignItems: "center",
  justifyContent: "center",
};

export const Button: React.CSSProperties = {
  padding: "1.5vmax",
  borderColor: "#FFF",
  borderRadius: "7.5px",
  backgroundColor: "transparent",
};

export const ButtonText: React.CSSProperties = {
  margin: 0,
  color: "#FFF",
  fontFamily: OPEN_SANS,
};

export interface AnimationConfig {
  animationName: string;
  animationDuration: string;
  animationDelay?: string;
  animationFillMode?: string;
  animationDirection?: string;
  animationTimingFunction?: string;
  animationIterationCount?: number | string;
}

export const configureAnimation = ({
  animationName,
  animationDuration,
  animationDelay = "0s",
  animationIterationCount = 1,
  animationFillMode = "forwards",
  animationDirection = "forward",
  animationTimingFunction = "linear",
}: AnimationConfig) => {
  return {
    animationName,
    animationDelay,
    animationFillMode,
    animationDuration,
    animationDirection,
    animationIterationCount,
    animationTimingFunction,
  };
};
