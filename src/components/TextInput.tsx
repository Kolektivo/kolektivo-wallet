/**
 * TextInput with a button to clear input
 */

import * as React from 'react'
import {
  NativeSyntheticEvent,
  Platform,
  StyleProp,
  StyleSheet,
  TextInput as RNTextInput,
  TextInputFocusEventData,
  TextInputProps as RNTextInputProps,
  View,
  ViewStyle,
} from 'react-native'
import CircleButton from 'src/components/CircleButton'
import colors from 'src/styles/colors'
import fontStyles from 'src/styles/fonts'

export const LINE_HEIGHT = Platform.select({ android: 22, default: 20 })

type Props = Omit<RNTextInputProps, 'style'> & {
  style?: StyleProp<ViewStyle>
  inputStyle?: RNTextInputProps['style']
  onChangeText: (value: string) => void
  testID?: string
  showClearButton?: boolean
  forwardedRef?:
    | ((instance: RNTextInput | null) => void)
    | React.MutableRefObject<RNTextInput | null>
    | null
}

interface State {
  isFocused: boolean
}

export class CTextInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isFocused: props.autoFocus || false,
    }
  }

  handleInputFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    this.setState({ isFocused: true })
    this.props.onFocus?.(e)
  }

  handleInputBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    this.setState({ isFocused: false })
    this.props.onBlur?.(e)
  }

  onClear = () => {
    this.props.onChangeText('')
  }

  render() {
    const {
      style,
      inputStyle,
      value = '',
      showClearButton = true,
      forwardedRef,
      ...passThroughProps
    } = this.props

    const { isFocused = false } = this.state

    return (
      <View style={[styles.container, style]}>
        <RNTextInput
          ref={forwardedRef}
          style={[
            styles.input,
            passThroughProps.multiline && { textAlignVertical: 'top' },
            inputStyle,
          ]}
          value={value}
          {...passThroughProps}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
        />
        {!passThroughProps.multiline && isFocused && !!value && showClearButton && (
          <CircleButton
            style={styles.icon}
            onPress={this.onClear}
            solid={true}
            size={20}
            activeColor={colors.gray5}
            inactiveColor={colors.gray1}
          />
        )}
      </View>
    )
  }
}

const TextInput = React.forwardRef<RNTextInput, Props>((props, ref) => {
  return <CTextInput {...props} forwardedRef={ref || props.forwardedRef} />
})

export default TextInput
export type TextInputProps = Props

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    ...fontStyles.regular,
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 0,
    lineHeight: LINE_HEIGHT, // vertical align = center
  },
  icon: {
    marginLeft: 8,
    zIndex: 100,
  },
})
