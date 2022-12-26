import {View, ToastAndroid, ActivityIndicator} from 'react-native'
import {useEffect, useState} from 'react'
import {format, parseISO} from 'date-fns'
import {id} from 'date-fns/locale'
import CustomText from '../CustomText'
import Styles from './styles'
import {useDispatch, useSelector} from 'react-redux'
import {selectAuth} from '../../feature/auth/authSlice'
import {selectProposal} from '../../feature/proposal/proposalSlice'
import {getProposal} from '../../feature/proposal/proposalThunks'

const TabMenuContent = ({type}) => {
  const dispatch = useDispatch()
  const {user} = useSelector(selectAuth)
  const {proposal, isLoading, isError, isSuccess, message} =
    useSelector(selectProposal)
  const [date, setDate] = useState('')
  const formattedDate = () => {
    if (date) return format(parseISO(date), 'dd MMMM yyyy', {locale: id})
  }
  useEffect(() => {
    dispatch(getProposal({token: user.token}))
  }, [])
  useEffect(() => {
    if (isSuccess) {
      setDate(proposal[0]?.created_at)
    }
    if (isError) {
      ToastAndroid.show(message, ToastAndroid.SHORT)
    }
  }, [isError, isSuccess])
  const renderContent = () => {
    switch (type) {
      case 'Proposal':
        if (proposal?.length)
          return (
            <>
              <CustomText style={Styles.status}>Status</CustomText>
              <CustomText style={Styles.statusValue}>
                {proposal[0].status}
              </CustomText>
              <CustomText style={Styles.date}>{formattedDate()}</CustomText>
            </>
          )
      case 'Sidang':
        return (
          <>
            <CustomText style={Styles.status}>Status</CustomText>
            <CustomText style={Styles.statusValue}>Siap Sidang</CustomText>
            <CustomText style={Styles.date}>{formattedDate()}</CustomText>
          </>
        )
      case 'Riwayat Bimbingan':
        return (
          <>
            <CustomText style={Styles.status}>Status</CustomText>
            <CustomText style={Styles.statusValue}>Sudah Bimbingan</CustomText>
            <CustomText style={Styles.date}>{formattedDate()}</CustomText>
          </>
        )
    }
  }
  if (isLoading)
    return (
      <ActivityIndicator
        size={40}
        color="#000080"
        style={{marginVertical: 65}}
      />
    )
  return <View style={Styles.detail}>{renderContent()}</View>
}

export default TabMenuContent
