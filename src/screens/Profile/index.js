import {SafeAreaView, View, Image, TouchableOpacity} from 'react-native'
import CustomText from '../../components/CustomText'
import Styles from './styles'
import EditIcon from '../../assets/icons/vector.svg'
import PencilIcon from '../../assets/icons/pencil.svg'
import LogoutIcon from '../../assets/icons/logout.svg'

const Profile = ({navigation}) => {
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
        <CustomText style={Styles.name}>Rizky Wahyu Prasetiyo</CustomText>
        <CustomText style={Styles.email}>
          rizky.prasetiyo@unmuhpnk.ac.id
        </CustomText>
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
        <TouchableOpacity style={Styles.logoutButton}>
          <LogoutIcon />
          <CustomText style={Styles.logoutText}>Logout</CustomText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Profile
