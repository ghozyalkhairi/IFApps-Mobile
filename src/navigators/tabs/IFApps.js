import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeStack from '../stacks/HomeStack'
import ProfileStack from '../stacks/ProfileStack'
import NewsStack from '../stacks/NewsStack'

const Tab = createBottomTabNavigator()

function IFApps() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="News" component={NewsStack} />
    </Tab.Navigator>
  )
}

export default IFApps
