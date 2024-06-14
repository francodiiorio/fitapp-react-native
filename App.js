import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LoginPage from './screens/Login/LoginPage';
import ExcerciseListPage from './screens/ExcerciseList/ExcerciseListPage';

const Stack = createNativeStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Bottom Navigation'
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Login'
          component={LoginPage}
          options={{headerShown: false}}
          />
<Stack.Screen 
        name='ExcerciseListPage'
        component={ExcerciseListPage}              

/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


