import {Image, SafeAreaView, View, Text, TextInput} from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import CheckBox from '@react-native-community/checkbox'
import Button from '../../components/Button'
import Styles from './styles'
import {useState} from 'react'

const Register = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <SafeAreaView style={Styles.container}>
      <KeyboardAwareScrollView style={{width: '100%'}}>
        <View style={Styles.itemLogo}>
          <Image
            style={Styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <Text style={Styles.title}>Register</Text>
        </View>

        <View style={Styles.item}>
          <Text style={Styles.itemLabel}>Nama</Text>
          <TextInput placeholder="Budi Susanto" style={Styles.textField} />
        </View>
        <View style={Styles.item}>
          <Text style={Styles.itemLabel}>Email</Text>
          <TextInput
            placeholder="budisusanto@unmuhpnk.ac.id"
            style={Styles.textField}
          />
        </View>
        <View style={Styles.item}>
          <Text style={Styles.itemLabel}>Password</Text>
          <TextInput placeholder="password" style={Styles.textField} />
        </View>
        <View style={Styles.item}>
          <Text style={Styles.itemLabel}>Konfirmasi Password</Text>
          <TextInput placeholder="password" style={Styles.textField} />
        </View>
        <View style={Styles.checkbox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text style={Styles.textCheckBox}>
            Saya setuju dengan kebijakan dan syarat
          </Text>
        </View>
        <View style={Styles.button}>
          <Button text="Register" />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  )
}

export default Register
