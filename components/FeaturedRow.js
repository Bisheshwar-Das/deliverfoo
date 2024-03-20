import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCards from './RestaurantCards'
import sanityClient from '../sanity'

const FeaturedRow = ({id, title, description}) => {
  const[restaurants,setRestaurants]=useState([])
  useEffect(()=>{
    sanityClient.fetch(`
    *[_type=="featured" && _id==$id]{
      ...,
      restaurant[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      },
    }[0]
    `,
    {id}
    ).then((data)=>{
      setRestaurants(data?.restaurants);
    });
  },[]);

  console.log(restaurants)
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

        {
          restaurants?.map(restaurant=>(
            <RestaurantCards
              key={restaurant._id}
              id={restaurant._id}
              imgUrl={restaurant.image}
              address={restaurant.address} 
              title={restaurant.name}
              dishes={restaurant.dishes} 
              rating={restaurant.rating}
              short_description={restaurant.short_description} 
              genre={restaurant.type?.name}
              long={restaurant.long} 
              lat={restaurant.lat}
              />
          ))
        }
        {/*restaurant cards*/}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow