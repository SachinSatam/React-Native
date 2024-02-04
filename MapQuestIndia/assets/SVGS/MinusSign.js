import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MinusSign = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={25}
    height={25}
    marginLeft={310}
    marginBottom={-20}
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.248}
      d="M8 12h8m5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
)
export default MinusSign
