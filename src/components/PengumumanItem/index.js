import {Text, View, Image, Pressable} from 'react-native'
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
  )
}

export default PengumumanItem
