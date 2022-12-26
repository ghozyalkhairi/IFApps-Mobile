import {Image, SafeAreaView, View, TextInput, ToastAndroid} from 'react-native'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {register} from '../../feature/auth/authThunks'
import {reset} from '../../feature/auth/authSlice'
import CustomText from '../../components/CustomText'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CheckBox from '@react-native-community/checkbox'
import Button from '../../components/Button'
import Styles from './styles'

const Register = ({navigation}) => {
  const dispatch = useDispatch()
  const {isLoading, isSuccess, isError, message} = useSelector(
    state => state.auth,
  )
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verPassword, setVerPassword] = useState('')
  const checkPassword = () =>
    password.length <= verPassword.length ? password === verPassword : true
  const registerUser = () => {
    if (
      !name.length ||
      !email.length ||
      !password.length ||
      !verPassword.length ||
      !toggleCheckBox
    )
      return ToastAndroid.show(
        'Form input tidak boleh ada yang kosong',
        ToastAndroid.SHORT,
      )
    if (password !== verPassword)
      return ToastAndroid.show(
        'Password dan konfirmasi password harus sama',
        ToastAndroid.SHORT,
      )
    const dataUser = {
      name,
      email,
      password,
    }
    dispatch(register(dataUser))
  }
  useEffect(() => {
    if (isLoading.register) {
      ToastAndroid.show('Register sedang diproses', ToastAndroid.SHORT)
    }
    if (isSuccess.register) {
      ToastAndroid.show('Register berhasil', ToastAndroid.SHORT)
      dispatch(reset())
      navigation.navigate('Login')
    }
    if (isError.register) {
      ToastAndroid.show(message, ToastAndroid.SHORT)
      dispatch(reset())
    }
  }, [isSuccess.register, isError.register, isLoading.register])
  return (
    <SafeAreaView style={Styles.container}>
      <KeyboardAwareScrollView style={{width: '100%'}}>
        <View style={Styles.itemLogo}>
          <Image
            style={Styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <CustomText weight="semi" style={Styles.title}>
            Register
          </CustomText>
        </View>
        <View style={Styles.item}>
          <CustomText weight="semi" style={Styles.itemLabel}>
            Nama
          </CustomText>
          <TextInput
            placeholder="Budi Susanto"
            value={name}
            onChangeText={text => setName(text)}
            style={Styles.textField}
          />
        </View>
        <View style={Styles.item}>
          <CustomText weight="semi" style={Styles.itemLabel}>
            Email
          </CustomText>
          <TextInput
            placeholder="budisusanto@unmuhpnk.ac.id"
            style={Styles.textField}
            textContentType="emailAddress"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={Styles.item}>
          <CustomText weight="semi" style={Styles.itemLabel}>
            Password
          </CustomText>
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            textContentType="password"
            style={checkPassword() ? Styles.textField : Styles.textFieldRed}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={Styles.item}>
          <CustomText weight="semi" style={Styles.itemLabel}>
            Konfirmasi Password
          </CustomText>
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            textContentType="password"
            style={checkPassword() ? Styles.textField : Styles.textFieldRed}
            value={verPassword}
            onChangeText={text => setVerPassword(text)}
          />
        </View>
        <View style={Styles.checkbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <CustomText style={Styles.textCheckBox}>
            Saya setuju dengan kebijakan dan syarat
          </CustomText>
        </View>
        <View style={Styles.button}>
          <Button onPress={registerUser} text="Register" />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default Register
