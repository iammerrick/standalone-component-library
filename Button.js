import * as React from "react";

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
