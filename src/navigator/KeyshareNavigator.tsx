import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs'
import { useIsFocused } from '@react-navigation/native'
import { StackScreenProps, TransitionPresets } from '@react-navigation/stack'
import { memoize } from 'lodash'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useAsync } from 'react-async-hook'
import { useTranslation } from 'react-i18next'
import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native'
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions'
import Animated, { call, greaterThan, onChange } from 'react-native-reanimated'
import { ScrollPager } from 'react-native-tab-view'
import { useDispatch } from 'react-redux'
import { handleDetectedKeyshare } from 'src/import/actions'
import { noHeader } from 'src/navigator/Headers'
import { Screens } from 'src/navigator/Screens'
import { KeyshareTabParamList } from 'src/navigator/types'
import QRScanner from 'src/qrcode/QRScanner'
import QRTabBar from 'src/qrcode/QRTabBar'
import RecoveryKeyshare from 'src/qrcode/RecoveryKeyshareCode'
import UserKeyshare from 'src/qrcode/UserKeyshareCode'
// import UserKeyshare from 'src/qrcode/UserKeyshareCode'
import { QrCode, SVG } from 'src/send/actions'
import Logger from 'src/utils/Logger'
import { ExtractProps } from 'src/utils/typescript'

const Tab = createMaterialTopTabNavigator()

const width = Dimensions.get('window').width
const initialLayout = { width }

type AnimatedScannerSceneProps = StackScreenProps<KeyshareTabParamList, Screens.KeyshareScanner> & {
  position: Animated.Value<number>
}

// Component doing our custom transition for the QR scanner
function AnimatedScannerScene({ route, position, ...props }: AnimatedScannerSceneProps) {
  const isFocused = useIsFocused()
  const [wasFocused, setWasFocused] = useState(isFocused)
  const [isPartiallyVisible, setIsPartiallyVisible] = useState(false)
  const cameraPermission = useAsync(check, [
    Platform.select({ ios: PERMISSIONS.IOS.CAMERA, default: PERMISSIONS.ANDROID.CAMERA }),
  ])
  // DENIED means the permission has not been requested / is denied but requestable
  const hasAskedCameraPermission =
    cameraPermission.result !== undefined && cameraPermission.result !== RESULTS.DENIED

  useEffect(() => {
    if (isFocused && !wasFocused) {
      setWasFocused(true)
    }
  }, [isFocused])

  Animated.useCode(
    () =>
      onChange(
        greaterThan(position, 0),
        call([position], ([value]) => {
          setIsPartiallyVisible(value > 0)
        })
      ),
    [position]
  )

  const animatedStyle = useMemo(() => {
    const opacity = Animated.interpolateNode(position, {
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: Animated.Extrapolate.CLAMP,
    })

    const translateX = Animated.interpolateNode(position, {
      inputRange: [0, 1],
      outputRange: [-width, 0],
      extrapolate: Animated.Extrapolate.CLAMP,
    })

    const scale = Animated.interpolateNode(position, {
      inputRange: [0, 1],
      outputRange: [0.7, 1],
      extrapolate: Animated.Extrapolate.CLAMP,
    })

    return { flex: 1, opacity, transform: [{ translateX, scale }] }
  }, [position])

  const dispatch = useDispatch()
  // This only enables the camera when necessary.
  // There a special treatment for when we haven't asked the user for camera permission yet.
  // In that case we want to wait for the screen to be fully focused before enabling the camera so the
  // prompt doesn't show up in the middle of the slide animation.
  // Indeed, enabling the camera directly triggers the permission prompt with the current version of
  // react-native-camera.
  const enableCamera = isFocused || (isPartiallyVisible && (hasAskedCameraPermission || wasFocused))

  const onBarCodeDetected = memoize(
    (qrCode: QrCode) => {
      Logger.debug('QRScanner', 'Bar code detected')
      dispatch(handleDetectedKeyshare(qrCode))
    },
    (qrCode) => qrCode.data
  )

  return (
    // @ts-expect-error
    <Animated.View style={animatedStyle}>
      {isFocused && <StatusBar barStyle="light-content" />}
      {enableCamera && <QRScanner onBarCodeDetected={onBarCodeDetected} isForKeyshare />}
    </Animated.View>
  )
}

// Use ScrollPager on iOS as it gives a better native feeling
const pager: ExtractProps<typeof Tab.Navigator>['pager'] =
  Platform.OS === 'ios' ? (props) => <ScrollPager {...props} /> : undefined

export default function KeyshareNavigator() {
  const position = useRef(new Animated.Value(0)).current
  const qrSvgRef = useRef<SVG>()
  const { t } = useTranslation()

  const tabBar = (props: MaterialTopTabBarProps) => <QRTabBar {...props} qrSvgRef={qrSvgRef} />

  return (
    <Tab.Navigator
      position={position}
      tabBar={tabBar}
      // Trick to position the tabs floating on top
      tabBarPosition="bottom"
      pager={pager}
      style={styles.container}
      sceneContainerStyle={styles.sceneContainerStyle}
      initialLayout={initialLayout}
    >
      <Tab.Screen name={Screens.UserKeyshareCode} options={{ title: t('myCode') }}>
        {(props) => <UserKeyshare {...props} qrSvgRef={qrSvgRef} />}
      </Tab.Screen>
      <Tab.Screen name={Screens.RecoveryKeyshareCode} options={{ title: t('untitled') }}>
        {(props) => <RecoveryKeyshare {...props} qrSvgRef={qrSvgRef} />}
      </Tab.Screen>
      <Tab.Screen name={Screens.KeyshareScanner} options={{ title: t('scanCode') }}>
        {(props) => <AnimatedScannerScene {...props} position={position} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

KeyshareNavigator.navigationOptions = {
  ...noHeader,
  ...TransitionPresets.ModalTransition,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  sceneContainerStyle: {
    backgroundColor: 'black',
  },
})