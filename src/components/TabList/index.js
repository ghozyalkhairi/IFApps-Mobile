import {useState, useEffect} from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import CustomText from '../CustomText'
import {fetchData} from '../../request'
import Styles from './styles'

const TabList = () => {
  const tabs = [
    {
      title: 'Proposal',
    },
    {
      title: 'Sidang',
    },
    {
      title: 'Riwayat Bimbingan',
    },
  ]
  const [activeTab, setActiveTab] = useState(tabs[0].title)
  const [proposal, setProposal] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    fetchData('GET', 'proposal').then(resp => {
      setProposal(resp.data.data)
      setLoading(false)
    })
  }, [])
  return (
    <View style={Styles.container}>
      <FlatList
        horizontal
        data={tabs}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => setActiveTab(item.title)}
            style={[
              item.title === activeTab
                ? Styles.itemContainerActive
                : Styles.itemContainer,
              index === 2 ? {marginRight: 0} : null,
            ]}>
            <Text
              style={
                item.title === activeTab ? Styles.textActive : Styles.text
              }>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
      {loading ? (
        <ActivityIndicator
          size={40}
          color="#000080"
          style={{marginBottom: 97, paddingTop: 40}}
        />
      ) : (
        <View style={Styles.detail}>
          <CustomText style={Styles.status}>{proposal[0].judul_ta}</CustomText>
          <CustomText style={Styles.statusValue}>
            {proposal[0].status}
          </CustomText>
          <CustomText style={Styles.date}>{proposal[0].kategori}</CustomText>
        </View>
      )}
    </View>
  )
}

export default TabList
