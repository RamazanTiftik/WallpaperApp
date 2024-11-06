import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryCard from '../components/CategoryCard'
import data from "../data/category.json"
import ImageCard from "../components/ImageCard"

const CollectionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.heading}>Collections</Text>
      <FlatList
        data={data}
        renderItem={({ item, index }) => <CategoryCard item={item} index={index} />}
        contentContainerStyle={{
          paddingBottom: 200
        }}
      />
    </SafeAreaView>
  )
}

export default CollectionScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121928",
    paddingHorizontal: 20
  },
  heading: {
    color: "white",
    fontSize: 30,
    fontWeight: "700"
  }
})