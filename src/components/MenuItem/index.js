import Styles from './styles'
import {View, Text} from 'react-native'
import ProposalIcon from '../../assets/icons/proposal.svg'
import SidangIcon from '../../assets/icons/sidang.svg'
import JadwalIcon from '../../assets/icons/jadwal.svg'
import PengumumanIcon from '../../assets/icons/pengumuman.svg'
import BimbinganIcon from '../../assets/icons/sidang.svg'

const MenuItem = ({title, style}) => {
  const renderIcon = () => {
    if (title === 'Proposal TA') return <ProposalIcon width={120} height={40} />
    if (title === 'Sidang TA') return <SidangIcon width={120} height={40} />
    if (title === 'Jadwal TA') return <JadwalIcon width={120} height={40} />
    if (title === 'Pengumuman')
      return <PengumumanIcon width={120} height={40} />
    if (title === 'Bimbingan') return <BimbinganIcon width={120} height={40} />
  }
  return (
    <View style={[Styles.itemContainer, style]}>
      <View style={Styles.containerIcon}>{renderIcon()}</View>
      <View style={{flexGrow: 1, flexDirection: 'row'}}>
        <Text style={Styles.text}>{title}</Text>
      </View>
    </View>
  )
}

export default MenuItem
