import {View} from 'react-native'
import format from 'date-fns/format'
import {id} from 'date-fns/locale'
import CustomText from '../CustomText'
import Styles from './styles'

const TabMenuContent = ({type, data}) => {
  const date = data.created_at
  console.log(date)
  const renderContent = () => {
    switch (type) {
      case 'Proposal':
        return (
          <>
            <CustomText style={Styles.status}>Status</CustomText>
            <CustomText style={Styles.statusValue}>{data.status}</CustomText>
            <CustomText style={Styles.date}>{data.created_at}</CustomText>
          </>
        )
      case 'Sidang':
        return (
          <>
            <CustomText style={Styles.status}>Status</CustomText>
            <CustomText style={Styles.statusValue}>Siap Sidang</CustomText>
            <CustomText style={Styles.date}>Jumat, 9 Desember 2022</CustomText>
          </>
        )
      case 'Riwayat Bimbingan':
        return (
          <>
            <CustomText style={Styles.status}>Status</CustomText>
            <CustomText style={Styles.statusValue}>Sudah Bimbingan</CustomText>
            <CustomText style={Styles.date}>Jumat, 9 Desember 2022</CustomText>
          </>
        )
    }
  }
  return <View style={Styles.detail}>{renderContent()}</View>
}

export default TabMenuContent
