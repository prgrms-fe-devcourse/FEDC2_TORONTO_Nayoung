export const LoaderList = (type, sizeStyle, color) => {
  switch (type) {
    case 'spinner':
      return (
        <svg
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
          style={sizeStyle}
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)">
              <path
                d="M36 18c0-9.94-8.06-18-18-18"
                stroke={color}
                strokeWidth="2"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="0.9s"
                  repeatCount="indefinite"
                />
              </path>
              <circle fill={color} cx="36" cy="18" r="1">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="0.9s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        </svg>
      );
    case 'three-dots':
      return (
        <svg
          style={sizeStyle}
          viewBox="0 0 120 30"
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
        >
          <circle cx="15" cy="15" r="15" fill={color}>
            <animate
              attributeName="r"
              from="15"
              to="15"
              begin="0s"
              dur="0.8s"
              values="15;9;15"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              from="1"
              to="1"
              begin="0s"
              dur="0.8s"
              values="1;.5;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="60" cy="15" r="9" fillOpacity="0.3" fill={color}>
            <animate
              attributeName="r"
              from="9"
              to="9"
              begin="0s"
              dur="0.8s"
              values="9;15;9"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              from="0.5"
              to="0.5"
              begin="0s"
              dur="0.8s"
              values=".5;1;.5"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="105" cy="15" r="15" fill={color}>
            <animate
              attributeName="r"
              from="15"
              to="15"
              begin="0s"
              dur="0.8s"
              values="15;9;15"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fillOpacity"
              from="1"
              to="1"
              begin="0s"
              dur="0.8s"
              values="1;.5;1"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      );
    case 'spinners':
      return (
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          style={sizeStyle}
        >
          <path
            fill={color}
            d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
  c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="2s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
          <path
            fill={color}
            d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
  c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 50 50"
              to="-360 50 50"
              repeatCount="indefinite"
            />
          </path>
          <path
            fill={color}
            d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
  L82,35.7z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="2s"
              from="0 50 50"
              to="360 50 50"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      );
    case 'spinning-circles':
      return (
        <svg
          style={sizeStyle}
          viewBox="0 0 58 58"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(2 1)" stroke="#FFF" strokeWidth="1.5">
              <circle
                cx="42.601"
                cy="11.462"
                r="5"
                fillOpacity="1"
                fill={color}
              >
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="1;0;0;0;0;0;0;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="49.063"
                cy="27.063"
                r="5"
                fillOpacity="0"
                fill={color}
              >
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;1;0;0;0;0;0;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="42.601"
                cy="42.663"
                r="5"
                fillOpacity="0"
                fill={color}
              >
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;0;1;0;0;0;0;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="27" cy="49.125" r="5" fillOpacity="0" fill={color}>
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;0;0;1;0;0;0;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="11.399"
                cy="42.663"
                r="5"
                fillOpacity="0"
                fill={color}
              >
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;0;0;0;1;0;0;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="4.938" cy="27.063" r="5" fillOpacity="0" fill={color}>
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;0;0;0;0;1;0;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="11.399"
                cy="11.462"
                r="5"
                fillOpacity="0"
                fill={color}
              >
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;0;0;0;0;0;1;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="27" cy="5" r="5" fillOpacity="0" fill={color}>
                <animate
                  attributeName="fill-opacity"
                  begin="0s"
                  dur="1.3s"
                  values="0;0;0;0;0;0;0;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        </svg>
      );
    case 'puff':
      return (
        <svg
          style={sizeStyle}
          viewBox="0 0 44 44"
          xmlns="http://www.w3.org/2000/svg"
          stroke={color}
        >
          <g fill="none" fillRule="evenodd" strokeWidth="2">
            <circle cx="22" cy="22" r="1">
              <animate
                attributeName="r"
                begin="0s"
                dur="1.8s"
                values="1; 20"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.165, 0.84, 0.44, 1"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                begin="0s"
                dur="1.8s"
                values="1; 0"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.3, 0.61, 0.355, 1"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="22" cy="22" r="1">
              <animate
                attributeName="r"
                begin="-0.9s"
                dur="1.8s"
                values="1; 20"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.165, 0.84, 0.44, 1"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                begin="-0.9s"
                dur="1.8s"
                values="1; 0"
                calcMode="spline"
                keyTimes="0; 1"
                keySplines="0.3, 0.61, 0.355, 1"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      );
    case 'audio':
      return (
        <svg
          style={sizeStyle}
          viewBox="0 0 55 80"
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
        >
          <g transform="matrix(1 0 0 -1 0 80)">
            <rect width="10" height="20" rx="3">
              <animate
                attributeName="height"
                begin="0s"
                dur="4.3s"
                values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="15" width="10" height="80" rx="3">
              <animate
                attributeName="height"
                begin="0s"
                dur="2s"
                values="80;55;33;5;75;23;73;33;12;14;60;80"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="30" width="10" height="50" rx="3">
              <animate
                attributeName="height"
                begin="0s"
                dur="1.4s"
                values="50;34;78;23;56;23;34;76;80;54;21;50"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="45" width="10" height="30" rx="3">
              <animate
                attributeName="height"
                begin="0s"
                dur="2s"
                values="30;45;13;80;56;72;45;76;34;23;67;30"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </rect>
          </g>
        </svg>
      );
    default:
      console.error('No matched loader');
      break;
  }
};
