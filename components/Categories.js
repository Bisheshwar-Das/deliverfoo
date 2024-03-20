import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
        paddingBottom:10

    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
        {/* Category Card*/}
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testinga"/>
        <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing2"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testingc"/>
        <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testingd"/>
        <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testingc"/>
        <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testingd"/>
    </ScrollView>
  )
}

export default Categories