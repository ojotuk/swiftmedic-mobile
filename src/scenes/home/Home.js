import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  RefreshControl,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { useDispatch } from 'react-redux'
import PaperIntro from './chunks/PaperIntro'
import { COLORS } from '../../theme/theme'
import Category from './chunks/Category'
import { images } from '../../theme/images'
import { setTitle } from '../../slices/app.slice'
import Popular from './chunks/Popular'
import AddToCart from '../../components/cart/AddToCart'

//
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  order: {
    marginHorizontal: 20,
    backgroundColor: COLORS.lightGray1,
    marginVertical: 40,
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
})

const Home = ({ route, navigation }) => {
  const dispatch = useDispatch()
  // Refresh contro
  const [refreshing, setRefreshing] = React.useState(false)
  const onRefresh = React.useCallback(() => {
    setRefreshing(false)
  }, [])

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Alert.alert('Refreshed');
      dispatch(setTitle({ title: 'Swift Medic' }))
      // getData()
    })
    return unsubscribe
  }, [navigation])
  return (
    <ScrollView
      style={styles.root}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <StatusBar barStyle="light-content" />
      <PaperIntro navigation={navigation} />
      <Popular navigation={navigation} />
      <View style={styles.order}>
        <View style={{ flex: 2, paddingRight: 10 }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 30 }}>
            Order quickly with prescription
          </Text>
          <Text style={{ marginBottom: 10, color: COLORS.lightGrayDark }}>
            Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat,
            accumsan id imperdiet et, porttitor at sem.
          </Text>
          <Text style={{ color: COLORS.secondary }}>Save 20%</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={images.doctor}
            style={{ width: 128, height: 128, resizeMode: 'contain' }}
          />
        </View>
      </View>
      <AddToCart />
    </ScrollView>
  )
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
