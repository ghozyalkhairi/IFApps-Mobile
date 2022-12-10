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
    height: '60%',
  },
  itemContainerActive: {
    marginRight: 28,
    borderBottomWidth: 2,
    borderColor: colors.primary,
    height: '60%',
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
  detail: {
    marginBottom: 90,
  },
  status: {
    fontSize: 14,
    color: colors.secondary,
  },
  statusValue: {
    fontSize: 24,
    color: colors.primary,
    marginVertical: 6,
  },
  date: {
    fontSize: 14,
    color: colors.secondary,
  },
})

export default Styles
