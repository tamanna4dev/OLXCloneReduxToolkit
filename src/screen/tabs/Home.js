import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { HomeScreenJsonData } from "../../JsonData.js/HomeJsonData";

const myData = [
  { title: "Car", icon: require("../../Assets/11.png") },
  { title: "Bike", icon: require("../../Assets/11.png") },
  { title: "Laptops", icon: require("../../Assets/11.png") },
  { title: "Mobile", icon: require("../../Assets/11.png") },
  { title: "Furnitures", icon: require("../../Assets/11.png") },
  { title: "House", icon: require("../../Assets/11.png") },
];

const Home = () => {
  
  return (
    <ScrollView nestedScrollEnabled>
      <View style={styles.container}>
        {/* <View style={styles.head}> */}
        <Text style={styles.logo}>Olx Clone</Text>
        <View style={styles.searchBox}>
          <TextInput placeholder="Search Item here.." style={styles.input} />
          <Image
            source={require("../../Assets/search.png")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.heading}>What are you Looking For ?</Text>
        <View style={{ marginTop: 20 }}>
          <FlatList
            numColumns={3}
            data={myData}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity style={styles.ListItem}>
                  <Image source={item.icon} style={styles.ListIcon} />
                  <Text style={styles.ListTitle}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <Text style={styles.heading1}>Posted Item</Text>
        {HomeScreenJsonData.map((item) => (
          <View key={`${item.id}_${item.item}`}>
            <TouchableOpacity style={styles.item}>
              <Image source={item.Image} style={styles.itemImage} />

              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                <Text style={styles.desc}>{item.Price}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
        {/* <FlatList
          data={[1, 1, 1, 1]}
          renderItem={({}) => {
            return (
              <TouchableOpacity style={styles.item}>
                <Image
                  source={require("../../Assets/gallery.png")}
                  style={styles.itemImage}
                />
                <View>
                  <Text style={styles.name}>{"Iphone 14 pro"}</Text>
                  <Text style={styles.desc}>{"New Bought 5 month before"}</Text>
                  <Text style={styles.price}>{"INR." + "70,000"}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        /> */}
      </View>
    </ScrollView>
    // </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  head: {
    backgroundColor: "#fff",
    padding: 19,
  },
  logo: {
    fontSize: 30,
    fontWeight: "700",
    color: "blue",
    // marginTop:10,
    // marginLeft:10
  },
  searchBox: {
    alignSelf: "center",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    width: "20%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "83%",
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  heading: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
    marginTop: 30,
    marginRight: 94,
  },
  ListItem: {
    width: Dimensions.get("window").width / 3,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEDEDEF8",
    margin: 2,
  },
  heading1: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
    marginTop: 25,
    marginRight: 220,
  },
  ListIcon: { width: 34, height: 34 },
  ListTitle: { fontSize: 13, fontWeight: "500", marginTop: 10 },
  item: {
    width: "100%",
    height: 90,
    backgroundColor: "#fff",
    marginTop: 7,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 30,
    marginRight: 20,
    padding: 5,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginLeft: 10,
    marginTop: 5,
  },
  name: {
    marginTop: 7,

    fontSize: 14,
    fontWeight: "600",
    marginLeft: 10,
  },
  desc: {
    fontSize: 13,
    marginLeft: 10,
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 10,
    color: "green",
  },
});
