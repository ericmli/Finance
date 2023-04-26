import * as React from "react"
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from "react-native-svg"

function SvgCircle(props) {
  return (
    <Svg
      width={375}
      height={473}
      viewBox="0 0 375 473"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.15}
        d="M-183.555-230.548c101.423-101.424 265.863-101.424 367.287 0 101.423 101.423 101.423 265.863 0 367.286-101.424 101.424-265.864 101.424-367.287 0-101.423-101.423-101.423-265.863 0-367.286zm334.224 334.224c83.163-83.164 83.163-217.998 0-301.162-83.163-83.163-217.998-83.163-301.161 0-83.164 83.164-83.164 217.998 0 301.162 83.163 83.163 217.998 83.163 301.161 0z"
        fill="url(#paint0_linear_6_355)"
        fillOpacity={0.9}
      />
      <Path
        opacity={0.15}
        d="M242.671-255.443c133.96 133.961 133.96 351.154 0 485.114-133.961 133.961-351.154 133.961-485.114 0-133.961-133.96-133.961-351.153 0-485.114 133.961-133.96 351.153-133.96 485.114 0zm-441.445 441.445c109.843 109.842 287.933 109.842 397.776 0 109.842-109.843 109.842-287.933 0-397.775-109.843-109.843-287.933-109.843-397.776-.001-109.842 109.843-109.842 287.933 0 397.776z"
        fill="url(#paint1_linear_6_355)"
        fillOpacity={0.9}
      />
      <Circle
        opacity={0.15}
        cx={0.114337}
        cy={-12.8857}
        r={176.226}
        transform="rotate(-45 .114 -12.886)"
        fill="url(#paint2_linear_6_355)"
        fillOpacity={0.9}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_6_355"
          x1={-183.554}
          y1={205.738}
          x2={183.732}
          y2={-161.549}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0} />
          <Stop offset={0.497674} stopColor="#fff" stopOpacity={0.8} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_6_355"
          x1={-352}
          y1={-47}
          x2={384.5}
          y2={-13}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0} />
          <Stop offset={0.497674} stopColor="#fff" stopOpacity={0.8} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_6_355"
          x1={0.114334}
          y1={-189.111}
          x2={0.114334}
          y2={163.34}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#fff" stopOpacity={0} />
          <Stop offset={0.497674} stopColor="#fff" stopOpacity={0.8} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default SvgCircle
