interface SpinnerProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
}
export function Spinner({ className, size = "xs" }: SpinnerProps) {
  const spinnerSize = {
    xs: "h-5 w-5",
    sm: "h-10 w-10",
    md: "h-20 w-20",
    lg: "h-32 w-32",
  }[size];

  return (
    <div className={className}>
      <svg
        className={`-ml-1 mr-3 animate-spin ${spinnerSize} `}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
    </div>
  );
}
