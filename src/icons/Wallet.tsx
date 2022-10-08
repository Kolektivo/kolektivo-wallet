import * as React from 'react'
import Svg, { Ellipse, G, Path } from 'react-native-svg'
import Colors from 'src/styles/colors'

const Wallet = ({ size = 24, color = Colors.dark as string }) => {
  const width = Math.floor((86 / 81) * size)
  return (
    <Svg width={width} height={size} viewBox="0 0 32 30" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.1334 9.27118H31.8327C31.8327 3.89227 28.6097 0.75 23.149 0.75H8.84972C3.38898 0.75 0.166016 3.89227 0.166016 9.20258V20.7974C0.166016 26.1077 3.38898 29.25 8.84972 29.25H23.149C28.6097 29.25 31.8327 26.1077 31.8327 20.7974V20.3034H25.1334C22.0243 20.3034 19.5038 17.8461 19.5038 14.8148C19.5038 11.7834 22.0243 9.32607 25.1334 9.32607V9.27118ZM25.1334 11.6313H30.6505C31.3034 11.6313 31.8327 12.1474 31.8327 12.7839V16.7907C31.8251 17.4242 31.3002 17.9359 30.6505 17.9433H25.2601C23.6861 17.964 22.3097 16.9133 21.9527 15.4185C21.7739 14.4906 22.0249 13.5331 22.6384 12.8027C23.2519 12.0722 24.1651 11.6435 25.1334 11.6313ZM25.3727 15.8439H25.8934C26.5619 15.8439 27.1038 15.3156 27.1038 14.6638C27.1038 14.0121 26.5619 13.4838 25.8934 13.4838H25.3727C25.053 13.4801 24.7451 13.6013 24.5177 13.8205C24.2903 14.0396 24.1623 14.3384 24.1623 14.6501C24.1623 15.3041 24.7019 15.8364 25.3727 15.8439ZM7.6675 9.27118H16.6045C17.273 9.27118 17.8149 8.74285 17.8149 8.09112C17.8149 7.43938 17.273 6.91105 16.6045 6.91105H7.6675C7.00449 6.91101 6.46484 7.43103 6.45713 8.0774C6.45708 8.73138 6.99676 9.26367 7.6675 9.27118Z"
        fill={color}
      />
    </Svg>
  )
}

export default Wallet
