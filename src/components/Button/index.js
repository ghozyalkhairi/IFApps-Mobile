import {Text, TouchableOpacity} from 'react-native'
import Styles from './styles'

const Button = ({text, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[Styles.container, style]}>
      <Text style={Styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
