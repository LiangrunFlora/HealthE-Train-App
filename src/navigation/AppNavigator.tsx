import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen.tsx";
import DetailScreen from "../screens/DetailScreen.tsx";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import KnowledgeScreen from "../screens/knowledgeBase/knowledgeScreen.tsx";
import NotePage from "../screens/knowledgeBase/NotePage.tsx";
import RepositoryItem from "../screens/knowledgeBase/RepositoryItem.tsx";
import MarkdownRenderer from "../screens/knowledgeBase/MarkdownRender.tsx";

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="KnowledgeBase" component={KnowledgeScreen}/>
        <Stack.Screen name="Note" component={NotePage}/>
        <Stack.Screen name="Repository" component={RepositoryItem}/>
        <Stack.Screen name="MarkdownRenderer" component={MarkdownRenderer}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
