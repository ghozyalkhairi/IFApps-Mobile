import {useEffect, useState} from 'react'
import {FlatList, ActivityIndicator, Dimensions} from 'react-native'
import PengumumanItem from '../PengumumanItem'
import {fetchData} from '../../request'
import {useUser} from '../../stores/userStore'
import Styles from './styles'

const PengumumanList = () => {
  const {token} = useUser()
  const [pengumumanData, setPengumumanData] = useState([])
  const {height} = Dimensions.get('window')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchPengumuman = async () => {
      setLoading(true)
      fetchData('GET', 'pengumuman', token)
        .then(resp => {
          setPengumumanData(resp.data.data)
          console.log(pengumumanData.length)
          setLoading(false)
        })
        .catch(err => console.log(err.message))
    }

    fetchPengumuman()
  }, [])
  return (
    <>
      {!loading ? (
        <FlatList
          contentContainerStyle={Styles.containerNews}
          keyExtractor={item => item.id}
          data={pengumumanData}
          renderItem={({item}) => <PengumumanItem pengumuman={item} />}
        />
      ) : (
        <ActivityIndicator
          size={50}
          color="#000080"
          style={{marginTop: height * 0.3}}
        />
      )}
    </>
  )
}

export default PengumumanList
