import {useState} from 'react'
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
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
  return (
    <View style={Styles.container}>
      <FlatList
        horizontal
        data={tabs}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setActiveTab(item.title)}
            style={
              item.title === activeTab
                ? Styles.itemContainerActive
                : Styles.itemContainer
            }>
            <Text
              style={
                item.title === activeTab ? Styles.textActive : Styles.text
              }>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default TabList
