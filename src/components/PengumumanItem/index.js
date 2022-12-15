import {Text, View, Image, Pressable} from 'react-native'
import CustomText from '../CustomText'
import Styles from './styles'

const PengumumanItem = () => {
  return (
    <Pressable>
      <View style={Styles.card}>
        <View>
          <Image
            style={Styles.foto}
            source={require('../../assets/images/image_pengumuman.png')}
          />
          <CustomText weight="light" style={Styles.category}>
            umum
          </CustomText>
          <View style={Styles.heading}>
            <CustomText weight="semi" style={Styles.title}>
              PKM Dosen Prodi TI di SD Negeri 68 Pontianak Barat
            </CustomText>
            <CustomText style={Styles.tanggal}>13 September 2022</CustomText>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default PengumumanItem
