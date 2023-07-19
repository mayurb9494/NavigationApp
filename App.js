import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import {DrawerContent, createDrawerNavigator} from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from './screens/FavoritesScreen';
import {Ionicons} from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/Favorites-context';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomDrawer = createBottomTabNavigator();
function TabNavigator(){
  return(
    <BottomDrawer.Navigator initialRouteName='Categories1' screenOptions={{
      headerStyle:{ backgroundColor:'#351401'},
      headerTintColor: 'white',
      headerBackgroundContainerStyle:{backgroundColor:'#351401'},
    tabBarActiveTintColor:'#e4baa1',
    tabBarInactiveTintColor:'white',
    tabBarStyle:{backgroundColor:'#351401'},
   // tabBarActiveBackgroundColor:'#351401',
   // tabBarInactiveBackgroundColor:'#351401',
   
   
  
  }}>
  <BottomDrawer.Screen name='Categories1' component={CategoriesScreen} options={{
    title:'Categories',
  
  tabBarIcon:({color,size}) =>(
    <Ionicons name='home' color={color} size={size}/>
  ),
 
  headerShown:false,
  }}/>
  <BottomDrawer.Screen name='Favorites' component={FavoritesScreen} options={{
    tabBarIcon:({color,size}) =>(
      <Ionicons name='star' color={color} size={size}/>
    ),
    headerShown:false,
  }}/>
  
  </BottomDrawer.Navigator>
  );
}
function DrawerNavigator(){
  return(
<Drawer.Navigator screenOptions={{
   headerStyle:{ backgroundColor:'#351401'},
    headerTintColor: 'white',
    sceneContainerStyle:{backgroundColor: '#3f2f25'},
  drawerContentStyle:{backgroundColor: '#351401'},
  drawerInactiveTintColor:'white',
  drawerActiveTintColor:'#351401',
  drawerActiveBackgroundColor:'#e4baa1'
  
  }
    
    }>
<Drawer.Screen name='Categories' component={CategoriesScreen} options={
  {
    title:'All Categories' ,
    drawerIcon:({color,size})=> (<Ionicons name="list" color={color} size={size}/>),
    //headerShown:false,
    
  }
}/>
<Drawer.Screen name='Favorites'component={FavoritesScreen} options={
  {
  drawerIcon:({color,size})=> (<Ionicons name="star" color={color} size={size}/>)
}}/>
</Drawer.Navigator>

  );
}
export default function App() {
  return (
    <>
    <StatusBar style='light'/>
   
    <FavoritesContextProvider>
   
   <NavigationContainer>
<Stack.Navigator screenOptions={{
   headerStyle:{backgroundColor:'#351401'},
    headerTintColor: 'white',
    contentStyle:{backgroundColor: '#3f2f25'}}}>
  <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{
    //title:'All Categories',
    headerShown:false,
  }}/>
  <Stack.Screen name = "MealsOverview" component={MealsOverviewScreen}/>
  <Stack.Screen name="MealDetail" component={MealDetailScreen}
  options={{
    title:'About the Meal'
  }} 
 /* options={{
    headerRight:()=>{
      return <Button title='Tap me!'/>
    },
  }
  
  }*/
  />
</Stack.Navigator>
   
    </NavigationContainer>
    </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
