import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 4V20M4 12H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 7H7C5.34315 7 4 8.34315 4 10V14C4 15.6569 5.34315 17 7 17H17C18.6569 17 20 15.6569 20 14V10C20 8.34315 18.6569 7 17 7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
