import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [songName, setsongName] = useState("");
  const [artistName, setartistName] = useState("");

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }

    fetch(
      "https://dev-api.conqt.com/api/tc-song-vault/get-all-song-list?page=1&limit=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Parsed JSON:", data.data[0].track_title);

        const tractTitle = data.data[0].track_title;
        let songTitle = tractTitle.replace(/\s*\([^)]*\)/g, "");
        setsongName(songTitle);
        let artistName = data.data[0].artist_name;
        setartistName(artistName);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ flex: 3, backgroundColor: "green" }}></View>
      <View
        style={{
          // flex: 0.4,
          padding: 5,
          backgroundColor: "black",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          style={{}}
          source={require("@/assets/images/musicProfile.png")}
        />
        <View style={{ paddingHorizontal: 5, width: "80%" }}>
          <Text style={{ color: "white", fontSize: 22, fontWeight: "700" }}>
            {songName}
          </Text>
          <Text style={{ color: "white", fontSize: 16 }}>{artistName}</Text>
        </View>
        <Image style={{}} source={require("@/assets/images/favorite.png")} />
      </View>
      <View
        style={{
          flex: 0.5,
          backgroundColor: "black",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image style={{}} source={require("@/assets/images/headphone.png")} />
        <Image style={{}} source={require("@/assets/images/setting.png")} />
        <TouchableOpacity style={{}}>
          <Image
            style={{ width: 60, height: 60 }}
            source={require("@/assets/images/playPause.png")}
          />
        </TouchableOpacity>

        <Image style={{}} source={require("@/assets/images/replay.png")} />
        <Image style={{}} source={require("@/assets/images/checkmark.png")} />
      </View>
    </SafeAreaView>
  );
}
