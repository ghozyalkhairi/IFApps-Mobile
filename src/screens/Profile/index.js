import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectAuth, reset} from '../../feature/auth/authSlice'
import {logout} from '../../feature/auth/authThunks'
import notifee from '@notifee/react-native'
import CustomText from '../../components/CustomText'
import Styles from './styles'
import EditIcon from '../../assets/icons/vector.svg'
import PencilIcon from '../../assets/icons/pencil.svg'
import LogoutIcon from '../../assets/icons/logout.svg'

const Profile = ({navigation}) => {
  const dispatch = useDispatch()
  const {user, isSuccess, isLoading, isError, message} = useSelector(selectAuth)
  const onLogout = () => dispatch(logout({token: user.token}))
  const onEditFoto = async () => {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    })
    await notifee.displayNotification({
      title: 'Update Foto Profil',
      body: `Halo ${user.name}, kamu bisa mengupdate foto profil kamu di menu edit profile`,
      android: {
        channelId,
      },
    })
  }
  useEffect(() => {
    if (isLoading.logout) {
      ToastAndroid.show('Logout sedang diproses', ToastAndroid.SHORT)
    }
    if (isSuccess.logout) {
      ToastAndroid.show('Berhasil logout', ToastAndroid.SHORT)
      dispatch(reset())
      navigation.navigate('Login')
    }
    if (isError.logout) {
      ToastAndroid.show(message, ToastAndroid.SHORT)
      dispatch(reset())
    }
  }, [isSuccess.logout, isError.logout, isLoading.logout])
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
          <TouchableOpacity onPress={onEditFoto} style={Styles.editIcon}>
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
