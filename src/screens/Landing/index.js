import {ImageBackground, View, StatusBar} from 'react-native'
import CustomText from '../../components/CustomText'
import Button from '../../components/Button'
import Styles from './styles'

const Landing = ({navigation}) => {
  return (
    <>
      <StatusBar
        backgroundColor="rgba(256,256,256,0)"
        barStyle="dark-content"
        animated={true}
        translucent={true}
      />
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
    </>
  )
}

export default Landing
