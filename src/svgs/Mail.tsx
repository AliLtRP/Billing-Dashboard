import { Props } from "../types";

const SvgComponent = (props: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
    <g
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M25.333 6.667H6.667A2.667 2.667 0 0 0 4 9.333v13.334a2.667 2.667 0 0 0 2.667 2.666h18.666A2.667 2.667 0 0 0 28 22.667V9.333a2.667 2.667 0 0 0-2.667-2.666Z" />
      <path d="m4 9.333 12 8 12-8" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
