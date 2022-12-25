import {Image, SafeAreaView, View} from 'react-native'
import CustomText from '../../components/CustomText'
import {useUser} from '../../stores/userStore'
import MenuList from '../../components/MenuList'
import TabList from '../../components/TabList'
import Styles from './styles'

const Home = ({navigation}) => {
  const user = useUser()
  navigation.addListener('beforeRemove', e => {
    if (user.isLoggedIn) {
      return e.preventDefault()
    }
  })
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.row}>
        <Image
          style={Styles.foto}
          source={require('../../assets/images/foto.png')}
        />
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
