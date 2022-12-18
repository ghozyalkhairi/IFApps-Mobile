import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../theme'

const {height} = Dimensions.get('window')

const Styles = StyleSheet.create({
  container: {
    marginTop: height * 0.06,
    marginHorizontal: 22,
    textAlign: 'left',
  },
  contentContainer: {
    paddingHorizontal: 22,
    marginTop: 10,
  },
  foto: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  header: {
    color: colors.primary,
    fontSize: 22,
    marginLeft: 10,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kategori: {
    backgroundColor: colors.primary,
    alignSelf: 'flex-start',
    fontSize: 11,
    marginVertical: 16,
    borderRadius: 13,
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  title: {
    fontSize: 24,
    color: colors.primaryBlack,
  },
  tanggal: {
    fontSize: 16,
    color: colors.secondary,
  },
  konten: {
    fontSize: 18,
    colors: colors.primaryBlack,
    marginTop: 14,
  },
})

export default Styles
