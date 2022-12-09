import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

const Styles = StyleSheet.create({
  container: {
    margin: 22,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '90%',
  },
  logo: {
    height: 160,
    width: 160,
    margin: 40,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.secondary,
    width: '100%',
    marginVertical: 12,
    borderRadius: 10,
    backgroundColor: colors.other,
  },
  title: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 40,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  keterangan: {
    marginTop: 16,
    fontSize: 16,
  },
  link: {
    color: colors.primary,
    fontWeight: 'bold',
  },
})

export default Styles
