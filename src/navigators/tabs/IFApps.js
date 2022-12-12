import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeStack from '../stacks/HomeStack'
import ProfileStack from '../stacks/ProfileStack'
import NewsStack from '../stacks/NewsStack'
import HomeIcon from '../../assets/icons/home.svg'
import NewsIcon from '../../assets/icons/news.svg'
import ProfileIcon from '../../assets/icons/profile.svg'
import {colors} from '../../theme'

const Tab = createBottomTabNavigator()

function IFApps() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        tabBarStyle: {
          marginHorizontal: -36,
        },
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Regular',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              width={24}
              height={24}
              fill={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsStack}
        options={{
          tabBarIcon: ({focused}) => (
            <NewsIcon
              width={24}
              height={24}
              fill={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => (
            <ProfileIcon
              width={24}
              height={24}
              fill={focused ? colors.primary : colors.secondary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default IFApps
