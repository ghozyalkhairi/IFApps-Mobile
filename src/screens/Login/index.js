import {Image, SafeAreaView, Text, TextInput, View} from 'react-native'
import Button from '../../components/Button'
import Styles from './styles'

const Login = () => {
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
        <Button text="Login" />
        <Text>
          Belum punya akun? <Text>Daftar</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default Login
