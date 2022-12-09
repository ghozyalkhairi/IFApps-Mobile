import {Image, SafeAreaView, Text, View} from 'react-native'
import Styles from './styles'

const Home = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View styles={Styles.row}>
        <Image source={require('../../assets/images/foto.png')} />
        <View>
          <Text>Selamat Datang</Text>
          <Text>Rizky Wahyu Prasetyo</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
