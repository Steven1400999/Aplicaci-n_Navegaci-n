//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from "./src/screens/HomeScreen";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import OrderScreen from "./src/screens/OrderScreen";
import MenuScreen from "./src/screens/MenuScreen";
import UserScreen from "./src/screens/UserScreen";


//const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Notifications') {
              iconName = focused 
              ? 'notifications-circle-outline'
              : 'notifications-circle-sharp';
            }
            else if (route.name === 'Login') {
              iconName = focused
              ? 'log-in'
              : 'log-in';
            }
            else if (route.name === 'Register') {
              iconName = focused
              ? 'person-add'
              : 'person-add';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="Login" 
          component={LoginScreen}
          options={{
            tabBarStyle: { display: 'none' },
            headerShown: false,
            tabBarButton: () => null
          }}
        />
        <Tab.Screen 
          name="Register" 
          component={RegisterScreen}
          options={{
            tabBarStyle: { display: 'none' },
            headerShown: false,
            tabBarButton: () => null
          }}
        />
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Tab.Screen 
          name="Notifications" 
          component={NotificationsScreen} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}