import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
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
    <SafeAreaView className="bg-white flex-1 relative">
      {/* First Section */}

      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-160 h-160 p-2 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">CKRUET</Text>
        </View>

        <Text className="text-[#2A2B4B] text-2xl font-semibold">Admission App</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Let's Start</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          The Journey
        </Text>

        <Text className="text-[#3C6072] text-base">
          To Become A Proud Student of Country's Top Most Reputed Engineering Universities.
        </Text>
      </View>

      {/* Circle Section */}
      <View className="w-[200px] h-[200px] bg-[#00BCC9] rounded-full absolute top-20 -right-36"></View>
      <View className="w-[200px] h-[200px] bg-[#E99265] rounded-full absolute bottom-20 -left-36"></View>

      {/* Image container */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mb-15"
        />

        <TouchableOpacity
          //onPress={() => navigation.navigate("Discover")}
          onPress={() => navigation.navigate("LogIn")}
          //onPress={() => navigation.navigate("Registration")}
          //onPress={() => navigation.navigate("DashBoard")}
          //onPress={() => navigation.navigate("ApplicationForm")}
          //onPress={() => navigation.navigate("ProcessApplications")}
          //onPress={() => navigation.navigate("Payment")}
          //onPress={() => navigation.navigate("PublishResult")}
          //onPress={() => navigation.navigate("Status")}
          //onPress={() => navigation.navigate("SubjectChoice")}
          //onPress={() => navigation.navigate("PTest")}


          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9] absolute top-20"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
