import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setTitle } from '../../slices/app.slice'

const Category = ({ route, navigation }) => {
  const product = route?.params?.product
  console.log(product)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setTitle({ title: product?.title }))
  }, [route])
  return (
    <View>
      <Text>Product Description {product?.description}</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})
