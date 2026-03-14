export default function Button(props: { 
    direction: string,
    onClick: () => void }
) {
    const rotation = props.direction === "left" ? "rotate-180" : "rotate-0"

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`size-12 cursor-pointer hover:text-blue-500 transition-colors ${rotation}`}
        onClick={props.onClick}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </>
  );
}
