import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import EvilIcons from "react-native-vector-icons/EvilIcons"
import AntDesing from "react-native-vector-icons/AntDesign"
import data from "../data/images.json"
import ImageCard from "../components/ImageCard"

const SearchScreen = () => {
    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>

                <View style={styles.textContainer}>
                    <Text style={styles.header}>Search</Text>
                    <Text style={styles.subHeader}>Searching through hundred of photos will be so much easier now</Text>
                </View>

                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconButton}>
                        <EvilIcons name={"close"} size={30} color={"white"} />
                    </TouchableOpacity>
                </View>

            </View>

            {/* input container along with icon */}
            <View style={styles.inputContainer}>
                <AntDesing name={"search1"} color={"#a0a3a9"} size={25} />
                <TextInput style={styles.textInput} placeholder="Search" placeholderTextColor={"#a0a3a9"} />
            </View>

            {/* render some data */}
            <FlatList
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <ImageCard item={item} index={index} />
                    )
                }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-evenly", margin: 3 }}
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            />

        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121928",
        padding: 20
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    header: {
        color: "white",
        fontSize: 30,
        fontWeight: "600"
    },
    subHeader: {
        color: "white",
        fontSize: 15,
        fontWeight: "400"
    },
    textContainer: {
        width: "80%"
    },
    iconContainer: {

    },
    iconButton: {
        backgroundColor: "#414753",
        height: 40,
        width: 40,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        height: 50,
        borderWidth: 2,
        borderColor: "#887ef9",
        marginVertical: 20,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10
    },
    textInput: {
        flex: 1,
        color: "white",
        marginLeft: 10,
        fontSize: 20
    }
})