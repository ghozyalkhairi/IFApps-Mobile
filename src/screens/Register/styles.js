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
    height: 121,
    width: 121,
  },
  item: {marginTop: 10},
  itemLabel: {
    marginBottom: 9,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 8,
  },
  textField: {
    backgroundColor: colors.other,
    borderWidth: 2,
    borderColor: colors.secondary,
    paddingLeft: 16,
    borderRadius: 10,
    height: 45,
  },
  textFieldRed: {
    backgroundColor: colors.subtleRed,
    borderWidth: 2,
    borderColor: 'red',
    paddingLeft: 16,
    borderRadius: 10,
    height: 45,
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
