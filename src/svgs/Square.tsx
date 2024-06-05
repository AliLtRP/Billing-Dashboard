import { Props } from "../types";

const SvgComponent = (props: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M24 5.333H8A2.667 2.667 0 0 0 5.333 8v16A2.667 2.667 0 0 0 8 26.667h16A2.667 2.667 0 0 0 26.667 24V8A2.667 2.667 0 0 0 24 5.333ZM10.667 21.333v.014M10.667 16v.013M10.667 10.667v.013M21.333 21.333v.014M21.333 16v.013M21.333 10.667v.013M16 10.667v.013M16 21.333v.014" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
