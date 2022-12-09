import {ImageBackground, Text, View} from 'react-native'
import Button from '../../components/Button'
import Styles from './styles'

const Landing = ({navigation}) => {
  return (
    <ImageBackground
      style={Styles.background}
      source={require('../../assets/images/landing.png')}>
      <View style={Styles.container}>
        <Text style={Styles.title}>IFApps</Text>
        <Text style={Styles.subtitle}>
          Sistem Informasi Manajemen Akademik Teknik Informatika
        </Text>
        <Button text="Mulai" onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  )
}

export default Landing
