import type { SVGProps } from 'react';

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
        d="M9 11.5L12 14.5L15 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12C2 7.28599 5.86243 3.5 10.6 3.5H13.4C18.1376 3.5 22 7.28599 22 12V13C22 17.714 18.1376 21.5 13.4 21.5H10.6C5.86243 21.5 2 17.714 2 13V12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M18.5 7C18.5 7 19 7.5 19.5 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
