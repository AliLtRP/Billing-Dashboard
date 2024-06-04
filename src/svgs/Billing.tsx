const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
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
      <path d="M25.333 12H12a2.667 2.667 0 0 0-2.667 2.667v8A2.667 2.667 0 0 0 12 25.333h13.333A2.667 2.667 0 0 0 28 22.667v-8A2.667 2.667 0 0 0 25.333 12Z" />
      <path d="M18.667 21.333a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333ZM22.667 12V9.333A2.667 2.667 0 0 0 20 6.667H6.667A2.667 2.667 0 0 0 4 9.333v8A2.667 2.667 0 0 0 6.667 20h2.666" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
