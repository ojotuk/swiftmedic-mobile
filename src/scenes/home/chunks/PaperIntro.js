import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { COLORS, FONTS } from '../../../theme/theme'
import { LinearGradient } from 'expo-linear-gradient'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

// import { TextInput } from 'react-native-paper'
import { MaterialIcons } from 'react-native-vector-icons'
import Category from './Category'
const PaperIntro = ({ navigation }) => {
  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]}
      end={{ x: 0.8, y: 0.8 }}
      start={{ x: 1, y: 1 }}
      // colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.root}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={styles.title}>Welcome !</Text>
      </View>
      <View
        style={{
          height: 45,
          marginRight: 20,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255,0.1)',
          color: COLORS.white,
          marginTop: 20,
          borderRadius: 24,
        }}
      >
        <MaterialIcons
          color={COLORS.secondary}
          size={20}
          name="search"
          style={{ marginRight: 10 }}
        />
        <TextInput
          placeholder="Search"
          style={{ flex: 1, color: COLORS.white }}
        />
        <TouchableOpacity>
          <MaterialIcons size={20} name="send" color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <Category navigation={navigation} />
    </LinearGradient>
  )
}

export default PaperIntro

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.primary,
    minHeight: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 20,
    paddingVertical: 20,
  },
  title: {
    color: COLORS.white,
    ...FONTS.h3,
  },
})
