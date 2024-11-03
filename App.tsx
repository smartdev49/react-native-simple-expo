// import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutesParams } from './router';
import Settings from './Settings';
import Home from './Home';
import Details from './Details';
import { Button, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Tab = createBottomTabNavigator<RoutesParams>();
const Stack = createNativeStackNavigator<RoutesParams>();
const Drawer = createDrawerNavigator<RoutesParams>();
export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === 'ios' &&
          (<Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Settings' component={Settings} />
            <Tab.Screen name='Details' component={Details} />
          </Tab.Navigator>)
        }
      {Platform.OS === "android" && 
        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='Settings' component={Settings} />
          <Drawer.Screen name='Details' component={Details} />
        </Drawer.Navigator>
      }
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Settings' component={Settings} />
        <Stack.Screen name='Details' component={Details}
          options={({route})=>({
            headerRight: () => {
              return (
                <Button title='Buy'
                  onPress={() => {}}
                  disabled={route.params.stock === 0}
                  />
              )
            }
          })} />
    </NavigationContainer>
  );
}
