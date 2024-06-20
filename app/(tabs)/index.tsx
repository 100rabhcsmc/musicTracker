import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Lyric } from "react-native-lyric";

const SongLyrics = () => {
  const [data, setData] = useState(null);
  const [lyrics, setLyrics] = useState([]);

  const parseLyrics = (lyrics) => {
    let result = lyrics.match(/\[(.*?)\]/);
  };

  useEffect(() => {
    fetch(
      "https://dev-api.conqt.com/api/tc-song-vault/get-all-song-list?page=1&limit=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Parsed JSON:", data.data[0].lyrics);
        setData(data);
        const parsedLyrics = data.data[0].lyrics;
        // setLyrics(parsedLyrics);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return <ScrollView style={styles.container}></ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  line: {
    flexDirection: "row",
    marginBottom: 8,
  },
  timestamp: {
    marginRight: 8,
    fontWeight: "bold",
  },
  text: {
    flex: 1,
  },
});

export default SongLyrics;
