import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../theme'

const {height} = Dimensions.get('window')

const Styles = StyleSheet.create({
  container: {
    marginTop: height * 0.07,
    marginHorizontal: 22,
    textAlign: 'left',
  },
  title: {
    fontSize: 24,
    color: colors.primary,
    marginBottom: 40,
  },
  thumbnail: {
    borderRadius: 68,
    width: 112,
    height: 112,
  },
  image: {
    alignItems: 'center',
  },
  editIcon: {
    backgroundColor: colors.primaryBlack,
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    top: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  edit: {
    top: 10,
    left: 10,
  },
  desc: {
    fontFamily: 'Poppins-Regular',
  },
  name: {
    fontSize: 24,
    color: colors.primaryBlack,
    marginTop: 25,
    textAlign: 'center',
  },
  email: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 52,
  },
  menuEdit: {
    height: 64,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 2,
  },
  editButton: {
    flexDirection: 'row',
    marginLeft: 16,
    paddingTop: 20,
  },
  editText: {
    marginLeft: 16,
    color: colors.primaryBlack,
  },
  logoutText: {
    marginLeft: 16,
    color: colors.primaryBlack,
  },
  menuLogout: {
    flexDirection: 'row',
    height: 64,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 2,
  },
  logoutButton: {
    flexDirection: 'row',
    marginLeft: 16,
    paddingTop: 20,
  },
})

export default Styles
