import { ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

//icons
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const ShowWallpaperScreen = () => {

    const navigation = useNavigation()
    const route = useRoute()
    const item = route.params.item
    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        <>
            <StatusBar hidden />

            <ImageBackground
                source={{ uri: item.image }}
                style={styles.container} >

                <TouchableOpacity style={styles.backIconContainer} onPress={handleBackPress} >
                    <Ionicons name={'chevron-back'} color={"white"} size={30} />
                </TouchableOpacity>

                <View style={styles.iconContainer}>

                    <TouchableOpacity onPress={() => { }}>
                        <AntDesign name={"hearto"} size={30} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Feather name={"download"} size={30} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <FontAwesome name={"share"} size={30} color="white" />
                    </TouchableOpacity>

                </View>

            </ImageBackground>
        </>
    )
}

export default ShowWallpaperScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121928"
    },
    backIconContainer: {
        height: 40,
        width: 40,
        backgroundColor: "#414753",
        borderRadius: 10,
        margin: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    iconContainer: {
        position: "absolute",
        bottom: 150,
        right: 20,
        height: 120,
        justifyContent: "space-between"
    }
})