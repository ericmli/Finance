import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgStatistic(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.121 19.563a.75.75 0 01-.75-.75v-6.86a.75.75 0 011.5 0v6.86a.75.75 0 01-.75.75M23.788 19.561a.75.75 0 01-.75-.75V8.67a.75.75 0 011.5 0V18.81a.75.75 0 01-.75.75M28.378 19.561a.75.75 0 01-.75-.75v-3.233a.75.75 0 011.5 0v3.233a.75.75 0 01-.75.75"
        fill="#9CA4AB"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.064 4.5c-2.772 0-4.564 1.897-4.564 4.835v8.83c0 2.938 1.792 4.835 4.564 4.835h9.372C31.209 23 33 21.103 33 18.165v-8.83C33 6.397 31.209 4.5 28.436 4.5h-9.372zm9.372 20h-9.372C15.437 24.5 13 21.954 13 18.165v-8.83C13 5.546 15.437 3 19.064 3h9.372C32.063 3 34.5 5.546 34.5 9.335v8.83c0 3.789-2.437 6.335-6.064 6.335z"
        fill="#9CA4AB"
      />
    </Svg>
  )
}

export default SvgStatistic
