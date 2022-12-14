import {StyleSheet} from 'react-native'
import {colors} from '../../theme'

const Styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 22,
    textAlign: 'left',
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    fontFamily: 'Poppins',
    fontWeight: 'medium',
    marginLeft: 13,
  },
  menuEdit: {
    flexDirection: 'row',
  },
  form: {
    marginTop: 63,
  },
  input: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    marginBottom: 24,
    borderRadius: 10,
    paddingTop: 20,
    paddingLeft: 15,
  },
  textInput: {
    fontSize: 18,
    marginLeft: 14,
    marginTop: -20,
    paddingVertical: 15,
  },
})

export default Styles
