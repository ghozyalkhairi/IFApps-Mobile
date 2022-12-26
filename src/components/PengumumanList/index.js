import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectAuth} from '../../feature/auth/authSlice'
import {selectPengumuman} from '../../feature/pengumuman/pengumumanSlice'
import {getPengumuman} from '../../feature/pengumuman/pengumumanThunks'
import {
  FlatList,
  ActivityIndicator,
  Dimensions,
  Text,
  ToastAndroid,
} from 'react-native'
import PengumumanItem from '../PengumumanItem'
import Styles from './styles'

const PengumumanList = () => {
  const dispatch = useDispatch()
  const {user} = useSelector(selectAuth)
  const {pengumuman, isLoading, isError, message} =
    useSelector(selectPengumuman)
  const {height} = Dimensions.get('window')
  useEffect(() => {
    dispatch(getPengumuman({token: user.token}))
  }, [])
  useEffect(() => {
    if (isError) {
      ToastAndroid.show(message, ToastAndroid.SHORT)
    }
  }, [isError])
  if (isLoading)
    return (
      <ActivityIndicator
        size={50}
        color="#000080"
        style={{marginTop: height * 0.3}}
      />
    )
  return (
    <>
      {pengumuman?.length > 0 ? (
        <FlatList
          data={pengumuman}
          renderItem={({item}) => <PengumumanItem pengumuman={item} />}
          keyExtractor={item => item.id}
          style={Styles.container}
        />
      ) : (
        <Text style={Styles.emptyText}>Tidak ada pengumuman</Text>
      )}
    </>
  )
}

export default PengumumanList
