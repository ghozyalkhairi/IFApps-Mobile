import Styles from './styles'
import {View} from 'react-native'
import CustomText from '../CustomText'
import ProposalIcon from '../../assets/icons/proposal.svg'
import SidangIcon from '../../assets/icons/sidang.svg'
import JadwalIcon from '../../assets/icons/jadwal.svg'
import PengumumanIcon from '../../assets/icons/pengumuman.svg'
import BimbinganIcon from '../../assets/icons/sidang.svg'

const MenuItem = ({title, style}) => {
  const renderIcon = () => {
    if (title === 'Proposal TA') return <ProposalIcon width={110} height={30} />
    if (title === 'Sidang TA') return <SidangIcon width={110} height={30} />
    if (title === 'Jadwal TA') return <JadwalIcon width={110} height={30} />
    if (title === 'Pengumuman')
      return <PengumumanIcon width={110} height={30} />
    if (title === 'Bimbingan') return <BimbinganIcon width={110} height={30} />
  }
  return (
    <View style={[Styles.itemContainer, style]}>
      <View style={Styles.containerIcon}>{renderIcon()}</View>
      <View style={{flexGrow: 1, flexDirection: 'row'}}>
        <CustomText style={Styles.text}>{title}</CustomText>
      </View>
    </View>
  )
}

export default MenuItem
