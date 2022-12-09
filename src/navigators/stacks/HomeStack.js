import {createStackNavigator} from '@react-navigation/stack'
import Home from '../../screens/Home'

const Stack = createStackNavigator()

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  )
}

export default HomeStack
