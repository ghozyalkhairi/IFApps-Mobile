import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

const Styles = StyleSheet.create({
  containerIcon: {
    backgroundColor: colors.primary,
    width: 56,
    height: 56,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 24,
  },
  text: {
    textAlign: 'center',
    flex: 1,
    width: 1,
    color: 'black',
    marginTop: 4,
  },
})

export default Styles