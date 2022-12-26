import {
  Image,
  SafeAreaView,
  TextInput,
  View,
  ToastAndroid,
  StatusBar,
} from 'react-native'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {selectAuth, reset} from '../../feature/auth/authSlice'
import {login} from '../../feature/auth/authThunks'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CustomText from '../../components/CustomText'
import EmailIcon from '../../assets/icons/email.svg'
import PasswordIcon from '../../assets/icons/password.svg'
import Button from '../../components/Button'
import Styles from './styles'

const Login = ({navigation}) => {
  navigation.addListener('beforeRemove', e => {
    e.preventDefault()
  })
  const dispatch = useDispatch()
  const {isLoading, isSuccess, isError, message} = useSelector(selectAuth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
    dispatch(login(data))
  }
  useEffect(() => {
    if (isLoading.login) {
      ToastAndroid.show('Login sedang diproses', ToastAndroid.SHORT)
    }
    if (isSuccess.login) {
      ToastAndroid.show('Login berhasil', ToastAndroid.SHORT)
      dispatch(reset())
      navigation.navigate('IFApps', {
        screen: 'Home',
        params: {
          screen: 'HomeScreen',
        },
      })
    }
    if (isError.login) {
      ToastAndroid.show(message, ToastAndroid.SHORT)
      dispatch(reset())
    }
  }, [isSuccess.login, isError.login, isLoading.login])
  return (
    <>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
        translucent={true}
      />
      <SafeAreaView style={Styles.container}>
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
    </>
  )
}

export default Login
