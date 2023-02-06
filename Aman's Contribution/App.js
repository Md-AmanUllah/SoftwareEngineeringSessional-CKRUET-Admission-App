import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Discover from "./screens/Discover";
import ItemScreen from "./screens/ItemScreen";
import LogIn from "./screens/LogIn";
import Registration from "./screens/Registration";
import DashBoard from "./screens/DashBoard";
import ApplicationForm from "./screens/ApplicationForm";
import ProcessApplications from "./screens/ProcessApplications";
import Payment from "./screens/Payment";
import PublishResult from "./screens/PublishResult";
import Status from "./screens/Status";
import SubjectChoice from "./screens/SubjectChoice";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
          <Stack.Screen name="LogIn" component={LogIn} />      
          <Stack.Screen name="Registration" component={Registration} />      
          <Stack.Screen name="DashBoard" component={DashBoard} />      
          <Stack.Screen name="ApplicationForm" component={ApplicationForm} />      
          <Stack.Screen name="ProcessApplications" component={ProcessApplications} />      
          <Stack.Screen name="Payment" component={Payment} />      
          <Stack.Screen name="PublishResult" component={PublishResult} />      
          <Stack.Screen name="Status" component={Status} />      
          <Stack.Screen name="SubjectChoice" component={SubjectChoice} />      
          
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
