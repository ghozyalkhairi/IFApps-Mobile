import {ImageBackground, View} from 'react-native'
import CustomText from '../../components/CustomText'
import Button from '../../components/Button'
import Styles from './styles'

const Landing = ({navigation}) => {
  return (
    <ImageBackground
      style={Styles.background}
      source={require('../../assets/images/landing.png')}>
      <View style={Styles.container}>
        <CustomText weight="bold" style={Styles.title}>
          IFApps
        </CustomText>
        <CustomText style={Styles.subtitle}>
          Sistem Informasi Manajemen Akademik Teknik Informatika
        </CustomText>
        <Button text="Mulai" onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  )
}

export default Landing
