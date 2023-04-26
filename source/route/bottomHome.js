import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Home } from '../screen/home'
import { Statistic } from '../screen/statistic'
import { Options } from '../screen/options'
import { Card } from '../screen/card'
import { Profil } from '../screen/profil'
import { Theme } from '../theme'
import SvgStatistic from '../image/bottomTab/Statistic'
import SvgCard from '../image/bottomTab/Card'
import SvgPlus from '../image/bottomTab/Plus'
import SvgProfil from '../image/bottomTab/Profil'
import SvgHome from '../image/bottomTab/Home'

const Tab = createBottomTabNavigator()

export function Bottom() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Theme.colors.purple[10],
        tabBarLabelStyle: { fontSize: 14 },
        tabBarStyle: { height: 65, paddingBottom: 10 }
      }}
      >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <SvgHome/>
          }
        }}
      />

      <Tab.Screen
        name="Statistic"
        component={Statistic}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <SvgStatistic/>
          }
        }}
      />

      <Tab.Screen
        name="Options"
        component={Options}
        options={{
          headerShown: false,
          tabBarButton: props => (
            <View style={styles.a}>
              <TouchableOpacity {...props} style={styles.addButtonContainer}>
                <SvgPlus/>
              </TouchableOpacity>
            </View>
          )
        }}
      />

      <Tab.Screen
        name="My Card"
        component={Card}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <SvgCard/>
          }
        }}
      />

      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return <SvgProfil/>
          }
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  a: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 50
  },
  addButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Theme.colors.purple[10]
  }
})
