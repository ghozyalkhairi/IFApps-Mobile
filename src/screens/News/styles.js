import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../theme'

const {height} = Dimensions.get('window')

const Styles = StyleSheet.create({
  container: {
    marginTop: height * 0.09,
    marginHorizontal: 22,
    textAlign: 'left',
  },
  text: {
    color: colors.primary,
    fontSize: 24,
  },
})

export default Styles
