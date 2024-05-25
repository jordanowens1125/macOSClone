const SvgComponent = ({ fill = "currentColor", stroke = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 12 6 6m6 6 6 6m-6-6 6-6m-6 6-6 6"
    />
  </svg>
);
export default SvgComponent;
