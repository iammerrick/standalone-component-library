import * as React from "react";
interface ButtonProps {
    children: React.ReactNode;
}
export default function Button(props: ButtonProps): React.DetailedReactHTMLElement<{
    onClick: () => void;
}, HTMLElement>;
export {};
