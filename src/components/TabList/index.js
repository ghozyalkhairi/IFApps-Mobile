import {useState} from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
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
      <TabMenuContent type={activeTab} />
    </View>
  )
}

export default TabList
