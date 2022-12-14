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
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    marginBottom: 24,
    borderRadius: 10,
    paddingLeft: 15,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  textInput: {
    fontSize: 18,
    marginTop: 4,
    marginLeft: 8,
    paddingVertical: 12,
    fontFamily: 'Poppins-Regular',
    width: '100%',
  },
})

export default Styles
