import {Text, TouchableOpacity} from 'react-native'
import CustomText from '../CustomText'
import Styles from './styles'

const Button = ({text, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[Styles.container, style]}>
      <CustomText weight="semi" style={Styles.text}>
        {text}
      </CustomText>
    </TouchableOpacity>
  )
}

export default Button
