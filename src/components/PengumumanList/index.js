import {FlatList} from 'react-native'
import PengumumanItem from '../PengumumanItem'
import pengumumanData from './pengumuman.json'
import Styles from './styles'

const PengumumanList = () => {
  return (
    <FlatList
      contentContainerStyle={Styles.containerNews}
      keyExtractor={item => item.id}
      data={pengumumanData}
      renderItem={({item}) => <PengumumanItem pengumuman={item} />}
    />
  )
}

export default PengumumanList
