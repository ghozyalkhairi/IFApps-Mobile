import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.other,
    marginHorizontal: -22,
    padding: 22,
    borderRadius: 20,
    height: '42%',
  },
  itemContainer: {
    marginRight: 28,
    borderBottomWidth: 2,
    borderColor: colors.other,
    height: '14%',
  },
  itemContainerActive: {
    marginRight: 28,
    borderBottomWidth: 2,
    borderColor: colors.primary,
    height: '14%',
  },
  text: {
    color: colors.secondary,
    fontSize: 16,
  },
  textActive: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
})

export default Styles
