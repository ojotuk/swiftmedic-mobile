import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setTitle } from '../../slices/app.slice'

const Category = ({ route, navigation }) => {
  const category = route?.params?.category
  console.log(category)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(setTitle({ title: category }))
  }, [route])
  return (
    <View>
      <Text>Category {category}</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({})
