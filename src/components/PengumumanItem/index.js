import {View, Image, Pressable} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import CustomText from '../CustomText'
import Styles from './styles'

const PengumumanItem = ({pengumuman}) => {
  const navigation = useNavigation()
  return (
    <Pressable
      onPress={() => navigation.navigate('NewsDetailScreen', {pengumuman})}>
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
            <CustomText style={Styles.tanggal}>{pengumuman.tanggal}</CustomText>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default PengumumanItem
