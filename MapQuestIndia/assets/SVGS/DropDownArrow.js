import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DropDownArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={6}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M5.5 6 .737 0h9.526L5.5 6Z" />
  </Svg>
)
export default DropDownArrow
