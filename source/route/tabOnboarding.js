import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { OnboardingFor, OnboardingOne, OnboardingTree, OnboardingTwo } from '../screen/onboarding'

export default function Tabs() {
  const Tab = createMaterialTopTabNavigator()
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            color: 'transparent',
            height: 0
          },
          tabBarItemStyle: { shadowColor: 'none' },
          tabBarStyle: { backgroundColor: 'transparent', height: 0 }
        }}>
        <Tab.Screen
          name="OnboardingOne"
          component={OnboardingOne}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="OnboardingTwo"
          component={OnboardingTwo}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="OnboardingTree"
          component={OnboardingTree}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name="OnboardingFor"
          component={OnboardingFor}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
  )
}
