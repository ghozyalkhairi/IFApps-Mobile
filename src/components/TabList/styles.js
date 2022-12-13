import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.other,
    marginHorizontal: -22,
    padding: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 30,
  },
  itemContainer: {
    marginRight: 28,
    borderBottomWidth: 2,
    borderColor: colors.other,
  },
  itemContainerActive: {
    marginRight: 28,
    borderBottomWidth: 2,
    borderColor: colors.primary,
  },
  text: {
    color: colors.secondary,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    paddingBottom: 4,
  },
  textActive: {
    color: colors.primary,
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    paddingBottom: 4,
  },
})

export default Styles
