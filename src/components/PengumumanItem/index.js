import {View, Image, TouchableOpacity} from 'react-native'
import CustomText from '../CustomText'
import Styles from './styles'

const PengumumanItem = ({kategori, judul, tanggal}) => {
  return (
    <TouchableOpacity>
      <View style={Styles.card}>
        <View>
          <Image
            style={Styles.foto}
            source={require('../../assets/images/image_pengumuman.png')}
          />
          <CustomText weight="light" style={Styles.category}>
            {kategori}
          </CustomText>
          <View style={Styles.heading}>
            <CustomText weight="semi" style={Styles.title}>
              {judul}
            </CustomText>
            <CustomText style={Styles.tanggal}>{tanggal}</CustomText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PengumumanItem
