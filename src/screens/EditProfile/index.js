import {SafeAreaView, Text, View, TextInput} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import LeftArrow from '../../assets/icons/leftarrow.svg'
import Styles from './styles'
import EmailIcon from '../../assets/icons/email.svg'
import UserIcon from '../../assets/icons/user.svg'
import PasswordIcon from '../../assets/icons/password.svg'
import Button from '../../components/Button'

const EditProfile = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <TouchableOpacity style={Styles.menuEdit}>
          <LeftArrow />
          <Text style={Styles.title}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.form}>
        <View style={Styles.input}>
          <UserIcon />
          <TextInput
            style={Styles.textInput}
            textContentType="nama"
            placeholder="nama"
          />
        </View>
        <View style={Styles.input}>
          <EmailIcon />
          <TextInput
            style={Styles.textInput}
            textContentType="emailAddress"
            placeholder="email"
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
    </SafeAreaView>
  )
}

export default EditProfile
