import {
  Image,
  SafeAreaView,
  View,
  Text,
  TextInput,
  ToastAndroid,
} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CheckBox from '@react-native-community/checkbox'
import Button from '../../components/Button'
import {authRegister} from '../../request'
import Styles from './styles'
import {useState} from 'react'

const Register = () => {
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
    authRegister(dataUser)
      .then(resp => {
        if (resp.data.status) {
          ToastAndroid.show(resp.data.message, ToastAndroid.SHORT)
          return navigation.navigate('Login')
        }
        ToastAndroid.show(resp.data.message, ToastAndroid.SHORT)
      })
      .catch(err => ToastAndroid.show('Network Error', ToastAndroid.SHORT))
  }
  return (
    <SafeAreaView style={Styles.container}>
      <KeyboardAwareScrollView style={{width: '100%'}}>
        <View style={Styles.itemLogo}>
          <Image
            style={Styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <Text style={Styles.title}>Register</Text>
        </View>
        <View style={Styles.item}>
          <Text style={Styles.itemLabel}>Nama</Text>
          <TextInput
            placeholder="Budi Susanto"
            value={name}
            onChangeText={text => setName(text)}
            style={Styles.textField}
          />
        </View>
        <View style={Styles.item}>
          <Text style={Styles.itemLabel}>Email</Text>
          <TextInput
            placeholder="budisusanto@unmuhpnk.ac.id"
            style={Styles.textField}
            textContentType="emailAddress"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={Styles.item}>
          <Text style={Styles.itemLabel}>Password</Text>
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
          <Text style={Styles.itemLabel}>Konfirmasi Password</Text>
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
          <Text style={Styles.textCheckBox}>
            Saya setuju dengan kebijakan dan syarat
          </Text>
        </View>
        <View style={Styles.button}>
          <Button onPress={registerUser} text="Register" />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default Register
