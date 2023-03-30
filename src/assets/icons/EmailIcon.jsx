const EmailIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_474_242)">
        <circle cx="20" cy="20" r="20" fill="#0097DA" />
      </g>
      <path
        d="M28.6666 12.1812H11.3333C10.1416 12.1812 9.17746 13.1219 9.17746 14.2718L9.16663 26.8157C9.16663 27.9655 10.1416 28.9063 11.3333 28.9063H28.6666C29.8583 28.9063 30.8333 27.9655 30.8333 26.8157V14.2718C30.8333 13.1219 29.8583 12.1812 28.6666 12.1812ZM28.6666 16.3624L20 21.589L11.3333 16.3624V14.2718L20 19.4984L28.6666 14.2718V16.3624Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_i_474_242"
          x="0"
          y="0"
          width="40"
          height="44"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_474_242"
          />
        </filter>
      </defs>
    </svg>
  );
};
export default EmailIcon;
