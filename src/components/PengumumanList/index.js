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
          setLoading(false)
        })
        .catch(err => console.log(err.message))
    }

    fetchPengumuman()
  }, [])
  if (loading)
    return (
      <ActivityIndicator
        size={50}
        color="#000080"
        style={{marginTop: height * 0.3}}
      />
    )
  return (
    <>
      {pengumumanData.length > 0 ? (
        <FlatList
          data={pengumumanData}
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
