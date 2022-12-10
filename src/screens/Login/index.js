import {Image, SafeAreaView, Text, TextInput, View} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import EmailIcon from '../../assets/icons/email.svg'
import PasswordIcon from '../../assets/icons/password.svg'
import Button from '../../components/Button'
import Styles from './styles'

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={Styles.container}>
      <KeyboardAwareScrollView style={{width: '100%'}}>
        <Image
          style={Styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        <View style={Styles.form}>
          <Text style={Styles.title}>Login</Text>
          <View style={Styles.input}>
            <EmailIcon />
            <TextInput style={Styles.textInput} placeholder="email" />
          </View>
          <View style={Styles.input}>
            <PasswordIcon />
            <TextInput style={Styles.textInput} placeholder="password" />
          </View>
          <Button
            style={{marginTop: 8}}
            text="Login"
            onPress={() => navigation.navigate('IFApps')}
          />
          <Text style={Styles.keterangan}>
            Belum punya akun?{' '}
            <Text
              onPress={() => navigation.navigate('Register')}
              style={Styles.link}>
              Daftar
            </Text>{' '}
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default Login
