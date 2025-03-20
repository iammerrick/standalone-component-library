import * as React from "https://cdn.jsdelivr.net/npm/react@19.0.0/+esm";

export default function Button(props) {
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
