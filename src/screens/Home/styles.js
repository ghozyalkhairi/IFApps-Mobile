import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

const Styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 22,
    marginHorizontal: 22,
    flex: 1,
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
    fontWeight: '500',
    color: 'black',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    color: colors.neutral,
  },
  profil: {
    marginLeft: 8,
  },
})

export default Styles
