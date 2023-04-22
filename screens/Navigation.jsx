import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import { PostsScreen } from "./Posts";

const Stack = createNativeStackNavigator();

//<Routes>...</Routes> => Stack.Navigator 

export const Navigation = () => {
 return <NavigationContainer>
  <Stack.Navigator>
   <Stack.Screen name='Home' component={HomeScreen} option={{ title: 'News' }} />
   <Stack.Screen name='Posts' component={PostsScreen} option={{ title: 'Article' }} />
  </Stack.Navigator>
 </NavigationContainer>
}