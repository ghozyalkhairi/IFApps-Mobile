import {useEffect} from 'react'
import {ImageBackground, View, StatusBar} from 'react-native'
import CustomText from '../../components/CustomText'
import ArmideaLogo from '../../assets/icons/armidea.svg'
import Styles from './styles'

const Landing = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('Login')
    }, 2000)
    return () => clearTimeout(timeout)
  }, [])
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
          <View style={Styles.top}>
            <CustomText weight="bold" style={Styles.title}>
              IFApps
            </CustomText>
            <CustomText style={Styles.subtitle}>
              Sistem Informasi Manajemen Akademik Teknik Informatika
            </CustomText>
          </View>
          <View>
            <CustomText weight="semi" style={Styles.byText}>
              Powered by
            </CustomText>
            <View style={Styles.logoContainer}>
              <ArmideaLogo width={50} height={50} />
            </View>
            <CustomText weight="bold" style={Styles.logoText}>
              armidea
            </CustomText>
          </View>
        </View>
      </ImageBackground>
    </>
  )
}

export default Landing
