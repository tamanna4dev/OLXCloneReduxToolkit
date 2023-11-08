import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import Home from "./tabs/Home";
import Search from "./tabs/Search";
import Add from "./tabs/Add";
import Wishlist from "./tabs/Wishlist";
import User from "./tabs/User";

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Add />
      ) : selectedTab == 3 ? (
        <Wishlist />
      ) : (
        <User />
      )}

      <View style={styles.bottomTabs}>
        <TouchableOpacity
          style={styles.Tab}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Image
            source={require("../Assets/house.png")}
            style={[
              styles.TabIcon,
              { tintColor: selectedTab == 0 ? "blue" : "black" },
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Tab}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Image
            source={require("../Assets/search.png")}
            style={[
              styles.TabIcon,
              { tintColor: selectedTab == 1 ? "blue" : "black" },
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Tab}
          onPress={() => {
            setSelectedTab(2);
          }}
        >
          <Image
            source={require("../Assets/add.png")}
            style={[
              styles.TabIcon,
              { tintColor: selectedTab == 2 ? "blue" : "black" },
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Tab}
          onPress={() => {
            setSelectedTab(3);
          }}
        >
          <Image
            source={require("../Assets/user .png")}
            style={[
              styles.TabIcon,
              { tintColor: selectedTab == 3 ? "blue" : "black" },
            ]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Tab}
          onPress={() => {
            setSelectedTab(4);
          }}
        >
          <Image
            source={require("../Assets/heart.png")}
            style={[
              styles.TabIcon,
              { tintColor: selectedTab == 4 ? "blue" : "black" },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  bottomTabs: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
  },
  Tab: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  TabIcon: {
    width: 30,
    // bottom: 0,

    height: 30,
  },
});
