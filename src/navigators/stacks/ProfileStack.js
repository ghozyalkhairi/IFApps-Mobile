import {createStackNavigator} from '@react-navigation/stack'
import Profile from '../../screens/Profile'
import EditProfile from '../../screens/EditProfile'

const Stack = createStackNavigator()

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="EditProfileScreen" component={EditProfile} />
    </Stack.Navigator>
  )
}

export default ProfileStack
