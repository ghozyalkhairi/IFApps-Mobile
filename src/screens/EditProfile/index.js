import {SafeAreaView, View, TextInput, TouchableOpacity} from 'react-native'
import {useUser} from '../../stores/userStore'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CustomText from '../../components/CustomText'
import LeftArrow from '../../assets/icons/leftarrow.svg'
import Styles from './styles'
import EmailIcon from '../../assets/icons/email.svg'
import UserIcon from '../../assets/icons/user.svg'
import PasswordIcon from '../../assets/icons/password.svg'
import Button from '../../components/Button'

const EditProfile = ({navigation}) => {
  const user = useUser()
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
            />
          </View>
          <View style={Styles.input}>
            <EmailIcon />
            <TextInput
              style={Styles.textInput}
              textContentType="emailAddress"
              placeholder={user.email}
            />
          </View>
          <View style={Styles.input}>
            <PasswordIcon />
            <TextInput
              style={Styles.textInput}
              secureTextEntry={true}
              textContentType="password"
              placeholder="password"
            />
          </View>
          <Button style={{marginTop: 8}} text="Update" />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default EditProfile
