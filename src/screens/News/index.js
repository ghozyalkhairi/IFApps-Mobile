import {SafeAreaView, Text, View, Image, ScrollView} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import CustomText from '../../components/CustomText'
import Styles from './styles'

const News = () => {
  return (
    <>
      <SafeAreaView style={Styles.container}>
        <CustomText weight="semi" style={Styles.text}>
          Pengumuman
        </CustomText>
      </SafeAreaView>
      <ScrollView>
        <SafeAreaView style={Styles.containerNews}>
          <Pressable>
            <View style={Styles.card}>
              <View>
                <Image
                  style={Styles.foto}
                  source={require('../../assets/images/image_pengumuman.png')}
                />
                <Text style={Styles.category}>umum</Text>
                <View style={Styles.heading}>
                  <Text style={Styles.title}>
                    PKM Dosen Prodi TI di SD Negeri 68 Pontianak Barat
                  </Text>
                  <Text style={Styles.tanggal}>13 September 2022</Text>
                </View>
              </View>
            </View>
          </Pressable>
          <View style={Styles.card}>
            <Image
              style={Styles.foto}
              source={require('../../assets/images/image_pengumuman.png')}
            />
            <Text style={Styles.category}>umum</Text>
            <View style={Styles.heading}>
              <Text style={Styles.title}>
                PKM Dosen Prodi TI di SD Negeri 68 Pontianak Barat
              </Text>
              <Text style={Styles.tanggal}>13 September 2022</Text>
            </View>
          </View>
          <View style={Styles.card}>
            <Image
              style={Styles.foto}
              source={require('../../assets/images/image_pengumuman.png')}
            />
            <Text style={Styles.category}>umum</Text>
            <View style={Styles.heading}>
              <Text style={Styles.title}>
                PKM Dosen Prodi TI di SD Negeri 68 Pontianak Barat
              </Text>
              <Text style={Styles.tanggal}>13 September 2022</Text>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  )
}

export default News
