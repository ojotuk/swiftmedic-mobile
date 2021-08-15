import * as React from 'react'
import {
  Alert,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native'
import {
  Modal, Portal, Text, Button, Provider,
} from 'react-native-paper'
import { connect, useDispatch } from 'react-redux'
import { AntDesign } from 'react-native-vector-icons'
import { COLORS } from '../../theme/theme'
import { closeCartDialog, addToCart } from '../../slices/app.slice'
import { images } from '../../theme/images'

const AddToCart = ({ openCartDialogue, preCart }) => {
  const [visible, setVisible] = React.useState(false)
  const dispatch = useDispatch()
  // const showModal = () => setVisible(true);
  const hideModal = () => {
    setQty(1)
    dispatch(closeCartDialog())
  }
  const containerStyle = { backgroundColor: 'white', padding: 20 }
  const [quantity, setQty] = React.useState(1)

  //
  const handleQty = (text, type) => {
    switch (type) {
      case '+':
        const qty = Number(quantity) + Number(text)
        setQty(qty)
        // setQty(5)
        // Alert.alert(`${qty}`)
        break
      case '-':
        const qty2 = Number(quantity) - Number(text)
        if (Number(qty2) < 1) return null
        setQty(qty2)
        break
      case 'input':
        const qt = Number(text)
        if (Number(qt) < 1) return null
        setQty(qt)
        break
      default:
        break
    }
  }

  const handleAdd = () => {
    const newItem = { ...preCart, quantity }
    dispatch(addToCart({ item: newItem }))
    hideModal()
    Alert.alert('Added to cart')
  }
  return (
    <Provider>
      <Portal>
        <Modal
          visible={openCartDialogue}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text style={{ textAlign: 'center' }}>{preCart?.title}</Text>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground
              source={images.product}
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text>{preCart.description}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text>Unit Price : </Text>
              <Text>NGN {preCart.price}</Text>
            </View>
            <Text>{Number(quantity) * Number(preCart.price)}</Text>
          </View>
          <View>
            <Text style={{ textAlign: 'right', marginBottom: 10 }}>
              Quantity
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => handleQty(1, '-')}
                style={{
                  color: COLORS.secondary,
                  backgroundColor: COLORS.primary,
                  width: 70,
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <AntDesign size={20} color={COLORS.secondary} name="minus" />
              </TouchableOpacity>
              {/* <ScrollView horizontal={true} style={}> */}
              <TextInput
                onChangeText={(text) => handleQty(text, 'input')}
                value={`${quantity}`}
                keyboardType="numeric"
                textAlign="center"
                style={{ marginHorizontal: 10, width: 70, overflow: 'scroll' }}
              />
              {/* </ScrollView> */}
              <TouchableOpacity
                onPress={() => handleQty(1, '+')}
                style={{
                  color: COLORS.secondary,
                  backgroundColor: COLORS.primary,
                  width: 70,
                  borderRadius: 3,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <AntDesign size={20} color={COLORS.secondary} name="plus" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleAdd}>
              <Button mode="outlined" icon="plus-box">
                Add To cart
              </Button>
            </TouchableOpacity>
          </View>
        </Modal>
      </Portal>
    </Provider>
  )
}

const mapStateToProps = (state) => ({
  openCartDialogue: state?.app?.openCartDialog,
  preCart: state?.app?.preCart,
})
export default connect(mapStateToProps)(AddToCart)
