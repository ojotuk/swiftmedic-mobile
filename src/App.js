import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import store from 'utils/store'
import 'utils/ignore'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import Router from './routes'
import { COLORS } from './theme/theme'

const App = () => {
  // state
  const [didLoad, setDidLoad] = useState(false)

  // handler
  const handleLoadAssets = async () => {
    // assets preloading
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  // lifecycle
  useEffect(() => {
    handleLoadAssets()
  }, [])

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: COLORS.primary,
      accent: COLORS.secondary,
    },
  }

  // rendering
  if (!didLoad) return <View />
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Router />
      </PaperProvider>
    </Provider>
  )
}

export default App
