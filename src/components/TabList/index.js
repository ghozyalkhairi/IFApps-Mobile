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
import TabMenuContent from '../TabMenuContent'

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
          style={{marginVertical: 65}}
        />
      ) : (
        <TabMenuContent type={activeTab} data={proposal[0]} />
      )}
    </View>
  )
}

export default TabList
