import {Text} from 'react-native'

const CustomText = ({children, style, weight, onPress}) => {
  const getFontFamily = () => {
    switch (weight) {
      case 'light':
        return 'Poppins-Light'
      case 'regular':
        return 'Poppins-Regular'
      case 'semi':
        return 'Poppins-SemiBold'
      case 'bold':
        return 'Poppins-Bold'
    }
  }
  return (
    <Text onPress={onPress} style={[style, {fontFamily: getFontFamily()}]}>
      {children}
    </Text>
  )
}

CustomText.defaultProps = {
  weight: 'regular',
}

export default CustomText
