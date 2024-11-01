import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImageCard from '../components/ImageCard'
import data from "../data/images.json"


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Header />

      <FlatList 
        data={data} 
        renderItem={({item, index}) => <ImageCard item={item} index={index} />} 
        numColumns={2} 
        columnWrapperStyle={{justifyContent: "space-evenly", margin: 3}}
      />

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121928",
    flex: 1,
    paddingHorizontal: 20
  },
  imageContainer: {
    justifyContent: "flex-end",
    margin: 5,
    overflow: "hidden"
  },
  flatListRow: {
    justifyContent: "space-between"
  }
})