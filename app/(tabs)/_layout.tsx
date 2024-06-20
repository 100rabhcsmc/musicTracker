import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Image } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          height: 100,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require("@/assets/images/headphone.png")}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require("@/assets/images/setting.png")}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          tabBarShowLabel: false,
          tabBarItemStyle: { width: 900 },
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: 60, height: 60 }}
                source={require("@/assets/images/playPause.png")}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="refresh"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require("@/assets/images/replay.png")}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={require("@/assets/images/checkmark.png")}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
