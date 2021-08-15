import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native'
import { useDispatch } from 'react-redux'
import {
  MaterialIcons,
  MaterialCommunityIcons,
} from 'react-native-vector-icons'
import { COLORS, FONTS } from '../../../theme/theme'
import { setTitle, addToCart, addToPreCart } from '../../../slices/app.slice'
import { images } from '../../../theme/images'

//
const Popular = ({ navigation }) => {
  const dispatch = useDispatch()
  const navItem = [
    {
      title: 'Mc Arthur Gloves',
      category: 'disposable',
      icon: images.product,
      price: '3000',
      description:
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.',
    },
    {
      title: '4 Wheel Stretcher',
      category: 'orthopaedic',
      icon: images.product,
      price: '5000',
      description:
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.',
    },
    {
      title: 'Dusk Framer',
      category: 'theater',
      icon: images.product,
      price: '5000',
      description:
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.',
    },
    {
      title: 'Automatic Catridge Lock',
      category: 'general surgery',
      icon: images.product,
      price: '9000',
      description:
        'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.',
    },
  ]

  const handleAddToCart = (item) => {
    dispatch(addToPreCart({ item }))
  }
  return (
    <View style={styles.root}>
      <Text style={{ color: COLORS.primary, marginBottom: 10 }}>
        Popular Product
      </Text>
      <ScrollView
        horizontal
        fadingEdgeLength={2}
        showsHorizontalScrollIndicator={false}
      >
        {navItem.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Description', { product: item })}
            key={index}
            style={styles.item}
          >
            <View style={styles.icon}>
              <ImageBackground
                source={item.icon}
                style={{ width: 200, height: 200 }}
                resizeMode="contain"
              />
              <View style={{ position: 'absolute', top: 10, right: 10 }}>
                <MaterialCommunityIcons
                  size={20}
                  color={COLORS.secondary}
                  name="heart-outline"
                />
              </View>
            </View>
            <View style={styles.desc}>
              <View>
                <Text style={{ color: COLORS.white }}>{item.title}</Text>
                <Text
                  style={{
                    ...FONTS.h4,
                    marginTop: 1,
                    fontStyle: 'italic',
                    color: COLORS.white,
                  }}
                >
                  {item.category}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{ color: COLORS.white }}>NGN {item.price}</Text>
                <TouchableOpacity onPress={() => handleAddToCart(item)}>
                  <MaterialCommunityIcons
                    color={COLORS.secondary}
                    size={30}
                    name="cart-plus"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default Popular

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    paddingLeft: 20,
  },
  item: {
    width: 200,
    height: 300,
    marginRight: 10,
    borderRadius: 5,
    // padding: 10,
    shadowColor: COLORS.secondary,
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    flex: 1,
    width: '90%',
    marginHorizontal: '5%',
    transform: [{ translateY: 20 }, { rotateZ: '0deg' }],
  },
  desc: {
    backgroundColor: COLORS.primary,
    flex: 1,
    justifyContent: 'space-between',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    paddingTop: 50,
  },
})
