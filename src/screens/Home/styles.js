import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

const Styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 22,
    marginHorizontal: 22,
    height: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  foto: {
    width: 64,
    height: 64,
  },
  title: {
    fontSize: 24,
    color: 'black',
  },
  subtitle: {
    fontSize: 18,
    color: colors.neutral,
  },
  profil: {
    marginLeft: 12,
  },
  pengumuman: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    marginTop: 24,
  },
})

export default Styles
