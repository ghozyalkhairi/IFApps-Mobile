import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

const Styles = StyleSheet.create({
  container: {
    backgroundColor: colors.other,
    marginHorizontal: -22,
    padding: 22,
    borderRadius: 20,
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
  detail: {
    marginTop: 20,
    marginBottom: 60,
  },
  status: {
    fontSize: 14,
    color: colors.secondary,
  },
  statusValue: {
    fontSize: 24,
    color: colors.primary,
  },
  date: {
    fontSize: 14,
    color: colors.secondary,
  },
})

export default Styles
