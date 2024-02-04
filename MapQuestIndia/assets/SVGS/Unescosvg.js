import * as React from "react"
import Svg, { Path } from "react-native-svg"
const UnescoIcon = (props) => (
  <Svg
  xmlns="http://www.w3.org/2000/svg"
  width={18}
  height={18}
  fill="none"
  marginLeft={5.1}
  marginTop={3.1}
  {...props}
  >
    <Path
      fill="#fff"
      stroke="#fff"
      d="M1.236 6.246h12.665c.306-.136.292-.426.006-.619C13.62 5.434 7.557 1 7.557 1S1.541 5.434 1.236 5.627c-.305.193-.324.483 0 .619Zm6.321-3.057c.506 0 .916.415.916.928 0 .512-.41.927-.916.927a.922.922 0 0 1-.915-.927c0-.513.41-.928.915-.928Zm-6.006 9.945h12.034v-.518H1.551v.518Zm2.606-1.059V7.35h.512v-.586H2.053v.533h.513v4.778h1.591Zm4.207 0V7.316h.513v-.519H6.26v.499h.512v4.778h1.591v.001Zm-7.335 2.12h13.08v-.485H1.028v.485Zm11.51-2.12V7.316h.512v-.519h-2.616v.499h.513v4.778h1.59v.001Z"
    />
  </Svg>
)
export default UnescoIcon
