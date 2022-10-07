import * as React from 'react'
import Svg, { Path, Polygon } from 'react-native-svg'

export function Home() {
  return (
    <Svg width={25} height={25} viewBox="0 0 147 146" fill="none">
      <Path
        fill="#B4B9BD"
        d="M111,73.7l29.2,29.2c-1.5,3.3-3.2,6.5-5.2,9.6L96.2,73.7l39.2-39.2c1.9,3.1,3.6,6.3,5.1,9.7L111,73.7z"
      />
      <Path fill="#B4B9BD" d="M71.2,137l8.7,8.7c4.3-0.4,8.5-1.1,12.5-2.2l-21.2-21.2V137z" />
      <Path fill="#B4B9BD" d="M71.2,54.5l42.4-42.4c-3-2-6.1-3.8-9.4-5.3l-33,33V54.5z" />
      <Path fill="#B4B9BD" d="M71.2,25.1L93.5,2.7c-4-1.1-8.1-2-12.3-2.4l-10,10V25.1z" />
      <Path fill="#B4B9BD" d="M71.2,107.6l32.1,32.1c3.3-1.5,6.5-3.3,9.5-5.2L71.2,92.9V107.6z" />
      <Path
        fill="#B4B9BD"
        d="M129.3,26c-2.3-2.7-4.7-5.2-7.3-7.5L71.2,69.2v9l50,50c2.7-2.3,5.1-4.8,7.4-7.4L81.5,73.7L129.3,26z"
      />
      <Polygon fill="#B4B9BD" points="71.2,122.3 71.2,122.3 71.2,107.6 71.2,107.6 " />

      <Polygon fill="#B4B9BD" points="71.2,92.9 71.2,92.9 71.2,78.2 71.2,78.2 " />
      <Polygon fill="#B4B9BD" points="71.2,39.8 71.2,39.8 71.2,25.1 71.2,25.1 " />
      <Polygon fill="#B4B9BD" points="71.2,69.2 71.2,69.2 71.2,54.5 71.2,54.5 " />
      <Path
        fill="#B4B9BD"
        d="M71.2,0c-3.5,0.1-7,0.5-10.4,1.1v143.8c3.4,0.6,6.9,1,10.4,1.1v-9l0,0v-14.7l0,0v-14.7l0,0V92.9l0,0V78.2l0,0  v-9l0,0V54.5l0,0V39.8l0,0V25.1l0,0V10.3l0,0V0z"
      />
      <Path
        fill="#B4B9BD"
        d="M140.4,73.7l5.8,5.8c-0.4,4.3-1.1,8.5-2.2,12.5l-18.3-18.3l18.6-18.6c1,4.1,1.7,8.3,2,12.7L140.4,73.7z"
      />
      <Path fill="#B4B9BD" d="M9.9,37.2v71.6C3.9,98.2,0.5,86,0.5,73S3.9,47.8,9.9,37.2z" />
      <Path
        fill="#B4B9BD"
        d="M30.8,13.8v118.4c-3.8-2.7-7.2-5.8-10.4-9.1V22.9C23.6,19.6,27.1,16.5,30.8,13.8z"
      />
      <Path
        fill="#B4B9BD"
        d="M51,3.5v138.9c-3.6-1.2-7.1-2.6-10.4-4.3V7.8C44,6.2,47.4,4.7,51,3.5z"
      />
    </Svg>
  )
}

export default React.memo(Home)