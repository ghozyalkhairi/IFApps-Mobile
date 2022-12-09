import {Text, TouchableOpacity} from 'react-native'
import Styles from './styles'

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.container}>
      <Text style={Styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
