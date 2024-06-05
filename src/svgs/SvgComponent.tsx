const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
    <g
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <path d="M22.667 14.667H9.333a2.667 2.667 0 0 0-2.666 2.666v8A2.667 2.667 0 0 0 9.333 28h13.334a2.667 2.667 0 0 0 2.666-2.667v-8a2.667 2.667 0 0 0-2.666-2.666Z" />
      <path d="M16 22.667A1.333 1.333 0 1 0 16 20a1.333 1.333 0 0 0 0 2.667ZM10.667 14.667V9.333a5.333 5.333 0 1 1 10.666 0v5.334" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
