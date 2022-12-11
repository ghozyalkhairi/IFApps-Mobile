import {Image, SafeAreaView, Text, ToastAndroid, View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {authLogout} from '../../request'
import MenuList from '../../components/MenuList'
import TabList from '../../components/TabList'
import Styles from './styles'

const Home = ({route, navigation}) => {
  const user = route.params.user
  console.log(user.token)
  const onLogout = () => {
    authLogout(user.token)
      .then(resp => {
        ToastAndroid.show('Berhasil Logout', ToastAndroid.SHORT)
        navigation.navigate('Login')
      })
      .catch(err => ToastAndroid.show(err.message), ToastAndroid.SHORT)
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
          <Text style={Styles.subtitle}>Selamat Datang</Text>
          <Text style={Styles.title}>{user.name}</Text>
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
