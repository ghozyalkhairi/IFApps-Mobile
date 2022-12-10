import {Image, SafeAreaView, Text, TextInput, View} from 'react-native'
import Button from '../../components/Button'
import Styles from './styles'

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <Image
        style={Styles.logo}
        source={require('../../assets/images/logo.png')}
      />
      <View style={Styles.form}>
        <Text style={Styles.title}>Login</Text>
        <View style={Styles.input}>
          <TextInput placeholder="email" />
        </View>
        <View style={Styles.input}>
          <TextInput placeholder="password" />
        </View>
        <Button text="Login" onPress={() => navigation.navigate('IFApps')} />
        <Text style={Styles.keterangan}>
          Belum punya akun?{' '}
          <Text
            onPress={() => navigation.navigate('Register')}
            style={Styles.link}>
            Daftar
          </Text>{' '}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Login
