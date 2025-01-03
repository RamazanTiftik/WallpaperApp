import { StyleSheet, TouchableOpacity, Text, View, FlatList } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/Ionicons"
import data from "../data/images.json"
import ImageCard from "../components/ImageCard"

const CollectionDetailsScreen = () => {

    const navigation = useNavigation()
    const route = useRoute()
    const item = route.params.item
    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.backIconContainer} onPress={handleBackPress} >
                <Ionicons name={'chevron-back'} color={"white"} size={30} />
            </TouchableOpacity>

            <Text style={styles.header}>{item.name}</Text>
            <Text style={styles.subHeader}>
                Unlimited listed wallpaper from {item.name} collection.
            </Text>

            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <ImageCard item={item} index={index} />
                )}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-evenly", margin: 3 }}
                contentContainerStyle={{
                    paddingBottom: 100
                }}
            />

        </View>
    )
}

export default CollectionDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121928",
        padding: 20
    },
    backIconContainer: {
        height: 40,
        width: 40,
        backgroundColor: "#414753",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        fontSize: 22,
        color: "white",
        fontWeight: "600",
        marginVertical: 10
    },
    subHeader: {
        color: "#cccc",
        fontSize: 15
    }
})