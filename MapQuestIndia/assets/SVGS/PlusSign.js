import * as React from "react"
import Svg, { Path } from "react-native-svg"

const PlusSign = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    marginLeft={310}
    marginBottom={-20}
   
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.008}
      d="M8 12h8m-4-4v8m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
)
export default PlusSign
