import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgHome(props) {
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
        d="M25.717 17.291a2.18 2.18 0 012.184 2.17v3.075c0 .257.206.463.47.47h1.906c1.502 0 2.723-1.207 2.723-2.689v-8.724c-.007-.51-.25-.99-.667-1.309L25.74 5.026a2.416 2.416 0 00-3.011.002l-6.548 5.254a1.675 1.675 0 00-.681 1.328v8.707c0 1.482 1.22 2.688 2.723 2.688h1.924a.486.486 0 00.49-.479c0-.058.008-.116.02-.17V19.46c0-1.189.974-2.16 2.169-2.169h2.89zm4.56 7.214h-1.924c-1.102-.026-1.952-.89-1.952-1.969V19.46a.677.677 0 00-.684-.669H22.83a.677.677 0 00-.674.67v3.065c0 .075-.01.147-.031.215a1.99 1.99 0 01-1.98 1.764h-1.923c-2.33 0-4.223-1.879-4.223-4.188v-8.714A3.154 3.154 0 0115.259 9.1l6.535-5.245a3.912 3.912 0 014.88-.002l6.582 5.25a3.158 3.158 0 011.244 2.48v8.734c0 2.31-1.894 4.188-4.223 4.188z"
        fill="#9CA4AB"
      />

    </Svg>
  )
}

export default SvgHome
