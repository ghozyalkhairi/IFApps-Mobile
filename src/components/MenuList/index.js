import {FlatList} from 'react-native'
import MenuItem from '../MenuItem'
import Styles from './styles'

const MenuList = () => {
  const menuItems = [
    {
      title: 'Proposal TA',
    },
    {
      title: 'Sidang TA',
    },
    {
      title: 'Jadwal TA',
    },
    {
      title: 'Pengumuman',
    },
    {
      title: 'Bimbingan',
    },
  ]
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{marginHorizontal: -22}}
      contentContainerStyle={Styles.container}
      data={menuItems}
      renderItem={({item, index}) => (
        <MenuItem
          title={item.title}
          style={[
            index === 0 ? {marginHorizontal: 44} : null,
            index === 4 ? {marginRight: 0} : null,
          ]}
        />
      )}
    />
  )
}

export default MenuList
