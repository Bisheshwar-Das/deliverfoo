import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)

  return (
    <View className="absolute bottom-10 w-full z-50">
        <TouchableOpacity className="bg-[#00CCBB] p-4 mx-5 rounded-lg flex-row">
            <Text className="text-white font-extrabold text-lg bg-[#01A296] px-2 py-1">{items.length}</Text>
            <Text className="flex-1 text-center text-white font-extrabold text-lg">View Basket</Text>
            <Text className="text-lg text-white font-extrabold ">${basketTotal.toFixed(2)}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon