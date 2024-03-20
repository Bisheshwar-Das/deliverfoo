import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-gray-500 px-4 text-xs">{description}</Text>
      <ScrollView 
       horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{paddingHorizontal: 15}}
       className="pt-4">
        {/*restaurant cards*/}
        <RestaurantCards 
          id={123} 
          imgUrl="https://links.papareact.com/gn7" 
          title="YO SHUSHI" 
          rating={4.5}
          genre="Japanese" 
          address="234 main street" 
          short_description="A fast food restaurant" 
          dishes={[ ]} 
          long={20} 
          lat={51}/>
        <RestaurantCards 
          id={123} 
          imgUrl="https://links.papareact.com/gn7" 
          title="YO SHUSHI" 
          rating={4.5}
          genre="Japanese" 
          address="234 main street" 
          short_description="A fast food restaurant" 
          dishes={[ ]} 
          long={20} 
          lat={51}/>
        <RestaurantCards 
          id={123} 
          imgUrl="https://links.papareact.com/gn7" 
          title="YO SHUSHI" 
          rating={4.5}
          genre="Japanese" 
          address="234 main street" 
          short_description="A fast food restaurant" 
          dishes={[ ]} 
          long={20} 
          lat={51}/>
      </ScrollView>
    </View>
  )
}

export default FeaturedRow