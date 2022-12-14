import {SafeAreaView, Text} from 'react-native'
import CustomText from '../../components/CustomText'
import Styles from './styles'

const News = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <CustomText weight="semi" style={Styles.text}>
        News
      </CustomText>
    </SafeAreaView>
  )
}

export default News
