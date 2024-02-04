import * as React from "react"
import Svg, { Path } from "react-native-svg"
const FortsAnchor = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 68 68"
    width={110}
    height={110}
    position="absolute"
    {...props}
  >
    <Path
      fill="#960"
      stroke="#000"
      strokeWidth={0.6}
      d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.605 4 10.144Z"
    />
  </Svg>
)
export default FortsAnchor