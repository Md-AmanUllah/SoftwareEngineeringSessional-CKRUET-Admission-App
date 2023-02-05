import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PublishResult from './screens/components/PublishResult';
import SubjectChoice from './screens/components/SubjectChoice';
import Status from './screens/components/Status';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="PublishResult" component={PublishResult} /> */}
          {/* <Stack.Screen name="SubjectChoice" component={SubjectChoice} /> */}
          <Stack.Screen name="Status" component={Status} />
        </Stack.Navigator>
      </NavigationContainer>
   </TailwindProvider>
  );
}

