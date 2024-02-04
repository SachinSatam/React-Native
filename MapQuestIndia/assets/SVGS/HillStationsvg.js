import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HillStationIcon = (props) => (
  <Svg
  xmlns="http://www.w3.org/2000/svg"
  width={18}
  height={18}
  fill="none"
  marginLeft={3.1}
  marginTop={3.1}
  {...props}
  >
    <Path
      fill="#fff"
      d="m0 13.698 5.446-9.622 1.52 2.684c.138.246.357.39.59.39.231 0 .45-.144.59-.39L11.97 0l7.754 13.698H0Z"
    />
  </Svg>
)
export default HillStationIcon
