import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native'
import {useState} from 'react'
import {useUser, useUserActions} from '../../stores/userStore'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import {updateUser, getUser} from '../../request'
import CustomText from '../../components/CustomText'
import LeftArrow from '../../assets/icons/leftarrow.svg'
import Styles from './styles'
import EmailIcon from '../../assets/icons/email.svg'
import UserIcon from '../../assets/icons/user.svg'
import PasswordIcon from '../../assets/icons/password.svg'
import Button from '../../components/Button'

const EditProfile = ({navigation}) => {
  const user = useUser()
  const {onUserUpdate} = useUserActions()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onEditProfile = () => {
    if (!name.length || !email.length || !password.length)
      return ToastAndroid.show('Input tidak boleh kosong', ToastAndroid.SHORT)
    if (password.length < 8)
      return ToastAndroid.show(
        'Password kurang dari 8 karakter',
        ToastAndroid.SHORT,
      )
    const newData = {
      name,
      email,
      password,
      password_confirmation: password,
    }
    updateUser(user.id, newData, user.token)
      .then(resp => {
        if (resp.data.meta.status === 'success')
          getUser(user.id, user.token)
            .then(resp => {
              if (resp.data.meta.status === 'success') {
                onUserUpdate(resp.data.data)
                ToastAndroid.show('Berhasil Update Profil', ToastAndroid.SHORT)
                return navigation.goBack()
              }
            })
            .catch(err => ToastAndroid.show(err.message, ToastAndroid.SHORT))
      })
      .catch(err => ToastAndroid.show(err.message, ToastAndroid.SHORT))
  }
  return (
    <SafeAreaView style={Styles.container}>
      <KeyboardAwareScrollView>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={Styles.menuEdit}>
            <LeftArrow />
            <CustomText weight="semi" style={Styles.title}>
              Edit Profile
            </CustomText>
          </TouchableOpacity>
        </View>
        <View style={Styles.form}>
          <View style={Styles.input}>
            <UserIcon />
            <TextInput
              style={Styles.textInput}
              textContentType="nama"
              placeholder={user.name}
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={Styles.input}>
            <EmailIcon />
            <TextInput
              style={Styles.textInput}
              textContentType="emailAddress"
              placeholder={user.email}
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
          <Button
            onPress={onEditProfile}
            style={{marginTop: 8}}
            text="Update"
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default EditProfile
