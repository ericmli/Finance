import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgProfil(props) {
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
        clipRule="evenodd"
        d="M23.985 17.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948z"
        stroke="#9CA4AB"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M23.985 14.006a4.596 4.596 0 10-4.596-4.596 4.58 4.58 0 004.564 4.596h.032z"
        stroke="#9CA4AB"
        strokeWidth={1.42857}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgProfil
