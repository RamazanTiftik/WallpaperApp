import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"


const ImageCard = ({ item }) => {
  return (
    <View style={styles.container} >
      <Image source={{ uri: item.image }} style={styles.converImage} />
      <View style={styles.iconContainer}>

        <TouchableOpacity onPress={() => {}}>
            <AntDesign name={"hearto"} size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
            <Feather name={"download"} size={30} color="white" />
        </TouchableOpacity>

      </View>
    </View>
  )
}
 
export default ImageCard

const styles = StyleSheet.create({
    container: {
        height: 300,
        width: "50%",
        backgroundColor: "pink",
        margin: 8,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        overflow: "hidden",
        marginRight: 8,
        marginVertical: 10
    },
    converImage: {
        flex: 1
    },
    iconContainer: {
        position: "absolute",
        bottom: 10,
        right: 5,
        height: 80,
        justifyContent: "space-between"
    }
})

const imageUrl = ""
