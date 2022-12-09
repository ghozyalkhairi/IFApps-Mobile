import {createStackNavigator} from '@react-navigation/stack'
import Profile from '../../screens/Profile'

const Stack = createStackNavigator()

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  )
}

export default ProfileStack
