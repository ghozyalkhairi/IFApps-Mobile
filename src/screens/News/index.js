import {SafeAreaView, Text, View, Image, ScrollView} from 'react-native'
import CustomText from '../../components/CustomText'
import Styles from './styles'

const News = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <CustomText weight="semi" style={Styles.text}>
        Pengumuman
      </CustomText>
      <ScrollView>
        <View style={[Styles.card, Styles.elevation]}>
          <View>
            <Image
              style={Styles.foto}
              source={require('../../assets/images/image_pengumuman.png')}
            />
            <Text style={Styles.category}>umum</Text>
          </View>
          <View style={Styles.heading}>
            <Text style={Styles.title}>
              PKM Dosen Prodi TI di SD Negeri 68 Pontianak Barat
            </Text>
            <Text style={Styles.tanggal}>13 September 2022</Text>
          </View>
        </View>

        <View>
          <Image
            style={Styles.foto}
            source={require('../../assets/images/image_pengumuman.png')}
          />
          <Text style={Styles.category}>umum</Text>
        </View>
        <View style={Styles.heading}>
          <Text style={Styles.title}>
            PKM Dosen Prodi TI di SD Negeri 68 Pontianak Barat
          </Text>
          <Text style={Styles.tanggal}>13 September 2022</Text>
        </View>
        <View>
          <Image
            style={Styles.foto}
            source={require('../../assets/images/image_pengumuman.png')}
          />
          <Text style={Styles.category}>umum</Text>
        </View>
        <View style={Styles.heading}>
          <Text style={Styles.title}>
            PKM Dosen Prodi TI di SD Negeri 68 Pontianak Barat
          </Text>
          <Text style={Styles.tanggal}>13 September 2022</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default News
