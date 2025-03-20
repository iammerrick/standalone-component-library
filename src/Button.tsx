import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return React.createElement(
    "button",
    {
      onClick: () => {
        console.log("Behavior!");
      },
    },
    props.children
  );
}
