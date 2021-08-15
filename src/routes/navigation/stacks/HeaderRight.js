import { FontDisplay } from 'expo-font'
import React from 'react'
import {
  StyleSheet, Image, Text, View, TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import {
  MaterialIcons,
  MaterialCommunityIcons,
} from 'react-native-vector-icons'
import { COLORS, FONTS } from '../../../theme/theme'

const styles = StyleSheet.create({
  cart: {
    ...FONTS.h3,
    color: COLORS.white,
    marginRight: 5,
  },
})

const HeaderTitle = ({ cart }) => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
    }}
  >
    <Text style={styles.cart}>{cart ? cart.length : ''}</Text>
    <MaterialIcons color={COLORS.secondary} size={20} name="shopping-cart" />
  </TouchableOpacity>
)

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

const mapStateToProps = (state) => ({
  cart: state.app?.cart,
})
export default connect(mapStateToProps)(HeaderTitle)
