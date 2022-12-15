import {SafeAreaView, ScrollView} from 'react-native'
import CustomText from '../../components/CustomText'
import PengumumanItem from '../../components/PengumumanItem'
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
          <PengumumanItem />
          <PengumumanItem />
          <PengumumanItem />
          <PengumumanItem />
        </SafeAreaView>
      </ScrollView>
    </>
  )
}

export default News
