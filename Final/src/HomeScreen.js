// import {
//     View,
//     Text,
//     SafeAreaView,
//     Image,
//     TouchableOpacity,
//   } from "react-native";
//   import React, { useLayoutEffect } from "react";
//   import * as Animatable from "react-native-animatable";
  
//   import { useNavigation } from "@react-navigation/native";
//   import { HeroImage } from "../assets";
  

  
//   const HomeScreen = () => {
//     const navigation = useNavigation();
  
//     useLayoutEffect(() => {
//       navigation.setOptions({
//         headerShown: false,
//       });
//     }, []);
  
//     return (
//       <SafeAreaView className="bg-white flex-1 relative">
//         {/* First Section */}
  
//         <View className="flex-row px-6 mt-8 items-center space-x-2">
//           <View className="w-160 h-160 p-2 bg-black rounded-full items-center justify-center">
//             <Text className="text-[#00BCC9] text-3xl font-semibold">CKRUET</Text>
//           </View>
  
//           <Text className="text-[#2A2B4B] text-2xl font-semibold">Admission App</Text>
//         </View>
  
//         {/* Second Section */}
//         <View className="px-6 mt-8 space-y-3">
//           <Text className="text-[#3C6072] text-[42px]">Let's Start</Text>
//           <Text className="text-[#00BCC9] text-[38px] font-bold">
//             The Journey
//           </Text>
  
//           <Text className="text-[#3C6072] text-base">
//             To Become A Proud Student of Country's Top Most Reputed Engineering Universities.
//           </Text>
//         </View>
  
//         {/* Circle Section */}
//         <View className="w-[200px] h-[200px] bg-[#00BCC9] rounded-full absolute top-20 -right-36"></View>
//         <View className="w-[200px] h-[200px] bg-[#E99265] rounded-full absolute bottom-20 -left-36"></View>
  
//         {/* Image container */}
//         <View className="flex-1 relative items-center justify-center">
//           <Animatable.Image
//             animation="fadeIn"
//             easing="ease-in-out"
//             source={HeroImage}
//             className="w-full h-full object-cover mb-15"
//           />
//     <View style={{ flexDirection: 'row' }}>
//   <TouchableOpacity
//     style={{
//       position: 'absolute',
//       bottom: 20,
//       left: 0,
//       width: 100,
//       height: 40,
//       borderLeftWidth: 2,
//       borderRightWidth: 2,
//       borderTopWidth: 4,
//       borderColor: '#00BCC9',
//       borderRadius: 50,
//       alignItems: 'center',
//       justifyContent: 'center',
//     }}
//     onPress={() => navigation.navigate('Login')}
//   >

//       <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
//         User
//       </Text>
//   </TouchableOpacity>
//   <TouchableOpacity
//     style={{
//       position: 'absolute',
//       bottom: 20,
//       right: 0,
//       width: 100,
//       height: 40,
//       borderLeftWidth: 2,
//       borderRightWidth: 2,
//       borderTopWidth: 4,
//       borderColor: '#00BCC9',
//       borderRadius: 50,
//       alignItems: 'center',
//       justifyContent: 'center',
//     }}
//     onPress={() => navigation.navigate('AdminLogin')}
//   >
   
//       <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
//         Admin
//       </Text>
//   </TouchableOpacity>
// </View>


//         </View>
//       </SafeAreaView>
//     );
//   };
  
//   export default HomeScreen;





import React, { useLayoutEffect } from "react";
import {
View,
Text,
SafeAreaView,
Image,
TouchableOpacity,
StyleSheet,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
const navigation = useNavigation();

useLayoutEffect(() => {
navigation.setOptions({
headerShown: false,
});
}, []);

return (
<SafeAreaView style={styles.container}>
{/* First Section */}
<View style={styles.logoContainer}>
<View style={styles.logo}>
<Text style={styles.logoText}>CKRUET</Text>
</View>
<Text style={styles.appName}>Admission App</Text>
</View>
  {/* Second Section */}
  <View style={styles.headingContainer}>
    <Text style={styles.heading}>Let's Start</Text>
    <Text style={styles.subheading}>The Journey</Text>
    <Text style={styles.description}>
      To Become A Proud Student of Country's Top Most Reputed Engineering
      Universities.
    </Text>
  </View>

  {/* Circle Section */}
  <View style={styles.circle1}></View>
  <View style={styles.circle2}></View>

  {/* Image container */}
  <View style={styles.imageContainer}>
    <Animatable.Image
      animation="fadeIn"
      easing="ease-in-out"
      source={HeroImage}
      style={styles.image}
    />
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AdminLogin")}
      >
        <Text style={styles.buttonText}>Admin</Text>
      </TouchableOpacity>
    </View>
  </View>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
backgroundColor: "#ccfff5",
flex: 1,
position: "relative",
},
logoContainer: {
alignItems: "center",
flexDirection: "row",
marginTop: 30,
paddingHorizontal: 10,
},
logo: {
alignItems: "center",
backgroundColor: "#000",
borderRadius: 40,
height: 80,
justifyContent: "center",
padding: 2,
width: 80,
},
logoText: {
color: "#00BCC9",
fontWeight: "bold",
fontSize: 18,
},
appName: {
color: "#2A2B4B",
fontWeight: "bold",
fontSize: 24,
marginLeft: 16,
},
headingContainer: {
paddingHorizontal: 24,
marginTop: 10,
marginBottom: 10,
},
heading: {
color: "#3C6072",
fontSize: 42,
},
subheading: {
color: "#00BCC9",
fontSize: 38,
fontWeight: "bold",
marginTop: -10,
marginBottom: 5,
},
description: {
color: "#3C6072",
fontSize: 16,
lineHeight: 24,
marginBottom: 5,
},
circle1: {
backgroundColor: "#00BCC9",
borderRadius: 100,
height: 200,
position: "absolute",
top: 20,
right: 36,
},
circle2: {
backgroundColor: "#E99265",
borderRadius: 100,
height: 200,
width: 200,
position: "absolute",
bottom: 5,
left: -36,
},
buttonContainer: {
flexDirection: "row",
position: "absolute",
bottom: 40,
width: "100%",
justifyContent: "space-around",
},
button: {
width: 100,
height: 40,
borderLeftWidth: 2,
borderRightWidth: 2,
borderTopWidth: 4,
borderColor: "#00BCC9",
borderRadius: 50,
alignItems: "center",
justifyContent: "center",
},
buttonText: {
color: "white",
fontSize: 20,
fontWeight: "bold",
},
});

export default HomeScreen;
