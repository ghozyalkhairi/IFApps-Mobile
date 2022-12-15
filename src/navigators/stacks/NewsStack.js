import {createStackNavigator} from '@react-navigation/stack'
import News from '../../screens/News'
import NewsDetail from '../../screens/NewsDetail'

const Stack = createStackNavigator()

function NewsStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NewsScreen" component={News} />
      <Stack.Screen name="NewsDetailScreen" component={NewsDetail} />
    </Stack.Navigator>
  )
}

export default NewsStack
