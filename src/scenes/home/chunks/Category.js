import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { MaterialIcons } from 'react-native-vector-icons'
import { COLORS, FONTS } from '../../../theme/theme'
import { setTitle } from '../../../slices/app.slice'
import { images } from '../../../theme/images'

//
const Category = ({ navigation }) => {
  const dispatch = useDispatch()
  const navItem = [
    {
      name: 'Disposable',
      category: 'disposable',
      icon: images.disposable,
    },
    {
      name: 'Orthopaedic Equipment',
      category: 'orthopaedic',
      icon: images.disposable,
    },
    {
      name: 'Theater Equipment',
      category: 'theater',
      icon: images.disposable,
    },
    {
      name: 'General Surgery Equipment',
      category: 'general surgery',
      icon: images.disposable,
    },
    {
      name: 'Labour Kit',
      category: 'labour kit',
      icon: images.disposable,
    },
    {
      name: 'Children Kit',
      category: 'children kit',
      icon: images.disposable,
    },
  ]

  React.useEffect(() => {
    ;() => dispatch(setTitle({ title: 'Swift Medic' }))
  }, [])
  return (
    <View style={styles.root}>
      <Text style={{ color: COLORS.white, marginBottom: 10 }}>
        Shop by Category
      </Text>
      <ScrollView
        horizontal
        fadingEdgeLength={2}
        showsHorizontalScrollIndicator={false}
      >
        {navItem.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Category', { category: item.category })
            }
            key={index}
            style={styles.item}
          >
            <View style={styles.icon}>
              <Image source={item.icon} style={{ width: 32, height: 32 }} />
            </View>
            <View>
              <Text style={{ ...FONTS.h4, fontWeight: 'bold' }}>
                {item.name}
              </Text>
              <Text
                style={{ ...FONTS.h4, marginTop: 20, color: COLORS.primary }}
              >
                browse
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  root: {
    marginTop: 50,
  },
  item: {
    backgroundColor: COLORS.white,
    width: 200,
    height: 150,
    marginRight: 10,
    borderRadius: 5,
    padding: 10,
    shadowColor: COLORS.secondary,
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  icon: {
    backgroundColor: COLORS.lightSecondary,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    //   opacity:0.2,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 0,
  },
})
