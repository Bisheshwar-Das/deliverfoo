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
      restaurants[]->{
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
  },[id]);

  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="font-bold text-xl capitalize ">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-gray-500 px-4 text-xs capitalize">{description}</Text>
      <ScrollView 
       horizontal
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{paddingHorizontal: 5}}
       className="pt-0">
        {/*restaurant cards*/}
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
      </ScrollView>
    </View>
  )
}

export default FeaturedRow