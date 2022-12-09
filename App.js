import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Landing from './src/screens/Landing'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import IFApps from './src/navigators/tabs/IFApps'
import {theme} from './src/theme'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="IFApps" component={IFApps} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
