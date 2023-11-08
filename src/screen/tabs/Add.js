import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/PostSlice";

const Add = () => {
  const [photo, setPhoto] = useState({
    assets: [
    {
      fileName:'',
      fileSize:197454,
      height:1280,
      type:'image/jpeg',
      uri:'',
      width:960
    }

    ],
  });
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
const dispatch = useDispatch()
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const openCamera = async () => {
    const result = await launchImageLibrary({ mediaType: "Photo" });
    if (!result.didCancel) {
      setPhoto(result);
    }
    console.log(result);
  };
const addItem =() =>{
  dispatch(addPost({name:name,price:price,desc:desc,image}))
}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Post</Text>
      </View>
      <TouchableOpacity
        style={styles.imageView}
        onPress={() => {
          requestCameraPermission();
        }}
      >
        {photo.assets[0].uri == '' ? (
           <Image
           source={require("../../Assets/Placeholder.jpg")}
           style={styles.imageView}
         />

        ):(
          <Image source={{uri : photo.assets[0].uri }} style={styles.imageView} />
        )}
        {/* <Image
          source={require("../../Assets/Placeholder.jpg")}
          style={styles.imageView}
        /> */}
      </TouchableOpacity>
      <TextInput
        placeholder="Enter Item Name"
        style={styles.input}
        value={name}
        onChangeText={(txt) => setName}
      />
      <TextInput
        placeholder="Enter Item Desc"
        style={[styles.input, { marginTop: 10 }]}
        value={desc}
        onChangeText={(txt) => setDesc}
      />
      <TextInput
        placeholder="Enter Item Price"
        style={[styles.input, { marginTop: 10 }]}
        value={price}
        onChangeText={(txt) => setPrice}
      />
      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Post my Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#000",
  },
  imageView: {
    width: "65%",
    height: 300,
    alignSelf: "center",
    marginTop: 20,
  },
  input: {
    width: "43%",
    height: 48,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 50,
    padding: 12,
    // paddingLeft:20
  },
  btn: {
    width: "43%",
    height: 52,
    marginTop: 50,
    borderRadius: 10,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
