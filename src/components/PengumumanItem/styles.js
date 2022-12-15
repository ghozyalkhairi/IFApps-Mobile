import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

const Styles = StyleSheet.create({
  card: {
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: '100%',
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  foto: {
    width: '100%',
    borderRadius: 8,
  },
  category: {
    backgroundColor: colors.primary,
    width: 65,
    fontSize: 12,
    marginTop: 16,
    borderRadius: 13,
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 6,
    fontWeight: 'light',
  },
  heading: {
    marginTop: 15,
    fontWeight: 'bold',
  },
  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
  },
  tanggal: {
    fontSize: 12,
    color: colors.secondary,
    marginTop: 10,
  },
})

export default Styles
