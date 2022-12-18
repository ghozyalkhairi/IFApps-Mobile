import {View, Image, Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {format, parseISO} from 'date-fns'
import {id} from 'date-fns/locale'
import CustomText from '../CustomText'
import Styles from './styles'

const PengumumanItem = ({pengumuman}) => {
  const tanggalRaw = pengumuman.tanggal
  const tanggalFormat = format(parseISO(tanggalRaw), 'EEEE, dd MMMM yyyy', {
    locale: id,
  })
  const dataPengumuman = {
    pengumuman,
    tanggal: tanggalFormat,
  }
  const navigation = useNavigation()
  return (
    <Pressable
      onPress={() => navigation.navigate('NewsDetailScreen', {dataPengumuman})}>
      <View style={Styles.card}>
        <View>
          <Image
            style={Styles.foto}
            source={require('../../assets/images/image_pengumuman.png')}
          />
          <CustomText weight="light" style={Styles.category}>
            {pengumuman.kategori}
          </CustomText>
          <View style={Styles.heading}>
            <CustomText weight="semi" style={Styles.title}>
              {pengumuman.judul}
            </CustomText>
            <CustomText style={Styles.tanggal}>{tanggalFormat}</CustomText>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default PengumumanItem
