export const TrendingIcon = ({
  trend,
  width,
  height,
}: {
  trend: 'up' | 'down' | 'neutral';
  width?: number;
  height?: number;
}) => {
  const widthVal = width ?? 16;
  const heightVal = height ?? 16;

  // https://lucide.dev/icons/arrow-up

  if (trend === 'up') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={widthVal}
        height={heightVal}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="green"
      >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
      </svg>
    );
  } else if (trend === 'down') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={widthVal}
        height={heightVal}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        color="red"
      >
        <path d="M12 5v14" />
        <path d="m19 12-7 7-7-7" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={widthVal}
      height={heightVal}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      color="grey"
    >
      <path d="M5 12h14" />
    </svg>
  );
};
