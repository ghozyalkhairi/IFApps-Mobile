import {SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native'
import LeftArrowBlueIcon from '../../assets/icons/leftArrowBlue.svg'
import CustomText from '../../components/CustomText'
import Styles from './styles'

const NewsDetail = ({route, navigation}) => {
  const pengumuman = route.params.pengumuman
  return (
    <>
      <SafeAreaView style={Styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={Styles.row}>
          <LeftArrowBlueIcon />
          <CustomText weight="semi" style={Styles.header}>
            Detail Pengumuman
          </CustomText>
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView style={Styles.contentContainer}>
        <Image
          style={Styles.foto}
          source={require('../../assets/images/image_pengumuman.png')}
        />
        <CustomText style={Styles.kategori}>{pengumuman.kategori}</CustomText>
        <CustomText weight="semi" style={Styles.title}>
          {pengumuman.judul}
        </CustomText>
        <CustomText style={Styles.tanggal}>{pengumuman.tanggal}</CustomText>
        <CustomText style={Styles.konten}>{pengumuman.konten}</CustomText>
      </ScrollView>
    </>
  )
}

export default NewsDetail
