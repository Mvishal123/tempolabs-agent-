"use client";

const MovingLines = ({ className }: { className?: string }) => (
  <svg
    className={className ?? ""}
    width="100%"
    height="182"
    viewBox="0 0 1500 182"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="matrix(1 0 1 1 40 181.5)">
      <line
        x1="60"
        y1="0.5"
        x2="-4.37114e-08"
        y2="0.499995"
        stroke="url(#paint0_linear_1723_17237)"
      ></line>
      <defs>
        <linearGradient
          id="paint0_linear_1723_17237"
          x1="60"
          y1="-0.5"
          x2="4.37114e-08"
          y2="-0.500005"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B2A4F7"></stop>
          <stop offset="1" stop-color="#B2A4F7" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </g>
    <g transform="matrix(1 0 1 1 1300 182)">
      <line
        y1="-0.5"
        x2="60"
        y2="-0.5"
        transform="matrix(-1 8.74228e-08 8.74228e-08 1 60 1)"
        stroke="url(#paint0_linear_1723_17236)"
      ></line>
      <defs>
        <linearGradient
          id="paint0_linear_1723_17236"
          x1="0"
          y1="0.5"
          x2="60"
          y2="0.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B2A4F7"></stop>
          <stop offset="1" stop-color="#B2A4F7" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </g>
    <g transform="matrix(1 0 1 1 380 2)">
      <line
        y1="-0.5"
        x2="60"
        y2="-0.5"
        transform="matrix(-1 8.74228e-08 8.74228e-08 1 60 1)"
        stroke="url(#paint0_linear_1723_17236)"
      ></line>
      <defs>
        <linearGradient
          id="paint0_linear_1723_17236"
          x1="0"
          y1="0.5"
          x2="60"
          y2="0.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B2A4F7"></stop>
          <stop offset="1" stop-color="#B2A4F7" stop-opacity="0"></stop>
        </linearGradient>
      </defs>
    </g>
    <path
      d="M2.41399e-05 181H274.608C302.222 181 324.608 158.614 324.608 131V51C324.608 23.3858 346.994 0.999994 374.608 0.999994H1124.89C1152.51 0.999994 1174.89 23.3858 1174.89 51V131C1174.89 158.614 1197.28 181 1224.89 181H1500"
      stroke="#3C2B8F"
    ></path>
  </svg>
);
export default MovingLines;
