import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {AdjustmentsVerticalIcon, ChevronDownIcon, MagnifyingGlassIcon, UserIcon} from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';


const HomeScreen = () => {
    const navigation = useNavigation()
    const [featuredCategories, setFeaturedCAtegories]= useState([])

    
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[]);

    useEffect(()=>{
        sanityClient.fetch(
            `*[_type=="featured"] {
            ...,
            restaurants[]->{
              ...,
              dishes[]->
            }
          }`
          ).then((data)=>{
            setFeaturedCAtegories(data)
          })
    },[])

    return (
    <SafeAreaView className="bg-white pt-5">
            {/*header*/}
            <View className="flex-row pb-3 items-center mx-4 space-x-2" >
                <Image source={{uri:'https://links.papareact.com/wru',}}
                    className="rounded-full p-4 bg-gray-500 h-7 w-7"/>

                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">
                            Deliver Now!
                    </Text>
                    <Text className="font-bold text-xl">
                            Current Location
                            <ChevronDownIcon size={20} color="#00CCBB"/>
                    </Text>
                </View>
                <View >
                    <UserIcon  size={25} color="#00CCBB"/>
                </View>
            </View>

            {/** search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row flex-1 items-center space-x-2 bg-gray-300 p-3">
                    <MagnifyingGlassIcon color="gray" size={20}/>
                    <TextInput placeholder='Restaurants and Cuisines' keyboardType='default'/>
                </View>

                <AdjustmentsVerticalIcon color="#00CCBB"/>
            </View>

            {/*Body */}
            <ScrollView className="bg-gray-300">
                {/* Categories */}
                <Categories/>
                {/* Features */}
                <View className="pb-40">

                {featuredCategories?.map(category =>(
                <FeaturedRow  
                    key={category._id}
                    id={category._id}
                    title={category.name} 
                    description={category.short_description} 
                    />
                ))}
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen