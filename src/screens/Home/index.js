import {Image, SafeAreaView, Text, View} from 'react-native'
import MenuList from '../../components/MenuList'
import TabList from '../../components/TabList'
import Styles from './styles'

const Home = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.row}>
        <Image
          style={Styles.foto}
          source={require('../../assets/images/foto.png')}
        />
        <View style={Styles.profil}>
          <Text style={Styles.subtitle}>Selamat Datang</Text>
          <Text style={Styles.title}>Rizky Wahyu Prasetyo</Text>
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
