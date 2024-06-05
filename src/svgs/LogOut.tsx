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
      stroke="#62618F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M18.667 10.667V8A2.667 2.667 0 0 0 16 5.333H6.667A2.667 2.667 0 0 0 4 8v16a2.667 2.667 0 0 0 2.667 2.667H16A2.667 2.667 0 0 0 18.667 24v-2.667M9.333 16H28m0 0-4-4m4 4-4 4" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
