import * as React from "react"
import Svg, {
  Mask,
  Rect,
  G,
  Circle,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg"

function SvgMask(props) {
  return (
    <Svg
      width={207}
      height={303}
      viewBox="0 0 207 303"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={207}
        height={263}
      >
        <Rect width={207} height={263} rx={16} fill="#4F3D56" />
      </Mask>
      <G mask="url(#a)" fillOpacity={0.1}>
        <Circle
          cx={59.5}
          cy={200.5}
          r={138.5}
          fill="url(#paint0_linear_6_811)"
        />
        <Circle
          cx={59.5}
          cy={200.5}
          r={76.5}
          fill="url(#paint1_linear_6_811)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_6_811"
          x1={192.5}
          y1={64.5}
          x2={59}
          y2={189}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FEFEFE" />
          <Stop offset={1} stopColor="#FEFEFE" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_6_811"
          x1={136}
          y1={132.5}
          x2={73}
          y2={189.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FEFEFE" />
          <Stop offset={1} stopColor="#FEFEFE" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgMask
