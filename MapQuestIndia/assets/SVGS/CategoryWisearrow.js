import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CategoryWise = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    stroke="#fff"
    marginLeft={120}
    marginTop={-19}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#fff"
      d="M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z"
    />
  </Svg>
);
export default CategoryWise;
