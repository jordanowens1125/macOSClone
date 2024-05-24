const DarkSvgComponent = (props) => (
  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" {...props}>
    <g fill="currentColor">
      <path d="M12 16a4 4 0 0 0 0-8z" />
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m0 2v4a4 4 0 1 0 0 8v4a8 8 0 1 0 0-16"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default DarkSvgComponent;
