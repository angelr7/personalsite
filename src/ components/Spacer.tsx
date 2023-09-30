interface SpacerProps {
  width?: string | number;
  height?: string | number;
}

export default function Spacer({ width, height }: SpacerProps) {
  if (!width && !height) {
    console.error("Spacer must have either a width or height component");
    return <></>;
  }

  // If either width or height isn't provided, make sure to
  // fill by default
  let spacerWidth = width;
  let spacerHeight = height;
  if (!spacerWidth) {
    spacerWidth = "100vw";
  } else if (!spacerHeight) {
    spacerHeight = "100vh";
  }

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        width: spacerWidth,
        height: spacerHeight,
      }}
    />
  );
}
