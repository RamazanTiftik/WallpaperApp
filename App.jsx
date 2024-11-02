import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screen/HomeScreen'
import HomeStack from "./navigation/MyStackNavigation"

//icons
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import { LinearGradient } from "expo-linear-gradient"


const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 80,
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 20,
          borderRadius: 30
        },
        tabBarBackground: () => {
          return (
            <LinearGradient
              colors={["#8C69FF", "#3B3599"]}
              style={{
                flex: 1,
                borderRadius: 30
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            />
          )
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#CCCCCC"
      }}>

        <Tab.Screen
          name='HOME_STACK'
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              return <AntDesign
                name={"home"}
                size={focused ? 40 : 30}
                color={color}
              />
            }
          }}
        />

        <Tab.Screen
          name='COLLECTIONS_SCREEN'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              return <FontAwesome5 name={"th-large"} size={focused ? 40 : 30} color={color} />
            }
          }}
        />

        <Tab.Screen
          name='SEARCH_SCREEN'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              return <AntDesign name={"search1"} size={focused ? 40 : 30} color={color} />
            }
          }}
        />

        <Tab.Screen
          name='LIKE_SCREEN'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, focused, size }) => {
              return <AntDesign name={"hearto"} size={focused ? 40 : 30} color={color} />
            }
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})