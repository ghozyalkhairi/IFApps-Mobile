import {Image, SafeAreaView, Text, ToastAndroid, View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import CustomText from '../../components/CustomText'
import {authLogout} from '../../request'
import MenuList from '../../components/MenuList'
import TabList from '../../components/TabList'
import Styles from './styles'

const Home = ({route, navigation}) => {
  const user = route.params.user
  const onLogout = () => {
    authLogout(user.token)
      .then(resp => {
        if (resp.data.meta.status === 'success') {
          ToastAndroid.show('Berhasil Logout', ToastAndroid.SHORT)
          return navigation.navigate('Login')
        }
        ToastAndroid.show(resp.data.meta.message)
      })
      .catch(err => ToastAndroid.show('Network Error'), ToastAndroid.SHORT)
  }
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.row}>
        <TouchableOpacity onPress={onLogout}>
          <Image
            style={Styles.foto}
            source={require('../../assets/images/foto.png')}
          />
        </TouchableOpacity>
        <View style={Styles.profil}>
          <CustomText style={Styles.subtitle}>Selamat Datang</CustomText>
          <CustomText weight="semi" style={Styles.title}>
            {user.name}
          </CustomText>
        </View>
      </View>
      <Image
        style={Styles.pengumuman}
        source={require('../../assets/images/banner.png')}
      />
      <MenuList />
      <TabList />
    </SafeAreaView>
  )
}

export default Home
