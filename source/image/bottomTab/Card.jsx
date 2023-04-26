import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgCard(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={24} cy={24} r={24} fill="#FDFDFD" />
      <Path
        d="M33.639 16.396H29.59a2.693 2.693 0 01-2.693-2.692 2.693 2.693 0 012.693-2.69h4.048M30.049 13.643h-.312"
        stroke="#9CA4AB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M19.748 5h8.643a5.248 5.248 0 015.248 5.248v7.177a5.248 5.248 0 01-5.248 5.247h-8.643a5.248 5.248 0 01-5.248-5.247v-7.177A5.248 5.248 0 0119.748 5z"
        stroke="#9CA4AB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.036 9.538h5.399"
        stroke="#9CA4AB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgCard
