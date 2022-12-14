import {SafeAreaView, Text, View, Image, Touchable} from 'react-native'
import Styles from './styles'
import EditIcon from '../../assets/icons/vector.svg'
import PencilIcon from '../../assets/icons/pencil.svg'
import LogoutIcon from '../../assets/icons/logout.svg'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={Styles.container}>
      <View>
        <Text style={Styles.title}>Profile</Text>
        <View style={Styles.image}>
          <Image
            style={Styles.thumbnail}
            source={require('../../assets/images/foto.png')}
          />
          <View style={Styles.editIcon}>
            <EditIcon style={Styles.edit} />
          </View>
        </View>
      </View>
      <View style={Styles.desc}>
        <Text style={Styles.name}>Rizky Wahyu Prasetiyo</Text>
        <Text style={Styles.email}>rizky.prasetiyo@unmuhpnk.ac.id</Text>
      </View>
      <View style={Styles.menuEdit}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditProfileScreen')}
          style={Styles.editButton}>
          <PencilIcon />
          <Text style={Styles.editText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.menuLogout}>
        <TouchableOpacity style={Styles.logoutButton}>
          <LogoutIcon />
          <Text style={Styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Profile
