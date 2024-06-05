const SvgComponent = (props) => (
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
      <path d="M10.667 10.667h10.666v10.666H10.667V10.667Z" />
      <path d="M24 5.333H8A2.667 2.667 0 0 0 5.333 8v16A2.667 2.667 0 0 0 8 26.667h16A2.667 2.667 0 0 0 26.667 24V8A2.667 2.667 0 0 0 24 5.333Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
