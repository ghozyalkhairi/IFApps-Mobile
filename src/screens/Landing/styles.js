import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    color: '#F2F2F2',
    fontSize: 40,
    textAlign: 'center',
    marginTop: 30,
  },
  container: {
    padding: 22,
    justifyContent: 'space-between',
    height: '100%',
  },
  subtitle: {
    color: '#F2F2F2',
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 50,
  },
  byText: {
    color: '#F2F2F2',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    color: '#F2F2F2',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
  },
  top: {
    marginTop: 100,
  },
})

export default Styles
