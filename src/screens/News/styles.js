import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../theme'

const {height} = Dimensions.get('window')

const Styles = StyleSheet.create({
  container: {
    marginTop: height * 0.07,
    marginHorizontal: 22,
    textAlign: 'left',
  },
  containerNews: {
    marginHorizontal: 22,
    textAlign: 'left',
    paddingBottom: 16,
  },
  text: {
    color: colors.primary,
    fontSize: 24,
  },
})

export default Styles
