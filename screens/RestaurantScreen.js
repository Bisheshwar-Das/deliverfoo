import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'
import BasketIcon from '../components/BasketIcon'

const RestaurantScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[]);

    const {params:
        {
            id,
            imgUrl, 
            title, 
            rating,
            genre, 
            address, 
            short_description, 
            dishes, 
            long, 
            lat
        },
    } = useRoute()

  return (
    <>
    <BasketIcon/>
        <ScrollView>
        <View className="relative">
            <Image 
                source={{uri: urlFor(imgUrl).url(), }}
                className="w-full h-56 bg-gray-300 p-4"
            />
            <TouchableOpacity
            onPress={navigation.goBack}  
            className="absolute top-10 left-5 p-1 bg-gray-100 rounded-full">
                <ArrowLeftIcon color={"#00cc88"} size={20}/>
            </TouchableOpacity>
        </View>

        <View className="bg-white">
            <View className="px-4 pt-4">
                <Text className="text-3xl font-bold ">{title}</Text>
                <View className="flex-row space-x-2 my-1">
                    <View className="flex-row items-center space-x-1">
                     <StarIcon color="green" opacity={.5} size={22}/>
                     <Text className="text-s text-gray-500">
                        <Text className="text-green-500">{rating}</Text> ·{genre}
                     </Text>   
                    </View>

                    <View className="flex-row items-center space-x-1">
                     <MapPinIcon color="green" opacity={.5} size={22}/>
                     <Text className="text-s text-gray-500">Nearby · {address}
                     </Text>   
                    </View>   
                </View>
                <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
            </View>

            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                <QuestionMarkCircleIcon color={"gray"}  opacity={.6} size={20}/>
                <Text className="pl-2 flex-1 text-s font-bold">
                    Have a food alergy?
                </Text>
                <ChevronRightIcon color={"#00CC88"} size={20} />
            </TouchableOpacity>
        </View>

        <View className="pb-40">
            <Text className="pt-4 text-center font-bold mb-4 text-xl" >MENU</Text>
            {/*...dish rows...*/}
            {dishes.map(dish =>(
                <DishRow
                    key={dish._id}
                    id={dish._id}
                    name={dish.name}
                    description={dish.short_descritpion}
                    price={dish.price}
                    image={dish.image}
                />
                ))}
        </View>
    </ScrollView>
    </>
  )
}

export default RestaurantScreen