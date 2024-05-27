const CheckSvgComponent = ({
  fill = "currentColor",
  stroke = "currentColor",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#000"
    strokeWidth={0.96}
    viewBox="0 0 24 24"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M20.61 5.207a1 1 0 0 1 .183 1.403l-10 13a1 1 0 0 1-1.5.097l-5-5a1 1 0 0 1 1.414-1.414l4.195 4.195L19.207 5.39a1 1 0 0 1 1.403-.183Z"
      clipRule="evenodd"
    />
  </svg>
);
export default CheckSvgComponent;
