import {SafeAreaView, ScrollView} from 'react-native'
import CustomText from '../../components/CustomText'
import PengumumanList from '../../components/PengumumanList'
import Styles from './styles'

const News = () => {
  return (
    <>
      <SafeAreaView style={Styles.container}>
        <CustomText weight="semi" style={Styles.text}>
          Pengumuman
        </CustomText>
      </SafeAreaView>
      <PengumumanList />
    </>
  )
}

export default News
