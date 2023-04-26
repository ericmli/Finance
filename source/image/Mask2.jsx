import * as React from "react"
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgMaskSmall(props) {
  return (
    <Svg
      width={136}
      height={139}
      viewBox="0 0 136 139"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={59.5}
        cy={76.5}
        r={76.5}
        fill="url(#paint0_linear_6_814)"
        fillOpacity={0.1}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_6_814"
          x1={136}
          y1={8.5}
          x2={73}
          y2={65.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FEFEFE" />
          <Stop offset={1} stopColor="#FEFEFE" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgMaskSmall
