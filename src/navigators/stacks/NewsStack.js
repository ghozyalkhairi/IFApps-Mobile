import {createStackNavigator} from '@react-navigation/stack'
import News from '../../screens/News'

const Stack = createStackNavigator()

function NewsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NewsScreen" component={News} />
    </Stack.Navigator>
  )
}

export default NewsStack
