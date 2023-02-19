import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TailwindProvider } from 'tailwindcss-react-native';
import React,{useState,useEffect} from "react";
import {firebase} from './config';
import Login from "./src/Login";
import HomeScreen from "./src/HomeScreen";
import Registration from "./src/Registration";
import Dashboard from "./src/Dashboard";
import Payment from "./src/Payment";
import Status from "./src/Status";
import SubjectChoice from "./src/SubjectChoice";
import Appform from "./src/Applicationform";
import AdminLogin from "./src/AdminLogin";
import Header from "./components/Header";
import AdminDash from "./src/AdminDash";
import PublishResult from "./src/PublishResult";
import ProcessApplication from "./src/ProcessApplication";
import ShowResults from "./src/ShowResults";

const Stack =  createStackNavigator();

function App (){
  const [initializing , setInitializing]=useState(true);
  const [user,setUser] = useState();
  //Handle user state change
  function onAuthStateChanged(user){
    setUser(user);
    if(initializing) setInitializing(false);
  }
  useEffect (()=> {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);
  if(initializing)return null;
  if(!user){
    return (
      <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        
        />
        <Stack.Screen
        name="Login"
        component={Login}        
        />
        <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerTitle:()=> <Header name="Ckruet Admission"/>,
          headerStyle : {
            height:150,
            backgroundColor:'#00e4d0',
            elevation:25
          }
        }}
        
        />
        <Stack.Screen
        name="AdminLogin"
        component={AdminLogin}
        
        />
         <Stack.Screen
        name="AdminDash"
        component={AdminDash}
        
        />
         <Stack.Screen
        name="PublishResult"
        component={PublishResult}
        
        />
            <Stack.Screen
        name="ProcessApplication"
        component={ProcessApplication}
        
        />
         <Stack.Screen
        name="ShowResults"
        component={ShowResults}
        
        />
       


      
      </Stack.Navigator>
      
    )
  }
  return(
 
    <Stack.Navigator>
        <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        />
        <Stack.Screen
        name="Appform"
        component={Appform}
        
        />
        <Stack.Screen
        name="Payment"
        component={Payment}
        
        />
         <Stack.Screen
        name="SubjectChoice"
        component={SubjectChoice}
        
        />
         <Stack.Screen
        name="Status"
        component={Status}
        
        />
        </Stack.Navigator>
   
     

  )
}
export default ()=>{
  return (

    <NavigationContainer>
      <App/>
    </NavigationContainer>
 
  )
}