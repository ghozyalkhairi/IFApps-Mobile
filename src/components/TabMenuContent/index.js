import {View} from 'react-native'
import {format, parseISO} from 'date-fns'
import {id} from 'date-fns/locale'
import CustomText from '../CustomText'
import Styles from './styles'

const TabMenuContent = ({type, data}) => {
  const date = data.created_at
  const formattedDate = format(parseISO(date), 'EEEE, dd MMMM yyyy', {
    locale: id,
  })
  const renderContent = () => {
    switch (type) {
      case 'Proposal':
        return (
          <>
            <CustomText style={Styles.status}>Status</CustomText>
            <CustomText style={Styles.statusValue}>{data.status}</CustomText>
            <CustomText style={Styles.date}>{formattedDate}</CustomText>
          </>
        )
      case 'Sidang':
        return (
          <>
            <CustomText style={Styles.status}>Status</CustomText>
            <CustomText style={Styles.statusValue}>Siap Sidang</CustomText>
            <CustomText style={Styles.date}>{formattedDate}</CustomText>
          </>
        )
      case 'Riwayat Bimbingan':
        return (
          <>
            <CustomText style={Styles.status}>Status</CustomText>
            <CustomText style={Styles.statusValue}>Sudah Bimbingan</CustomText>
            <CustomText style={Styles.date}>{formattedDate}</CustomText>
          </>
        )
    }
  }
  return <View style={Styles.detail}>{renderContent()}</View>
}

export default TabMenuContent
