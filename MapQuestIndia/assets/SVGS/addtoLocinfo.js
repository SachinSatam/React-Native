import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AddToLocInfo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.204 15C3.438 15.588 3 16.271 3 17c0 2.21 4.03 4 9 4s9-1.79 9-4c0-.729-.438-1.412-1.204-2M12 6.5v5M9.5 9h5m3.5.222c0 3.437-2.686 6.222-6 7.778-3.314-1.556-6-4.341-6-7.778C6 5.786 8.686 3 12 3s6 2.786 6 6.222Z"
    />
  </Svg>
)
export default AddToLocInfo
