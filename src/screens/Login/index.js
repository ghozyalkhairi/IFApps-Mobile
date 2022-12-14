import {
  Image,
  SafeAreaView,
  TextInput,
  View,
  ToastAndroid,
  StatusBar,
} from 'react-native'
import {useState} from 'react'
import {authLogin} from '../../request'
import {useUserActions} from '../../stores/userStore'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CustomText from '../../components/CustomText'
import EmailIcon from '../../assets/icons/email.svg'
import PasswordIcon from '../../assets/icons/password.svg'
import Button from '../../components/Button'
import Styles from './styles'

const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {onUserLogIn} = useUserActions()
  const loginUser = () => {
    if (!email.length || !password.length)
      return ToastAndroid.show(
        'Form input tidak boleh ada yang kosong',
        ToastAndroid.SHORT,
      )
    const data = {
      email,
      password,
    }
    authLogin(data)
      .then(resp => {
        if (resp.data.status) {
          ToastAndroid.show(resp.data.message, ToastAndroid.SHORT)
          onUserLogIn({
            name: resp.data.user.name,
            email: resp.data.user.email,
            token: resp.data.token,
          })
          return navigation.navigate('IFApps', {
            screen: 'Home',
            params: {
              screen: 'HomeScreen',
            },
          })
        }
        ToastAndroid.show(resp.data.message, ToastAndroid.SHORT)
      })
      .catch(err => ToastAndroid.show('Network Error', ToastAndroid.SHORT))
  }
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
        translucent={true}
      />
      <KeyboardAwareScrollView style={{width: '100%'}}>
        <Image
          style={Styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        <View style={Styles.form}>
          <CustomText weight="semi" style={Styles.title}>
            Login
          </CustomText>
          <View style={Styles.input}>
            <EmailIcon />
            <TextInput
              style={Styles.textInput}
              textContentType="emailAddress"
              placeholder="email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={Styles.input}>
            <PasswordIcon />
            <TextInput
              style={Styles.textInput}
              secureTextEntry={true}
              textContentType="password"
              placeholder="password"
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <Button style={{marginTop: 8}} text="Login" onPress={loginUser} />
          <CustomText style={Styles.keterangan}>
            Belum punya akun?{' '}
            <CustomText
              weight="bold"
              onPress={() => navigation.navigate('Register')}
              style={Styles.link}>
              Daftar
            </CustomText>
          </CustomText>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default Login
