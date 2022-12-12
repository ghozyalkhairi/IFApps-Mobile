import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 22,
    justifyContent: 'space-between',
  },
  itemLogo: {
    alignItems: 'center',
  },
  logo: {
    marginTop: 45,
    height: 114,
    width: 114,
  },
  item: {marginTop: 8},
  itemLabel: {
    marginBottom: 9,
  },
  title: {
    fontSize: 32,
    color: 'black',
    marginTop: 14,
  },
  textField: {
    backgroundColor: colors.other,
    borderColor: colors.secondary,
    borderWidth: 2,
    paddingLeft: 16,
    borderRadius: 10,
    height: 42,
    fontFamily: 'Poppins-Light',
    paddingBottom: 8,
  },
  textFieldRed: {
    backgroundColor: colors.subtleRed,
    borderColor: 'red',
    borderWidth: 2,
    paddingLeft: 16,
    borderRadius: 10,
    height: 42,
    fontFamily: 'Poppins-Light',
    paddingBottom: 8,
  },
  checkbox: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textCheckBox: {
    marginTop: 7,
    fontSize: 12,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    marginVertical: 20,
  },
})

export default Styles
