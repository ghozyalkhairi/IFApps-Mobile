import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native'
import RenderHtml, {defaultSystemFonts} from 'react-native-render-html'
import LeftArrowBlueIcon from '../../assets/icons/leftArrowBlue.svg'
import CustomText from '../../components/CustomText'
import {colors} from '../../theme'
import Styles from './styles'

const NewsDetail = ({route, navigation}) => {
  const {width} = Dimensions.get('window')
  const {pengumuman, tanggal} = route.params.dataPengumuman
  const systemFonts = ['Poppins-Regular', ...defaultSystemFonts]
  const tagsStyles = {
    h1: {
      color: colors.primaryBlack,
      fontFamily: 'Poppins-Regular',
    },
    h2: {
      color: colors.primaryBlack,
      fontFamily: 'Poppins-Regular',
    },
    p: {
      color: colors.primaryBlack,
      fontFamily: 'Poppins-Regular',
    },
  }
  const source = {
    html: pengumuman.content,
  }
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
          source={{uri: 'http://103.187.146.183/storage/' + pengumuman.gambar}}
        />
        <CustomText style={Styles.kategori}>{pengumuman.kategori}</CustomText>
        <CustomText weight="semi" style={Styles.title}>
          {pengumuman.judul}
        </CustomText>
        <CustomText style={Styles.tanggal}>{tanggal}</CustomText>
        <RenderHtml
          source={source}
          contentWidth={width}
          systemFonts={systemFonts}
          tagsStyles={tagsStyles}
        />
      </ScrollView>
    </>
  )
}

export default NewsDetail
