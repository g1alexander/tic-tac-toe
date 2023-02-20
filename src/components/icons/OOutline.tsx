function OOutline({
  state,
  width = 32,
  height = 32,
}: {
  state: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16ZM9.48145 16C9.48145 12.3999 12.3999 9.48147 16 9.48147C19.6 9.48147 22.5185 12.3999 22.5185 16C22.5185 19.6001 19.6 22.5185 16 22.5185C12.3999 22.5185 9.48145 19.6001 9.48145 16Z"
        strokeWidth="2"
        stroke={!state ? "#A8BFC9" : "#1A2A33"}
        fill={state ? "#A8BFC9" : "#1A2A33"}
      />
    </svg>
  );
}

export default OOutline;
