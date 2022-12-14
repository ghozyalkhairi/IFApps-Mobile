import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native'
import {useUser, useUserActions} from '../../stores/userStore'
import {authLogout} from '../../request'
import CustomText from '../../components/CustomText'
import Styles from './styles'
import EditIcon from '../../assets/icons/vector.svg'
import PencilIcon from '../../assets/icons/pencil.svg'
import LogoutIcon from '../../assets/icons/logout.svg'

const Profile = ({navigation}) => {
  const user = useUser()
  const {onUserLogout} = useUserActions()
  const onLogout = () => {
    authLogout(user.token)
      .then(resp => {
        if (resp.data.meta.status === 'success') {
          ToastAndroid.show('Berhasil Logout', ToastAndroid.SHORT)
          onUserLogout()
          return navigation.navigate('Login')
        }
        ToastAndroid.show(resp.data.meta.message)
      })
      .catch(err => ToastAndroid.show('Network Error'), ToastAndroid.SHORT)
  }
  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <CustomText weight="semi" style={Styles.title}>
          Profile
        </CustomText>
        <View style={Styles.image}>
          <Image
            style={Styles.thumbnail}
            source={require('../../assets/images/foto.png')}
          />
          <TouchableOpacity style={Styles.editIcon}>
            <View style={Styles.edit}>
              <EditIcon />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Styles.desc}>
        <CustomText style={Styles.name}>{user.name}</CustomText>
        <CustomText style={Styles.email}>{user.email}</CustomText>
      </View>
      <View style={Styles.menuEdit}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfileScreen')}
          style={Styles.editButton}>
          <PencilIcon />
          <CustomText style={Styles.editText}>Edit Profile</CustomText>
        </TouchableOpacity>
      </View>
      <View style={Styles.menuLogout}>
        <TouchableOpacity onPress={onLogout} style={Styles.logoutButton}>
          <LogoutIcon />
          <CustomText style={Styles.logoutText}>Logout</CustomText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Profile
